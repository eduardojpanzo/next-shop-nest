import { ProductCart } from "@/types/glebal";
import { ReactNode } from "react";

export interface CartProviderProps {
  children: ReactNode;
}

export interface UpdateProductAmount {
  productId: string;
  amount: number;
}
export interface CartContextType {
  cart: ProductCart[];
  addProduct: (productId: string) => Promise<void>;
  removeProduct: (productId: string) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

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
