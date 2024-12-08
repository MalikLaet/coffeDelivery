import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import Logo from '../../public/logo.png'

export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-12 p-8 px-32">
      <img src={Logo} alt="" />

<div className="flex flex-row gap-6 items-center ">
  <div className="flex flex-row p-3  items-center gap-1 bg-purple-light text-purple rounded-lg">
    <MapPin size={24} weight="fill" />
    <p className="">Guarulhos,Sp</p>
  </div>
<div className="bg-yellow-light p-2  rounded-lg">
<ShoppingCartSimple  color="#c47f17" size={24} weight="fill" />
</div>
</div>


</div>
  )
}
