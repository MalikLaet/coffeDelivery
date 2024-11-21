import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-12 p-8 px-32">
    <img src="/logo.png" alt="" />

<div className="flex flex-row gap-6 items-center ">
  <div className="flex flex-row p-2 items-center bg-purple-light text-purple rounded-lg">
    <MapPin size={24} weight="fill" />
    <p className="">Guarulhos,Sp</p>
  </div>
<div className="bg-yellow-light p-2  rounded-lg">
<ShoppingCart  color="#c47f17" size={24} weight="fill" />
</div>
</div>


</div>
  )
}
