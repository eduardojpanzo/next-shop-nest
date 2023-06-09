import { ProductCard } from "@/components/ProductCard";

export default function Shop() {
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
            <option value="female">femenina</option>
            <option value="female">femenina</option>
            <option value="female">femenina</option>
          </select>
        </header>

        <div className="flex flex-col items-center justify-center content-center gap-2 pb-8 md:flex-row md:flex-wrap lg:justify-start">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
