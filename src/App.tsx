import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AppLayout from "./layout/appLayout";
import productRouter from "./routes/product";
import authenRouter from "./routes/authen";
import Error from "./pages/Error";
import orderRouter from "./routes/order";



const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      authenRouter,
      productRouter,
      orderRouter,
    ]
  },
]);



export default function App() {
  return <RouterProvider router={router} />
}
