import React, { useState } from "react";
import Header from "../components/header";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { useCart } from "../context/cardContext";

export default function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const deliveryFee = 5.0; // Taxa de entrega fixa

  const totalItemsPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const grandTotal = totalItemsPrice > 0 ? totalItemsPrice + deliveryFee : 0;

  return (
    <div>
      <Header />
      <div className="font-roboto w-full h-full bg-background px-12 pl-80">
        <h2 className="text-base-subtitle text-lg py-8 font-baloo text-xl">
          Complete seu pedido
        </h2>
        <div className="flex gap-8 items-start">
          <div className="flex flex-col gap-4 flex-[2] max-w-[850px]">
            <div className="flex flex-col items-start bg-base-card p-8 w-full">
              <div className="flex flex-row items-start gap-4">
                <MapPinLine color="#C47F17" size={24} />
                <div className="flex flex-col items-start">
                  <p className="text-base-subtitle">Endereço de Entrega</p>
                  <p className="text-base-text">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>
              <form className="grid grid-cols-4 gap-4 p-4 w-full">
                <input
                  type="text"
                  placeholder="CEP"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Rua"
                  className="col-span-4 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Número"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Complemento (opcional)"
                  className="col-span-3 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Bairro"
                  className="col-span-2 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="UF"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button text-center uppercase"
                />
              </form>
            </div>

            <div className="flex flex-col items-start bg-base-card p-8 w-full">
              <div className="flex items-center gap-2">
                <CurrencyDollar color="#8047F8" />
                <p className="font-roboto">Pagamento</p>
              </div>
              <p className="p-1">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
              <div className="flex items-center justify-between gap-24 pt-4 ">
                <div className="flex items-center gap-3 bg-base-button p-3 rounded-lg cursor-pointer">
                  <CreditCard color="#8047F8" />
                  <p className="text-base-text">CARTÃO DE CRÉDITO</p>
                </div>
                <div className="flex items-center gap-3 bg-base-button p-3 rounded-lg cursor-pointer">
                  <Bank color="#8047F8" />
                  <p className="text-base-text">CARTÃO DE DÉBITO</p>
                </div>
                <div className="flex items-center gap-3 bg-base-button p-3 rounded-lg cursor-pointer">
                  <Money color="#8047F8" />
                  <p className="text-base-text">DINHEIRO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-card p-6  w-[400px] h-[600px]  rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none rounded-md">
            <h2 className="text-lg font-bold text-base-subtitle mb-4">
              Resumo do Pedido
            </h2>
            {cart.length === 0 ? (
              <p className="text-center text-base-label">Seu carrinho está vazio.</p>
            ) : (
              <>
                <div className="flex flex-col gap-4">
                  {cart.map((product) => (
                    <div key={product.id} className="flex flex-col gap-4 border-b pb-4 border-base-button">
                      <div className="flex items-center gap-4">
                        <img className="w-16 h-16 " src={product.image} alt={product.title} />
                        <div className="flex-1">
                          <p className="text-base-subtitle font-medium">{product.title}</p>
                       
                        </div>
                        <p className="text-base-text font-bold">
                          R${(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-4 ">
                        <div className="flex items-center gap-2 bg-base-button rounded-md p-2">
                          <button
                            className="text-purple hover:text-purple-dark"
                            onClick={() => decrementQuantity(product.id)}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-base-subtitle text-sm">{product.quantity}</span>
                          <button
                            className="text-purple hover:text-purple-dark"
                            onClick={() => incrementQuantity(product.id)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          className="flex items-center justify-center gap-2 text-base-text bg-base-button p-2 rounded-md hover:bg-base-hover"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <div className="hover:text-purple-dark">
                          <Trash size={16} color="#8047F8" />
                          </div>
                          <span>REMOVER</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="my-4 border-base-button" />
                <div className="flex justify-between text-base-label">
                  <p>Subtotal</p>
                  <p>R${totalItemsPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base-label">
                  <p>Entrega</p>
                  <p>R${deliveryFee.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-lg font-bold text-base-subtitle mt-4">
                  <p>Total</p>
                  <p>R${grandTotal.toFixed(2)}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
