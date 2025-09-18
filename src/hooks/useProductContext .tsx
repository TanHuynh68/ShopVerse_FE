// product-context.tsx
import { createContext, useContext } from "react";
import useProduct from "@/hooks/useProduct";

const ProductContext = createContext<ReturnType<typeof useProduct> | null>(null);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const productHook = useProduct();
  return (
    <ProductContext.Provider value={productHook}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProductContext must be used inside ProductProvider");
  return context;
};
