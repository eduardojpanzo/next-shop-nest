import { createContext, useEffect, useState } from "react";
import { CartContextType, CartProviderProps } from "./types";
import { apiuser } from "@/lib/api";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState([])

  useEffect(()=>{
      getAllProducts()
  }, [products])
  
  const getAllProducts = async() =>{
    const response  = await apiuser.get("product/get/all")
    const productsData = response.data

    console.log(productsData);
    
  }
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
