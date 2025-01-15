// import React, { createContext, useContext, useState, useEffect } from "react";

// interface AddressData {
//   cep: string;
//   rua: string;
//   numero: string;
//   complemento: string;
//   bairro: string;
//   cidade: string;
//   uf: string;
// }

// interface OrderContextType {
//   addressData: AddressData | null;
//   setAddressData: (data: AddressData) => void;
// }

// const OrderContext = createContext<OrderContextType | undefined>(undefined);

// export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [addressData, setAddressData] = useState<AddressData | null>(() => {

//     const savedData = localStorage.getItem("addressData");
//     return savedData ? JSON.parse(savedData) : null;
//   });

//   useEffect(() => {
//     console.log("OrderContext - AddressData updated:", addressData);

//     if (addressData) {
//       localStorage.setItem("addressData", JSON.stringify(addressData));
//     } else {
//       localStorage.removeItem("addressData");
//     }
//   }, [addressData]);

//   return (
//     <OrderContext.Provider value={{ addressData, setAddressData }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

// export const useOrder = () => {
//   const context = useContext(OrderContext);
//   if (!context) {
//     throw new Error("useOrder must be used within an OrderProvider");
//   }
//   return context;
// };
