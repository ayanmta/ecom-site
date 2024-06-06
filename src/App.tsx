import { Counter } from "./features/counter/Counter"
import ProductList from "./../src/features/product-list/productList"
import Navbar from "./features/navbar/navbar"
import Home from "./pages/Home"
import SignUpPage from "./pages/SignUpPage"

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import CartPage from "./pages/Cart"
import Checkout from "./pages/Checkout"

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage> ,
  },
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage> ,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout> ,
  }
]);

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
