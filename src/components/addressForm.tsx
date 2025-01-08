import { MapPinLine } from '@phosphor-icons/react'
import React from 'react'

export default function AddressForm() {
  return (
    <div className="flex flex-col items-start bg-base-card p-8 w-full">
              <div className="flex flex-row items-start gap-4">
                <MapPinLine color="#C47F17" size={24} />
                <div className="flex flex-col items-start">
                  <p className="text-base-subtitle">Endereço de Entrega</p>
                  <p className="text-base-text">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>
              <form className="grid grid-cols-4 gap-4 p-4 w-full">
                <input
                  type="text"
                  placeholder="CEP"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Rua"
                  className="col-span-4 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Número"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Complemento (opcional)"
                  className="col-span-3 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Bairro"
                  className="col-span-2 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button"
                />
                <input
                  type="text"
                  placeholder="UF"
                  className="col-span-1 p-3 border rounded bg-base-input text-base-label border-base-button text-center uppercase"
                />
              </form>
            </div>
  )
}
