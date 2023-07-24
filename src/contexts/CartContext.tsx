import { createContext, useEffect, useState } from "react";
import { CartContextType, CartProviderProps } from "./types";
import { apiuser } from "@/lib/api";
import { Product, ProductCart } from "@/types/glebal";
import { getCookie, setCookie } from "cookies-next";
import { toast } from "react-toastify";

interface UpdateProductAmount {
  productId: string;
  amount: number;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState<ProductCart[]>(() => {
    const storagedCart = getCookie('@Morex-front:cart')?.toString();

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  useEffect(()=>{
      getAllProducts()
  }, [products])
  
  const getAllProducts = async() =>{
    const response  = await apiuser.get("product/get/all")
    const productsData = response.data

    console.log(productsData);
    
  }

  const addProduct = async (productId: string) => {
    try {
      const productInCart = cart.findIndex(product => product.id === productId);
      let newCart = [...cart];

      if (productInCart !== -1) {
        const { data: foudedproduct } = await apiuser.get<Product>(`/product/${productId}`);

        if (cart[productInCart].amount >= foudedproduct.salaAmount) {
          toast.error('Quantidade solicitada fora de estoque');
          return;
        }

        newCart[productInCart].amount += 1;
        setCart(newCart);
      } else {
        const { data: product } = await apiuser.get(`/product/${productId}`);
        newCart = [...cart, { ...product, amount: 1 }]
        setCart(newCart);
      }

      setCookie('@Morex-front:cart', JSON.stringify(newCart));
      toast.success('Produto adicionado ao Carrinho');
    } catch {
      toast.error('Erro na adição do produto');
    }
  };


  const removeProduct = (productId: string) => {
    try {
      const productInCart = cart.findIndex(product => product.id === productId);

      if (productInCart === -1) {
        toast.error('Erro na remoção do produto');
        return;
      }

      const updatedCart = cart.filter(product => product.id !== productId);
      setCart(updatedCart);
      setCookie('@Morex-front:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) return;
      const productInCart = cart.findIndex(product => product.id === productId);

      if (productInCart === -1) {
        toast.error('Erro na alteração de quantidade do produto');
        return;
      }

      const { data: foudedproduct } = await apiuser.get<Product>(`/product/${productId}`);
      const productUnavaliable = amount > foudedproduct.stockAmount;

      if (productUnavaliable) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedCart = [...cart];
      updatedCart[productInCart].amount = amount;

      setCart(updatedCart);
      setCookie('@Morex-front:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
