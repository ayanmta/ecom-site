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
import Cart from "./features/cart/Cart"

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
    element: <Cart></Cart> ,
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
