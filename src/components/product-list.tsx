import React from 'react'
import { coffees } from "../../data.json"
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useCart } from '../context/cardContext'

export function ProductList() {
  const {addToCart} = useCart()

  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-12 pt-12 pb-12'>
      {coffees.map((coffee) => (
        <div
          key={coffee.id}
          className='flex flex-col items-center justify-center gap-4 bg-base-card p-6 relative 
            rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none border border-base-card'
        >
          <img
            className="w-24 h-24 -mt-12"
            src={coffee.image}
            alt={coffee.title}
          />
          <div className="flex gap-2 flex-wrap justify-center">
            {coffee.tags.map((tag, index) => (
              <span
                key={index}
                className='bg-yellow-light text-yellow-dark rounded-xl px-2 py-1 text-xs font-semibold'
              >
                {tag}
              </span>
            ))}
          </div>
          <p className='text-base-subtitle'>{coffee.title}</p>
          <p className="text-base-label text-sm text-center">
            {coffee.description.split(" ").slice(0, Math.ceil(coffee.description.split(" ").length / 2)).join(" ")}
            <br />
            {coffee.description.split(" ").slice(Math.ceil(coffee.description.split(" ").length / 2)).join(" ")}
          </p>
          <div className='flex flex-row items-center justify-between gap-12'>
            <p className='text-base-text text-xl '>R${coffee.price.toFixed(2)}</p>
            <div className="flex items-center gap-2 bg-base-button p-1 rounded-md">
              <button className="text-purple-dark">
                <Minus size={16} />
              </button>
              <span className="text-base-subtitle text-sm">1</span>
              <button 
              className="text-purple-dark"
              onClick={() => addToCart(coffee)}
              >
                <Plus size={16} />
              </button>
            </div>
            <div className="flex p-2 rounded-md bg-purple-dark">
              <ShoppingCartSimple color="#FAFAFA" weight="fill" size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
