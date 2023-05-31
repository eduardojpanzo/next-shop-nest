export function TopBar() {
  return (
    <div className="h-[45px] bg-slate-800 ">
      <div className="h-full max-w-[1024px] flex items-center justify-between mx-auto text-white">
        <h1>logo</h1>

        <input type="search" name="search" id="search" />

        <div>cart</div>
      </div>
    </div>
  );
}
