import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  { title: "Roupas Femeninas", priceSince: 20, bg: "bg-red-500" },
  { title: "T-shirt Masculinas", priceSince: 30, bg: "bg-slate-900" },
  { title: "Melhores Calçados", priceSince: 50, bg: "bg-red-500" },
];

export default function Categories() {
  return (
    <div className="py-16">
      <div className="max-w-[1024px] flex justify-between items-center mx-auto overflow-hidden">
        {categories.map(({ title, priceSince, bg }) => (
          <div
            key={title}
            className="max-w-[300px] max-h-[300px] relative overflow-hidden transition-all scale-110 hover:scale-100"
          >
            <Image
              className="w-full object-cover"
              src="/product.png"
              alt="product"
              width="300"
              height="300"
            />

            <div
              className={`absolute inset-0 ${bg} opacity-80 text-slate-100 flex flex-col pl-6 justify-center`}
            >
              <h3 className="font-bold text-xl">Sinta-se Melhor!</h3>

              <p className="font-extrabold text-2xl uppercase">{title}</p>

              <Link className="flex gap-3 mt-4" href={`shop/girl`}>
                Compre <ArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
