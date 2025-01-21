import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import Logo from "../../public/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cardContext";

export default function Header() {
  const { cartItemCount } = useCart();

  return (
    <div className="flex flex-row justify-between gap-12 p-8 px-32">
      <Link to="/">
        <img src={Logo} alt="Logo da loja" />
      </Link>

      <div className="flex flex-row gap-6 items-center">
        {/* Localização */}
        <div className="flex flex-row p-2 items-center gap-1 bg-purple-light text-purple rounded-lg">
          <MapPin size={24} weight="fill" />
          <p>Guarulhos, SP</p>
        </div>

        {/* Carrinho */}
        <Link to="/Cart" className="relative bg-yellow-light p-2 rounded-lg">
          <ShoppingCartSimple color="#c47f17" size={24} weight="fill" />
          {cartItemCount > 0 && (
            <span className="absolute top-[-8px] right-[-8px] bg-yellow-dark text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
