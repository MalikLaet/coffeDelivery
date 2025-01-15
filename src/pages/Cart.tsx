import React, { useState } from "react";
import Header from "../components/header";
import { useCart } from "../context/cardContext";
import AddressForm from "../components/addressForm";
import PaymentOptions from "../components/paymentOptions";
import { CartSummary } from "../components/cartSummary";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const deliveryFee = 5.0;
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    if (!isValid) {
      alert("Por favor, preencha o formulário corretamente.");
      return;
    }

    if (!selectedPayment) {
      alert("Por favor, selecione uma forma de pagamento.");
      return;
    }

    // Verifique e salve os dados no localStorage
    console.log("Salvando dados no localStorage:", formData);
    localStorage.setItem("addressData", JSON.stringify(formData));
    
    // Navega para a página de confirmação
    navigate("/confirmation");
  };

  return (
    <div>
      <Header />
      <div className="font-roboto w-full h-full bg-background px-12 pl-80">
        <h2 className="text-base-subtitle text-lg py-8 font-baloo text-xl">
          Complete seu pedido
        </h2>
        <div className="flex gap-8 items-start">
          <div className="flex flex-col gap-4 flex-[2] max-w-[850px]">
            <AddressForm setIsValid={setIsValid} setFormData={setFormData} />
            <PaymentOptions
              selectedPayment={selectedPayment}
              onSelectPayment={setSelectedPayment}
            />
          </div>
          <CartSummary
            cart={cart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeFromCart={removeFromCart}
            deliveryFee={deliveryFee}
            handleConfirmOrder={handleConfirmOrder}
          />
        </div>
      </div>
    </div>
  );
}
