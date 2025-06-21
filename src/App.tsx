import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AppLayout from "./layout/appLayout";
import productRouter from "./routes/product";
import authenRouter from "./routes/authen";
import Error from "./pages/Error";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // this loader check the authorization status of the user
    loader: () => import("./layout/appLayout/loader").then(i => i.loader()),
    errorElement: <Error />,
    children: [
      authenRouter,
      productRouter
    ]
  },
]);



export default function App() {
  return <RouterProvider router={router} />
}
