import Image from "next/image";

export function ProductCard() {
  return (
    <div className="max-w-[300px] flex flex-col border border-white">
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
        <h3 className="font-bold text-lg">Product Name</h3>
        <h4 className="font-bold text-2xl leading-loose">AOA 450.00</h4>

        <div className="flex items-center justify-between text-xs mt-4">
          <span>Vendido: 40</span>

          <span>disponível : 23</span>
        </div>
      </div>
    </div>
  );
}
