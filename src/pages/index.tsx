import type { NextPage } from "next";
import Head from "next/head";

import { gql, useQuery } from "@apollo/client";

import { Banner } from "@/components/Banner";
import Categories from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { Tags } from "@/components/Tags";
import Loading from "@/components/Loading";

const GET_COLLECTIONS_QUERY = gql`
  query Collections {
    collections {
      description
      id
      name
      slug
      products {
        id
        name
        price
        slug
        images {
          id
          height
          width
          fileName
          url
        }
      }
    }
  }
`;

type Image = {
  id: string;
  height: number;
  width: number;
  fileName: string;
  url: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  slug: string;
  images: Image;
};

type Collection = {
  description: string;
  id: string;
  name: string;
  slug: string;
  products: Product[];
};
interface ResponseData {
  collections: Collection[];
}

const Home: NextPage = () => {
  const { data } = useQuery<ResponseData>(GET_COLLECTIONS_QUERY);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Panigina Inicial</title>
        <meta name="description" content="pagina inicial do site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <>
        <Banner />
        <div className="max-w-[1024px] mx-auto overflow-hidden">
          <Categories />
          <Tags />
        </div>
        <div className="bg-[#f7f7f7] py-10">
          {data.collections.map((collection) => (
            <div
              key={collection.id}
              className="max-w-[1024px] mx-auto last:mt-10"
            >
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
              <div className="flex flex-col items-center justify-center content-center gap-2 md:flex-row md:flex-wrap lg:justify-start">
                {collection.products.map((product) => (
                  <ProductCard key={product.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Newsletter />
      </>
    </>
  );
};

export default Home;
