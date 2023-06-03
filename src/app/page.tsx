import { Banner } from "@/components/Banner";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Tags } from "@/components/Tags";

export default function Home() {
  return (
    <>
      <Banner />
      <CategoryCard />
      <ProductCard />
      <Tags />
    </>
  );
}
