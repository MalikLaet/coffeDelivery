import React from "react";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartItem } from "../context/cardContext";

interface CartSummaryProps {
  cart: CartItem[];
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  deliveryFee: number;
  handleConfirmOrder: () => void;
}

export function CartSummary({
  cart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  deliveryFee,
  handleConfirmOrder,
}: CartSummaryProps) {
  const totalItemsPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const grandTotal = totalItemsPrice + deliveryFee;

  return (
    <div className="bg-base-card p-6 w-[400px] h-[600px] rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none flex flex-col">
      <h2 className="text-lg font-bold text-base-subtitle mb-4">
        Resumo do Pedido
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-base-label flex-grow">
          Seu carrinho está vazio.
        </p>
      ) : (
        <>
          <div
            className="flex-grow overflow-y-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 border-b pb-4 border-base-button"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-16 h-16"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="flex-1">
                    <p className="text-base-subtitle font-medium">
                      {product.title}
                    </p>
                  </div>
                  <p className="text-base-text font-bold">
                    R${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 bg-base-button rounded-md p-2">
                    <button
                      className="text-purple hover:text-purple-dark"
                      onClick={() => decrementQuantity(product.id)}
                    >
                      <Minus size={16} />
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="text-purple hover:text-purple-dark"
                      onClick={() => incrementQuantity(product.id)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    className="text-base-text bg-base-button p-2 rounded-md flex items-center gap-2 hover:bg-base-hover"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <Trash size={18} color="#8047F8" />
                    <span>REMOVER</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex flex-col gap-2 pb-2">
              <div className="flex justify-between gap-2 ">
                <p>Total de itens</p>
                <p>R${totalItemsPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Entrega</p>
                <p>R${deliveryFee.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-bold text-xl mt-4">
                <p>Total</p>
                <p>R${grandTotal.toFixed(2)}</p>
              </div>
            </div>

            <button
              className="w-full mt-6 p-3 bg-yellow text-white rounded-md hover:bg-yellow-dark"
              onClick={handleConfirmOrder}
            >
              Confirmar Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}
