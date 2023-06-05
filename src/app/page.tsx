import { Banner } from "@/components/Banner";
import Categories from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { Tags } from "@/components/Tags";
import { BoxIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Tags />
      <ProductCard />
      <Newsletter />
    </>
  );
}
