import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AppLayout from "./layout/appLayout";
import productRouter from "./routes/product";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      productRouter
    ]
  },
]);



export default function App() {
  return <RouterProvider router={router} />
}
