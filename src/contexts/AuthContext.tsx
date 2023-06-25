"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import decode from "jwt-decode";

import { apiuser } from "@/lib/api";
import { LoginType, RegisterType, User } from "./types";
import { getCookie } from "cookies-next";

interface AuthContextProps {
  logIn(data: LoginType): Promise<void>;
  register(data: RegisterType): Promise<void>;
  user: User | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user] = useState(getUser());

  async function logIn(data: LoginType) {
    try {
      const registerResponse = await apiuser.post("/user/login", data);

      const { token } = registerResponse.data;

      if (token) {
        toast("Usúario Encotrado!", {
          autoClose: 2000,
          type: "success",
        });

        router.push(`api/login?token=${token}`);
      }
    } catch (error) {
      toast("Faltha ao Localizar o Usuário!", {
        autoClose: 2000,
        type: "error",
      });
    }
  }

  async function register(data: RegisterType) {
    try {
      const registerResponse = await apiuser.post("/user/register", data);

      const email = data.email;
      const password = data.password;

      if (registerResponse) {
        toast("Cadastro feito com Sucesso!", {
          autoClose: 2000,
          type: "success",
        });

        await logIn({ email, password });
      }
    } catch (error) {
      toast("Problemas a fazer o Cadastro!", {
        autoClose: 2000,
        type: "error",
      });
    }
  }

  function getUser(): User | null {
    const token = getCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`)?.toString();

    if (!token) {
      return null;
    }

    const user: User = decode(token);

    return user;
  }

  return (
    <AuthContext.Provider value={{ logIn, register, user }}>
      <ToastContainer />

      {children}
    </AuthContext.Provider>
  );
}
