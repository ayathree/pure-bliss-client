import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AboutUs from "../pages/pages/AboutUs";
import OurCollections from "../pages/pages/OurCollections";


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
        }
      ]

      
    },
  ]);