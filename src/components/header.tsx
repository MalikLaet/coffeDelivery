import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import Logo from '../../public/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-12 p-8 px-32">
      <Link to="/">
      <img src={Logo} alt="" />
      </Link>

<div className="flex flex-row gap-6 items-center ">
  <div className="flex flex-row p-2  items-center gap-1 bg-purple-light text-purple rounded-lg">
    <MapPin size={24} weight="fill" />
    <p className="">Guarulhos,SP</p>
  </div>
<Link to="/Cart" className="bg-yellow-light p-2  rounded-lg">
<ShoppingCartSimple  color="#c47f17" size={24} weight="fill" />
</Link>
</div>


</div>
  )
}
