import { CartProvider } from "@/hooks/api/useCartContext";
import { CustomerLayout } from "../../components/layouts";
import { HomePage } from "../../pages";
import { GUEST_PATH } from "./guestPath";

export const guestRoutes = [
  {
    path: GUEST_PATH.HOME,
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
