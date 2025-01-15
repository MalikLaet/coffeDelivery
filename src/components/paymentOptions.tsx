import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import React from "react";

interface PaymentOptionsProps {
  selectedPayment: string | null;
  onSelectPayment: (method: string) => void;
}

export default function PaymentOptions({
  selectedPayment,
  onSelectPayment,
}: PaymentOptionsProps) {
 

  return (
    <div className="flex flex-col items-start bg-base-card p-8 w-full">
    <div className="flex items-center gap-2">
      <CurrencyDollar color="#8047F8" />
      <p className="font-roboto">Pagamento</p>
    </div>
    <p className="p-1">
      O pagamento é feito na entrega. Escolha a forma que deseja pagar
    </p>
    <div className="flex items-center justify-between gap-24 pt-4 ">
      <div
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer 
        ${
          selectedPayment === "credit"
            ? "bg-purple-light border-purple border"
            : "bg-base-button text-base-text"
        } 
        hover:bg-base-hover`}
        onClick={() => onSelectPayment("credit")}
      >
        <CreditCard
          color={selectedPayment === "credit" ? "#8047F8" : "#8047F8"}
          size={20}
        />
        <p>CARTÃO DE CRÉDITO</p>
      </div>

      <div
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer 
        ${
          selectedPayment === "debit"
            ? "bg-purple-light border-purple border"
            : "bg-base-button text-base-text"
        } 
        hover:bg-base-hover`}
        onClick={() => onSelectPayment("debit")}
      >
        <Bank
          color={selectedPayment === "debit" ? "#8047F8" : "#8047F8"}
          size={20}
        />
        <p>CARTÃO DE DÉBITO</p>
      </div>

      <div
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer 
        ${
          selectedPayment === "money"
            ? "bg-purple-light border-purple border"
            : "bg-base-button text-base-text"
        } 
        hover:bg-base-hover`}
        onClick={() => onSelectPayment("money")}
      >
        <Money
          color={selectedPayment === "money" ? "#8047F8" : "#8047F8"}
          size={20}
        />
        <p>DINHEIRO</p>
      </div>
    </div>
  </div>
  );
}
