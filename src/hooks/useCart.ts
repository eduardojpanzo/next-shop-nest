import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import { CartContextType } from "@/contexts/types";

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  return context;
}
