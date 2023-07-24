import { ProductCard } from "@/components/ProductCard";
import { apiuser } from "@/lib/api";
import { Product } from "@/types/glebal";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";

type PropsType = { data: Product[] };

export default function Shop({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {  

  const [products, setProducts] = useState(data)

  return (
    <div className="min-h-screen">
      <div className="max-w-[1024px] w-[97%] mx-auto flex items-center justify-center py-6 border-b border-slate-300 lg:w-[100%]">
        <h2 className="uppercase font-bold text-3xl text-red-800">Loja</h2>
      </div>

      <div className="max-w-[1024px] w-[97%] mx-auto lg:w-full">
        <header className="flex items-center justify-between py-4">
          <select
            name="filter"
            id="filter"
            className="p-2 bg-transparent border border-slate-400 outline-none"
          >
            <option value="male">Homem</option>
            <option value="female">Mulher</option>
          </select>
        </header>

        <div className="flex flex-col items-center justify-center content-center gap-2 pb-8 md:flex-row md:flex-wrap lg:justify-start">
          {products.map(product=>(
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {

  const res = await apiuser.get(`/product/get/all`);
  const data: Product[] = res.data;  

  return {
    props: {
      data,
    },
  };
};