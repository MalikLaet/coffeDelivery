import { MapPinLine } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AddressData {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface AddressFormProps {
  setIsValid: (isValid: boolean) => void;
  setFormData: (formData: AddressData) => void; // Adicione a função para atualizar o estado do formData
}

export default function AddressForm({ setIsValid, setFormData }: AddressFormProps) {
  const [formData, setLocalFormData] = useState<AddressData>({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.cep) errors.cep = "CEP é obrigatório";
    if (!formData.rua) errors.rua = "Rua é obrigatória";
    if (!formData.numero) errors.numero = "Número é obrigatório";
    if (!formData.bairro) errors.bairro = "Bairro é obrigatório";
    if (!formData.cidade) errors.cidade = "Cidade é obrigatória";
    if (!formData.uf) errors.uf = "UF é obrigatória";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    setIsValid(validateForm());
    setFormData(formData);  // Atualiza os dados no componente pai
  }, [formData, setIsValid, setFormData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("addressData", JSON.stringify(formData));
    } else {
    }
  };

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
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 p-4 w-full">
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={formData.cep}
          onChange={handleInputChange}
          className={`col-span-1 p-3 border rounded ${
            formErrors.cep ? "border-red-500" : "border-base-button"
          }`}
        />

        <input
          type="text"
          name="rua"
          placeholder="Rua"
          value={formData.rua}
          onChange={handleInputChange}
          className={`col-span-4 p-3 border rounded ${
            formErrors.rua ? "border-red-500" : "border-base-button"
          }`}
        />

        <input
          type="text"
          name="numero"
          placeholder="Número"
          value={formData.numero}
          onChange={handleInputChange}
          className={`col-span-1 p-3 border rounded ${
            formErrors.numero ? "border-red-500" : "border-base-button"
          }`}
        />

        <input
          type="text"
          name="complemento"
          placeholder="Complemento (opcional)"
          value={formData.complemento}
          onChange={handleInputChange}
          className="col-span-3 p-3 border rounded border-base-button"
        />

        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          value={formData.bairro}
          onChange={handleInputChange}
          className={`col-span-2 p-3 border rounded ${
            formErrors.bairro ? "border-red-500" : "border-base-button"
          }`}
        />

        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleInputChange}
          className={`col-span-1 p-3 border rounded ${
            formErrors.cidade ? "border-red-500" : "border-base-button"
          }`}
        />

        <input
          type="text"
          name="uf"
          placeholder="UF"
          value={formData.uf}
          onChange={handleInputChange}
          className={`col-span-1 p-3 border rounded text-center uppercase ${
            formErrors.uf ? "border-red-500" : "border-base-button"
          }`}
        />
      </form>
    </div>
  );
}
