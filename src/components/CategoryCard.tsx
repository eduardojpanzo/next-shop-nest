import { ArrowBigLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CategoryCard() {
  return (
    <div className="max-w-[300px] max-h-[300px] relative overflow-hidden">
      <Image
        className="w-full object-cover"
        src="/product.png"
        alt="product"
        width="300"
        height="300"
      />

      <div className="absolute inset-0 bg-red-500 opacity-80 text-slate-100 flex flex-col pl-6 justify-center">
        <h3 className="font-bold text-xl">Sinta-se Melhor!</h3>

        <p className="font-extrabold text-2xl uppercase">Roupas Femeninas</p>

        <Link className="flex gap-3 mt-4" href={`shop/girl`}>
          Compre <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
