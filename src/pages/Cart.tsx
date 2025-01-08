import React, { useState } from "react";
import Header from "../components/header";
import { useCart } from "../context/cardContext";
import AddressForm from "../components/addressForm";
import PaymentOptions from "../components/paymentOptions";
import { CartSummary } from "../components/cartSummary";

export default function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const deliveryFee = 5.0;
  return(
  <div>
  <Header />
  <div className="font-roboto w-full h-full bg-background px-12 pl-80">
    <h2 className="text-base-subtitle text-lg py-8 font-baloo text-xl">
      Complete seu pedido    </h2>
    <div className="flex gap-8 items-start">
      <div className="flex flex-col gap-4 flex-[2] max-w-[850px]">
        <AddressForm />
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
      />
    </div>
  </div>
</div>
  );
}
