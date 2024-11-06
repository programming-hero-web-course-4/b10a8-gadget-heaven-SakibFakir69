import React, { createContext } from "react";
import Banner from "./bannerandNav/Banner";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Contextapi from "./Contextapi";
import Homebar from "./NavMenu/Homebar";


function MainContent() {
  return (
    <div>

      <Contextapi> 
        <Banner />

      
        <div>
          <Outlet />
        </div>
        <Footer />
      </Contextapi>

    </div>
  );
}

export default MainContent;
