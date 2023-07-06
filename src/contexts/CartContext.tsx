import { createContext } from "react";
import { CartContextType, CartProviderProps } from "./types";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
