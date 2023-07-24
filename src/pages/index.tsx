import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";

import { Banner } from "@/components/Banner";
import Categories from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { Tags } from "@/components/Tags";
import { ThreeDotsLoader } from "@/components/ThreeDotsLoader";
import { apiuser } from "@/lib/api";
import { Collection } from "@/types/glebal";

type PropsType = { data: Collection[] };



export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {   

  return (
    <>
      <Head>
        <title>Panigina Inicial</title>
        <meta name="description" content="pagina inicial do site" />
      </Head>

      <>
        <Banner />
        <div className="max-w-[1024px] mx-auto overflow-hidden">
          <Categories />
          <Tags />
        </div>
        <div className="bg-[#f7f7f7] py-10">
          {data ? (
            <>
              {data.map((collection) => (
                <div
                  key={collection.id}
                  className="max-w-[1024px] mx-auto last:mt-10"
                >
                  <h2>{collection.name}</h2>
                  <p>{collection.description}</p>
                  <div className="flex flex-col items-center justify-center content-center gap-2 md:flex-row md:flex-wrap lg:justify-start">
                    {collection.products.map((product) => (
                      <ProductCard key={product.product.id} product={product.product} />
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <ThreeDotsLoader />
          )}
        </div>
        <Newsletter />
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {

  const res = await apiuser.get(`/collection/all`);
  const data: Collection[] = res.data;  

  return {
    props: {
      data,
    },
  };
};
