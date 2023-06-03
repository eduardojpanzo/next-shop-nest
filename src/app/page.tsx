import { Banner } from "@/components/Banner";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Tag } from "@/components/Tag";
import { BoxIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Banner />
      <CategoryCard />
      <ProductCard />
      <Tag Icon={<BoxIcon />} name="Non Contact Ship" />
    </>
  );
}
