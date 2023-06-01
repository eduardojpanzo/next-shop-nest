import Link from "next/link";
import { Logo } from "./Logo";
import { NetworkLinks } from "./NetworkLinks";

const pageItems = [
  { path: "/", value: "Home" },
  { path: "/about", value: "AboutUs" },
  { path: "/conctact", value: "Contact" },
];

export function Footer() {
  return (
    <footer className=" bg-slate-800  text-stone-100">
      <div className="max-w-[1024px] mx-auto px-2 pt-10 pb-4 flex flex-wrap gap-10 md:justify-between lg:px-0">
        <div>
          <Logo />

          <p className="my-4 text-sm">
            Lorem ipsum dolor, sit amet consectetur
          </p>

          <NetworkLinks />
        </div>

        <div>
          <h2 className="font-bold text-lg">Paginas</h2>
          <ul className="flex flex-col gap-2">
            {pageItems.map(({ path, value }) => (
              <li key={path} className="transition-all hover:text-red-500">
                <Link href={path}>{value}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <span>Contacte-nos</span>
            <br />
            <em className="text-2xl not-italic font-bold">+244 993627743</em>
          </div>

          <div>
            <span className="text-xs">same things about conc</span> <br />
            <button className="bg-red-500 text-slate-50">Encotre-nos</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
