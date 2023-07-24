import { useCart } from "@/hooks/useCart";
import { ProductCart } from "@/types/glebal";
import { formatPrice } from "@/util/format";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";

const Cart: NextPage = () => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount)
  }))

  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        return sumTotal += product.amount * product.price;
      }, 0)
    )

  function handleProductIncrement(product: ProductCart) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: ProductCart) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);
  }
  return (
    <div className="p-8 bg-white rounded min-h-[calc(100vh-294px)]">
      <table className="w-full">
        <thead>
          <tr>
            <th className="thead-th" aria-label="product-image" />
            <th className="thead-th">PRODUTO</th>
            <th className="thead-th">QTD</th>
            <th className="thead-th">SUBTOTAL</th>
            <th className="thead-th" aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product=>(
          <tr key={product.id}>
            <td className="tbody-td w-32 h-32">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.idImage}`} width="100" height="100" alt="image" />
            </td>
            <td className="tbody-td">
              <strong className="pr-4">{product.name}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td className="tbody-td">
              <div className="flex items-center">
                <button
                  type="button"
                  data-testid="decrement-product"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                >
                  <MinusCircle color="#00BEC5" size={20} />
                </button>
                <input
                  className="border border-gray-500 rounded text-[#666] p-1 w-10 text-center outline-none"
                  type="text"
                  data-testid="product-amount"
                  readOnly
                  value={product.amount}
                />
                <button
                  type="button"
                  data-testid="increment-product"
                  onClick={() => handleProductIncrement(product)}
                >
                  <PlusCircle color="#00BEC5" size={20} />
                </button>
              </div>
            </td>
            <td className="tbody-td">{product.subtotal}</td>
            <td className="tbody-td">
              <button
                type="button"
                data-testid="remove-product"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <Trash color="red" size={20} />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>

      <footer className="mt-8 flex justify-between items-center">
        <button className="bg-red-400 text-white">Finalizar Pedido</button>

        <div className="flex items-baseline">
          <span className="text-gray-900 font-bold">TOTAL</span>
          <strong className="ml-1 text-xl">{total}</strong>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
