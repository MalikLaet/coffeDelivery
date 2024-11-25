import React from "react"
import Header from "../components/header"
import {coffees} from '../../data.json'
import { ShoppingCartSimple, Timer, Package, Coffee } from '@phosphor-icons/react'
export default function Home() {
  return (
    <div>
        <Header/>
        <div className="flex flex-row items-start justify-center gap-36 pt-24 bg-bg-banner rounded-xl">
    <div className="flex items-start justify-center flex-col gap-6 pt-24 ">
      <p className="text-4xl font-bold">Encontre o café perfeito <br /> para qualquer hora do dia</p>

      <p className="text-lg">Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</p>

  <div className="flex flex-col gap-12">
    <div className="flex flex-row items-center justify-center gap-12">   
      <div className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-full bg-yellow-dark">
          <ShoppingCartSimple color="#FAFAFA" weight="fill" />
        </div>
        <p>Compra simples e segura</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-full bg-base-text">
        <Package color="#FAFAFA" weight="fill"/>
        </div>
        <p>Embalagem mantém o café intacto</p>
      </div>
    </div>
    <div className="flex flex-row items-center justify-center gap-12">
      <div className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-full bg-yellow">
          <Timer color="#FAFAFA" weight="fill"/>
        </div>
        <p>Entrega rápida e rastreada</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-full bg-purple">
        <Coffee color="#FAFAFA" weight="fill"/>
        </div>
        <p>O café chega fresquinho até você</p>
      </div>
    </div>
    </div>
  </div>
    <img src="../../public/Imagem.png" alt="" />

        </div>

      <div>
        {/* <h2>Nossos cafés</h2> */}

          <div>
          </div>
      </div>

    </div>
)
}
