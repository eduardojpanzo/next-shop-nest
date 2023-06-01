import Link from "next/link";

const menuItems = [
  { path: "/", value: "Home" },
  { path: "/shop", value: "Shop" },
  { path: "/about", value: "About Us" },
  { path: "/contact", value: "Contact Us" },
];

export function NavBar() {
  return (
    <div className="bg-slate-100 shadow-md">
      <div className=" max-w-[1024px] mx-auto px-2 py-4 flex items-center justify-between lg:px-0">
        <ul className="flex gap-3">
          {menuItems.map(({ value, path }) => (
            <li key={value}>
              <Link
                className="block w-full h-full px-3 py-2 transition-all hover:text-red-500"
                href={path}
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button>Criar conta</button>
          <button className="text-slate-100 bg-red-500">Entrar</button>
        </div>
      </div>
    </div>
  );
}
