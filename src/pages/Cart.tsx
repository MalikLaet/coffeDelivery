import React, { useState } from 'react';
import Header from '../components/header';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react';

export default function Cart() {
  const [cart, setCart] = useState([]); // Estado do carrinho
  const deliveryFee = 5.0; // Taxa de entrega fixa

  const totalItemsPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const grandTotal = totalItemsPrice > 0 ? totalItemsPrice + deliveryFee : 0;

  return (
    <div>
      <Header />
      <div className="font-roboto w-full h-full bg-background px-12 pl-80">
        <h2 className="text-base-subtitle text-lg py-8 font-baloo text-xl">Complete seu pedido</h2>
        <div className="flex gap-8 items-start">
          {/* Coluna esquerda: Endereço e Pagamento */}
          <div className="flex flex-col gap-4 flex-[2] max-w-[850px]">
            {/* Endereço de Entrega */}
            <div className="flex flex-col items-start bg-base-card p-8 w-full">
              <div className="flex flex-row items-start gap-4">
                <MapPinLine color="#C47F17" size={24} />
                <div className="flex flex-col items-start">
                  <p className="text-base-subtitle">Endereço de Entrega</p>
                  <p className="text-base-text">Informe o endereço onde deseja receber seu pedido</p>
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

            {/* Pagamento */}
            <div className="flex flex-col items-start bg-base-card p-8 w-full">
              <div className="flex items-center gap-2">
                <CurrencyDollar color="#8047F8" />
                <p className="font-roboto">Pagamento</p>
              </div>
              <p className="p-1">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center justify-center gap-3 bg-base-button p-3 rounded-lg cursor-pointer">
                  <CreditCard color="#8047F8" />
                  <p className="text-base-text">CARTÃO DE CRÉDITO</p>
                </div>
                <div className="flex items-center justify-center gap-3 bg-base-button p-3 rounded-lg cursor-pointer">
                  <Bank color="#8047F8" />
                  <p className="text-base-text">CARTÃO DE DÉBITO</p>
                </div>
                <div className="flex items-center justify-center gap-3 bg-base-button p-3 rounded-lg cursor-pointer">
                  <Money color="#8047F8" />
                  <p className="text-base-text">DINHEIRO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita: Resumo do Pedido */}
          <div
            className="bg-base-card p-6  w-[400px] h-[600px]  rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none rounded-md"
          >
            <h2 className="text-lg font-bold text-base-subtitle mb-4">Resumo do Pedido</h2>
            {cart.length === 0 ? (
              <p className="text-center text-base-label">Seu carrinho está vazio.</p>
            ) : (
              <>
                <div className="flex flex-col gap-4">
                  {cart.map((product) => (
                    <div key={product.id} className="flex items-center gap-4">
                      <img className="w-12 h-12" src={product.image} alt={product.title} />
                      <div className="flex-1">
                        <p className="text-base-subtitle font-medium">{product.title}</p>
                        <p className="text-base-label text-sm">
                          {product.quantity} x R${product.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-base-text font-bold">
                        R${(product.price * product.quantity).toFixed(2)}
                      </p>
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
