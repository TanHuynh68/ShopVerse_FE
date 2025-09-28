// product-context.tsx
import { createContext, useContext } from "react";
import useCart from "./useCart";


const Context = createContext<ReturnType<typeof useCart> | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const hook = useCart();
  return (
    <Context.Provider value={hook}>
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error("useCartContext must be used inside CartProvider");
  return context;
};
