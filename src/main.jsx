import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./Error/Errorpage.jsx";

import MainContent from "./MainContent.jsx";
import Homebar from "./NavMenu/Homebar.jsx";
import Static from "./NavMenu/Static.jsx";
import Dashboard from "./NavMenu/Dashboard.jsx";
import Phone from "./Sidebar/Phone.jsx";
import Laptop from "./Sidebar/Laptop.jsx";
import Mackbook from "./Sidebar/Mackbook.jsx";
import Smartwatch from "./Sidebar/Smartwatch.jsx";
import Acces from "./Sidebar/Acces.jsx";
import ShowallProducts from "./Sidebar/ShowallProducts.jsx";

import Details from "./Details/Details.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: <Errorpage />,
    children :    
    [
      {
        path : '/home',
        element : <Homebar/>,
        children :[
          {
            path : 'phone',
            element : <Phone/>,
            loader : ()=> fetch('/phon.json')
          },
          {
            path : 'laptop',
            element : <Laptop/>,
            loader :()=> fetch('/laptop.json')
          },
          {
            path : 'mackbook',
            element : <Mackbook/>,
            loader : ()=> fetch('/macbook.json')
          },
          {
            path : 'smartwatch',
            element : <Smartwatch/>,
            loader : ()=> fetch('/smartwatch.json')
          },
          {
            path : "acces",
            element : <Acces/>,
            loader : ()=> fetch('/acces.json')
          },
          {
            path : 'showall',
            element : <ShowallProducts/>,
            loader : ()=> fetch('/data.json')
          },
         
        ],
       
        
      },
     
    

      {
        path : '/static',
        element : <Static/>
      },
      {
        path : '/dashboard',
        element : <Dashboard/>
      },
      {
        path : 'details/:product_id',
        element : <Details/>,
        loader :()=> fetch('/data.json')
      }


    ]
    

  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
