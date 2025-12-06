import {
  CartPage,
  CustomerOrdersPage,
  MyTransactions,
  PaymentFailedPage,
  PaymentProcessPage,
  PaymentSuccessPage,
  ProductByCategoriesPage,
  ProductDetailPage,
  Profile,
} from "@/pages";

import { CustomerLayout } from "@/components/layouts";
import { ProductProvider } from "@/hooks/useProductContext ";
import { CartProvider } from "@/hooks/useCartContext";
import { CUSTOMER_PATH } from "./customerPath";

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
        path: CUSTOMER_PATH.CUSTOMER_PROFILE_PAGE,
        element: <Profile />,
      },
      {
        path: CUSTOMER_PATH.PRODUCT_DETAIL,
        element: <ProductDetailPage />,
      },
      {
        path: CUSTOMER_PATH.CART_PAGE,
        element: <CartPage />,
      },
      {
        path: CUSTOMER_PATH.PAYMENT_PROCESS_PAGE,
        element: <PaymentProcessPage />,
      },
      {
        path: CUSTOMER_PATH.PAYMENT_SUCCESS_PAGE,
        element: <PaymentSuccessPage />,
      },
      {
        path: CUSTOMER_PATH.PAYMENT_FAILED_PAGE,
        element: <PaymentFailedPage />,
      },
      {
        path: CUSTOMER_PATH.CUSTOMER_ORDERS_PAGE,
        element: <CustomerOrdersPage />,
      },
      {
        path: CUSTOMER_PATH.CUSTOMER_TRANSACTIONS_PAGE,
        element: <MyTransactions />,
      },
    ],
  },
];
