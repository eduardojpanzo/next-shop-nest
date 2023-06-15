"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import decode from "jwt-decode";
import { setCookie, deleteCookie, getCookie, hasCookie } from "cookies-next";
import { toast, ToastContainer } from "react-toastify";

import { apiuser } from "@/lib/api";
import { LoginType, RegisterType, User } from "./types";

interface AuthContextProps {
  logIn(data: LoginType): Promise<void>;
  logout(): Promise<void>;
  register(data: RegisterType): Promise<void>;
  user: User | null;
  isAuth: boolean | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const user = getUser();
  const hastoken = hasCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`);

  const [isAuth, setIsAuth] = useState(user && hastoken);

  useEffect(() => {
    setIsAuth(user && hastoken);
  }, [hastoken, user]);

  async function logIn(data: LoginType) {
    try {
      const registerResponse = await apiuser.post("/user/login", data);

      const { token } = registerResponse.data;

      const cookieExpiresInSeconds = 60 * 60 * 24 * 7; // 7 days

      if (token) {
        setCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`, token, {
          maxAge: cookieExpiresInSeconds,
          sameSite: true,
        });

        toast("Usúario Encotrado!", {
          autoClose: 2000,
          type: "success",
        });
      }
    } catch (error) {
      toast("Faltha ao Localizar o Usuário!", {
        autoClose: 2000,
        type: "error",
      });
    }
  }

  async function logout() {
    deleteCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`, { path: "/" });
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
    <AuthContext.Provider value={{ logIn, logout, register, user, isAuth }}>
      <ToastContainer />

      {children}
    </AuthContext.Provider>
  );
}
