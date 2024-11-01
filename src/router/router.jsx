import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AboutUs from "../pages/pages/AboutUs";
import OurCollections from "../pages/pages/OurCollections";
import ContactUs from "../pages/pages/ContactUs";
import BrandList from "../pages/pages/BrandList";
import MyAccount from "../pages/shop/MyAccount";
import Cart from "../pages/shop/Cart";
import CheckOut from "../pages/shop/CheckOut";
import OrderTracking from "../pages/shop/OrderTracking";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/aboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path:'/ourCollection',
          element:<OurCollections></OurCollections>
        },
        {
          path:'/contactUs',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/brandList',
          element:<BrandList></BrandList>
        },
        {
          path:'/myAccount',
          element:<MyAccount></MyAccount>
        },
        {
          path:'/cart',
          element:<Cart></Cart>
        },
        {
          path:'/checkout',
          element:<CheckOut></CheckOut>
        },
        {
          path:'/orderTracking',
          element:<OrderTracking></OrderTracking>
        }
      ]

      
    },
  ]);