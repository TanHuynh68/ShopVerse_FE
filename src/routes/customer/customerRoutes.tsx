import {
  CartPage,
  CustomerBlogDetailPage,
  CustomerBlogPage,
  CustomerOrdersPage,
  PaymentFailedPage,
  PaymentProcessPage,
  PaymentSuccessPage,
  ProductByCategoriesPage,
  ProductDetailPage,
  Profile,
} from "@/pages";

import { CustomerLayout } from "@/components/layouts";
import { ProductProvider } from "@/hooks/api/useProductContext ";
import { CartProvider } from "@/hooks/api/useCartContext";
import { CUSTOMER_PATH } from "./customerPath";
import { ProtectedRouteByRole } from "../authorization/protect";
import { ROLE } from "@/constants/enum";

export const customerRoutes = [
  {
    path: "",
    element: (
      <ProtectedRouteByRole allowedRoles={[ROLE.CUSTOMER]}>
        <CartProvider>
          <CustomerLayout />
        </CartProvider>
      </ProtectedRouteByRole>
    ),
    children: [
      {
        path: CUSTOMER_PATH.CUSTOMER_BLOG_DETAIL_PAGE,
        element: (
          <ProductProvider>
            <CustomerBlogDetailPage />
          </ProductProvider>
        ),
      },
      {
        path: CUSTOMER_PATH.CUSTOMER_BLOG_PAGE,
        element: (
          <ProductProvider>
            <CustomerBlogPage />
          </ProductProvider>
        ),
      },
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
    ],
  },
];
