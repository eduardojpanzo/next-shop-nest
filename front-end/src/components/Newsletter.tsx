export function Newsletter() {
  return (
    <div className="max-w-[1024px] mx-auto flex flex-col gap-5 py-10 px-2 md:flex-row md:items-center md:justify-between lg:px-0">
      <div>
        <h3 className="text-xl font-bold">Newsletter and get updates</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum
        </p>
      </div>

      <div className="flex border border-slate-300 w-[max-content]">
        <input
          className="bg-transparent outline-none p-2"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <button className="bg-red-500 outline-none text-slate-100 font-bold">
          Subscrever
        </button>
      </div>
    </div>
  );
}
