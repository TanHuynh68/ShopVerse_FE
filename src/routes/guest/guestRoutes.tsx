import { CartProvider } from "@/hooks/api/useCartContext";
import { CustomerLayout } from "../../components/layouts";
import { HomePage } from "../../pages";
import { USER_PATH } from "./guestPath";

export const guestRoutes = [
  {
    path: USER_PATH.HOME,
    element: (
      <CartProvider>
        <CustomerLayout />
      </CartProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
