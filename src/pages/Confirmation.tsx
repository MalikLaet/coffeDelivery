import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { CurrencyDollar, MapPin, Clock } from "@phosphor-icons/react";

interface OrderData {
  addressData: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
  };
  paymentMethod: string;
}

export default function ConfirmationPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const savedOrderData = localStorage.getItem("orderData");
    if (savedOrderData) {
      setOrderData(JSON.parse(savedOrderData));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-xl font-bold text-red-500">Nenhum pedido encontrado</h1>
        <p className="text-gray-600">Preencha o formulário para confirmar seu pedido.</p>
      </div>
    );
  }

  const paymentMethods: Record<string, string> = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
    money: "Dinheiro",
  };

  return (
    <>
      <Header />
      <div className="flex flex-row items-center justify-between p-8">
        {/* Card Section */}
        <div className="flex flex-col items-start p-8 pl-48  max-w-[50%]">
          <h1 className="text-3xl font-bold text-yellow-dark">Uhu! Pedido confirmado</h1>
          <p className="text-base-subtitle text-lg">
            Agora é só aguardar que logo o café chegará até você
          </p>
          <div className="p-[1px] mt-12 rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none bg-gradient-to-br from-yellow-dark to-purple">
            <div className="p-8 bg-background rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <div className="p-2 rounded-full bg-purple">
                  <MapPin color="white" weight="fill" />
                </div>
                <p className="text-base-text">
                  Entrega em{" "}
                  <span className="font-bold">
                    {orderData.addressData.rua}, {orderData.addressData.numero}
                  </span>
                  <br />
                  {orderData.addressData.bairro} - {orderData.addressData.cidade},{" "}
                  {orderData.addressData.uf}
                </p>
              </div>
              <div className="flex flex-row items-center pt-4 gap-2">
                <div className="p-2 rounded-full bg-yellow">
                  <Clock color="white" weight="fill" />
                </div>
                <p className="text-base-text">
                  Previsão de entrega <br />
                  <span className="font-bold">20 min - 30 min</span>
                </p>
              </div>
              <div className="flex flex-row items-center pt-4 gap-2">
                <div className="p-2 rounded-full bg-yellow-dark">
                  <CurrencyDollar color="white" />
                </div>
                <p className="text-base-text">
                  Pagamento na entrega <br />
                  <span className="font-bold">{paymentMethods[orderData.paymentMethod]}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[50%] pr-48">
          <img
            src="../../public/Illustration.png"
            alt="Ilustração de pedido confirmado"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
