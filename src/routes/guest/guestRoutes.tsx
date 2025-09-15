


import { CustomerLayout } from "../../components/layouts";
import { HomePage } from "../../pages";
import { USER_PATH } from "./guestPath";

export const guestRoutes = [
  {
    path: USER_PATH.HOME,
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: (
          <HomePage />
        ),
      }
    ],
  },
];
