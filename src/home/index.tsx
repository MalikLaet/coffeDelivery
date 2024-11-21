import Header from "../components/header"

export default function Home() {
  return (
    <div>
        <Header/>
        <div className="flex flex-row items-center justify-center pt-24 bg-bg-banner">
    <div className="flex items-center justify-center flex-col gap-6 pt-24">
      <p className="text-4xl font-bold">Encontre o café perfeito para qualquer hora do dia</p>

      <p className="text-lg">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

    </div>
    <img src="../../public/Imagem.png" alt="" />

        </div>
    </div>
)
}
