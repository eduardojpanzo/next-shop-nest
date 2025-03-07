import { ShoppingCart, Search } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function TopBar() {
  const router = useRouter()
  const {cart}= useCart()
  const handleGoTocart = ()=>{
    if (!cart.length) {
      toast.info("adicione um prodto no carrinho")
      return
    }
    router.push("/cart")
  } 
  return (
    <div className="h-[50px] bg-slate-800 sticky top-0 z-10" onClick={handleGoTocart}>
      <div className="h-full max-w-[1024px] px-2  flex items-center justify-between mx-auto text-white lg:px-0">
        <Logo />

        <form className="w-[35%] min-w-[100px] flex justify-between rounded-sm bg-slate-100 overflow-hidden">
          <input
            className=" max-w-[80%] px-2 flex-1 py-1 bg-transparent outline-none text-gray-700"
            type="search"
            name="search"
            id="search"
            placeholder="Encontre o Melhor Produto"
          />
          <button className="px-3 bg-red-500">
            <Search color="white" size={18} />
          </button>
        </form>

        <div className="relative w-9 cursor-pointer">
          <ShoppingCart />
          <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 rounded-full bg-red-500 text-xs font-bold">
            {cart?cart.length:0}
          </span>
        </div>
      </div>
    </div>
  );
}
