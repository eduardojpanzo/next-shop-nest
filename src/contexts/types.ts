import { ReactNode } from "react";

export interface CartProviderProps {
  children: ReactNode;
}

export type CartContextType = {};
export type RegisterType = {
  email: string;
  name: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};
export type User = {
  name: string;
  email: string;
  sub: string;
};
