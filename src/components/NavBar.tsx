export function NavBar() {
  return (
    <div className="bg-slate-300">
      <div className=" max-w-[1024px] mx-auto p-1 flex items-center justify-around">
        <ul className="flex gap-3">
          <li>Shop</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className="flex gap-3">
          <button>Criar conta</button>
          <button>Entrar</button>
        </div>
      </div>
    </div>
  );
}
