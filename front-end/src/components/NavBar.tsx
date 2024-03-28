"use client";

import { User } from "lucide-react";
import Link from "next/link";
import { Dialog } from "./Dialog";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { useAuth } from "@/hooks/auth";

const menuItems = [
  { path: "/", value: "Inicial" },
  { path: "/shop", value: "Loja" },
  { path: "/about", value: "Sobre" },
  { path: "/contact", value: "Contacte-nos" },
];

export function NavBar() {
  const {user} = useAuth();
  return (
    <div className="bg-slate-100 shadow-md">
      <div className=" max-w-[1024px] mx-auto px-2 py-4 flex items-center justify-between lg:px-0">
        <ul className="flex gap-2 items-center">
          {menuItems.map(({ value, path }) => (
            <li key={value} className="py-2 p-4 rounded-sm hover:bg-red-500 hover:text-white transition-all">
              <Link
                className="block w-full h-full px-3 py-2 transition-all text-inherit"
                href={path}
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>

        {user?.email ? (
          <div className="flex gap-3 cursor-pointer hover:text-red-500">
            <User />
          </div>
        ) : (
          <div className={`flex gap-3`}>
            <Dialog
              title="Criar Conta"
              desc="Crie a sua conta, ganhe beneficios, favorite os seus produtos e mantenha-se atualizado (a)!"
              trigger={<button className="bg-slate-300">Criar conta</button>}
            >
              <SignUpForm />
            </Dialog>

            <Dialog
              title="Entrar"
              desc="Entre na sua conta e faça as suas escolhas!"
              trigger={
                <button className="text-slate-100 bg-red-500">Entrar</button>
              }
            >
              <SignInForm />
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
}
