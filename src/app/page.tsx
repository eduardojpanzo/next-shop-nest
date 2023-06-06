import { Banner } from "@/components/Banner";
import Categories from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { Tags } from "@/components/Tags";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-[1024px] mx-auto overflow-hidden">
        <Categories />
        <Tags />
      </div>
      <div className="bg-[#f7f7f7] py-10">
        <div className="max-w-[1024px] mx-auto flex flex-col gap-4 justify-center items-center md:flex-row md:flex-wrap md:justify-start">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Newsletter />
    </>
  );
}
