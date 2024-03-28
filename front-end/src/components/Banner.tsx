import Image from "next/image";

export function Banner() {
  return (
    <div className=" bg-[#fbfbfb]">
      <div className="max-w-[1024px] mx-auto overflow-hidden md:flex">
        <div>
          <Image
            className="w-full"
            src="/banner-img.png"
            alt="initial"
            width="500"
            height="500"
          />
        </div>

        <div className="py-12 px-4 flex flex-col items-start justify-center gap-4">
          <h2 className="text-4xl uppercase text-slate-800 mb-4">
            Obtenha Aqui! <br />
            Todos os Produtos originais
          </h2>

          <p className="text-xs mb-3 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            laudantium quisquam, quam autem quae et ullam maiores reprehenderit
            eum a?
          </p>

          <button className="bg-red-500 text-slate-100">Comprar Agora</button>
        </div>
      </div>
    </div>
  );
}
