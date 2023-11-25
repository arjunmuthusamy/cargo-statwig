import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Booking from "../page/booking/Booking";
import Payment from "../page/payment/Payment";
import Pagelayout from "./layouts/Pagelayout";

const PageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Pagelayout />,
    children: [
      {
        path: "booking-cargo",
        element: <Booking />,
      },
      {
        path: "booking-payment",
        element: <Payment />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={PageRoutes} />;
}