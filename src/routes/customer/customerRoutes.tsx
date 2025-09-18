import { ProductByCategoriesPage } from "@/pages";
import { CUSTOMER_PATH } from "./customerPath";
import { CustomerLayout } from "@/components/layouts";
import { ProductProvider } from "@/hooks/useProductContext ";

export const customerRoutes = [
  {
    path: "",
    element: <CustomerLayout />,
    children: [
      {
        path: CUSTOMER_PATH.PRODUCT_BY_CATEGORY,
        element: (
          <ProductProvider>
            <ProductByCategoriesPage />
          </ProductProvider>
        ),
      },
    ],
  },
];
