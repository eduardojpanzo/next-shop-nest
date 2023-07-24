import { Product } from "@/types/glebal";
import Image from "next/image";

interface ProductCardProps {
  product: Product
}
export function ProductCard({product}:ProductCardProps) {
  return (
    <div className="relative bg-white flex flex-col border border-white rounded-md overflow-hidden group lg:max-w-[250px]">
      <div className="max-w-full h-auto">
        <Image
          className="w-full object-cover h-auto"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.idImage}`}
          alt={product.slug}
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="w-full h-36 p-3">
        <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
        <h4 className="font-bold text-2xl leading-loose text-red-500">
          AOA {product.price}
        </h4>

        <div className="flex items-center justify-between text-xs mt-4 text-gray-500">
          <span>Quantidade: {product.amount}</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-slate-50 bg-opacity-80 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
        <button className="bg-red-500 text-white">Adicionar o carrinho</button>
      </div>
    </div>
  );
}
