import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { MapPin } from "@phosphor-icons/react";

interface AddressData {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export default function ConfirmationPage() {
  const [localAddressData, setLocalAddressData] = useState<AddressData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("addressData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setLocalAddressData(parsedData); 
    }
  }, []); 

  if (!localAddressData) {
    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-xl font-bold text-red-500">Nenhum pedido encontrado</h1>
        <p className="text-gray-600">Preencha o formulário para confirmar seu pedido.</p>
      </div>
    );
  }


  return (
    <>
    <Header/>
    <div className="flex flex-col items-center p-8">
  <h1 className="text-2xl font-bold text-yellow-dark">Uhu! Pedido confirmado</h1>
  <p className="text-base-subtitle">Agora é só aguardar que logo o café chegará até você</p>
  <div
    className="mt-4 p-6  rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none"
    style={{
      backgroundColor: "white", 
      borderRadius: "24px 0px 24px 0px", 
      border: "5px solid ", 
      borderColor: "linear-gradient(45deg, #DBAC2C, #8047F8) 1",
      position: "relative", 
    }}
  >
    <div className="flex flex-row items-center justify-center gap-2">
      <div className="p-2 rounded-full bg-purple">
        <MapPin color="white" weight="fill" />
      </div>
      <p className="text-base-text">
        Entrega em{" "}
        <span className="font-bold">
          {localAddressData.rua}, {localAddressData.numero}
        </span>
      </p>
      <p className="text-base-text text-center">
        {localAddressData.bairro} - {localAddressData.cidade}, {localAddressData.uf}
      </p>
    </div>
  </div>
</div>

    </>
  );
}
