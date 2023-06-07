import Image from "next/image";

export function ProductCard() {
  return (
    <div className="relative max-w-[300px] bg-white flex flex-col border border-white rounded-md overflow-hidden group">
      <div className="max-w-full h-auto">
        <Image
          className="w-full object-cover"
          src={"/product.png"}
          alt="product"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="w-full h-36 p-3">
        <h3 className="font-bold text-lg text-gray-800">Product Name</h3>
        <h4 className="font-bold text-2xl leading-loose text-red-500">
          AOA 450.00
        </h4>

        <div className="flex items-center justify-between text-xs mt-4 text-gray-500">
          <span>Vendido: 40</span>

          <span>disponível : 23</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-slate-50 bg-opacity-80 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
        <button className="bg-red-500 text-white">Adicionar o carrinho</button>
      </div>
    </div>
  );
}
