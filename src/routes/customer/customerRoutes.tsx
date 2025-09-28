import { CartPage, ProductByCategoriesPage, ProductDetailPage } from "@/pages";
import { CUSTOMER_PATH } from "./customerPath";
import { CustomerLayout } from "@/components/layouts";
import { ProductProvider } from "@/hooks/useProductContext ";
import { CartProvider } from "@/hooks/useCartContext";

export const customerRoutes = [
  {
    path: "",
    element: (
      <CartProvider>
        <CustomerLayout />
      </CartProvider>
    ),
    children: [
      {
        path: CUSTOMER_PATH.PRODUCT_BY_CATEGORY,
        element: (
          <ProductProvider>
            <ProductByCategoriesPage />
          </ProductProvider>
        ),
      },
      {
        path: CUSTOMER_PATH.PRODUCT_DETAIL,
        element: <ProductDetailPage />,
      },
      {
        path: CUSTOMER_PATH.CART_PAGE,
        element: <CartPage />,
      },
    ],
  },
];
