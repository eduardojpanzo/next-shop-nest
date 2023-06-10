import { useRouter } from "next/navigation";
import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";

import { apiuser } from "@/lib/api";
import { LoginType, RegisterType } from "./types";
import { NextResponse } from "next/server";

interface AuthContextProps {}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const logIn = async (data: LoginType) => {
    try {
      const registerResponse = await apiuser.post("/user/login", data);

      const { token } = registerResponse.data;

      const cookieExpiresInSeconds = 60 * 60 * 24 * 3; // 3 days

      if (token) {
        //mostrar informação que cadastro feito!
        toast("Usuario resconhecido", {
          autoClose: 2000,
          type: "success",
        });

        //redicionar pagina inicial
        const redirectURL = new URL("/");
        return NextResponse.redirect(redirectURL, {
          headers: {
            "set-Cookie": `token= ${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
          },
        });
      }
    } catch (error) {
      toast(`${error}`, {
        autoClose: 2000,
        type: "error",
      });
    }
  };

  const logout = async () => {
    const redirectURL = new URL("/");

    return NextResponse.redirect(redirectURL, {
      headers: {
        "set-Cookie": `token=; Path=/; max-age=0;`,
      },
    });
  };

  const register = async (data: RegisterType) => {
    try {
      const registerResponse = await apiuser.post("/user/register", data);

      if (registerResponse) {
        //mostrar informação que cadastro feito!
        toast("Cadastro feito com sucesso", {
          autoClose: 2000,
          type: "success",
        });

        //redicionar para login
        router.push("/login");
      }
    } catch (error) {
      toast(`${error}`, {
        autoClose: 2000,
        type: "error",
      });
    }
  };

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
