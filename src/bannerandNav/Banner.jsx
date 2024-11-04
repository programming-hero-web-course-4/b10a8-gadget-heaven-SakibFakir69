import React from "react";
import { Link, useLocation } from "react-router-dom";

function Banner() {

  const locurl = useLocation();
 const homeurl = locurl.pathname

  

  
  return (
    <div className=" rounded-md text-black ">
      <section className={`${homeurl==='/home' ?'bg-custome-color ': 'bg-white'}`}  >


        <div className="flex justify-between px-4 p-6 rounded text-white">
          <div>
            <p>Gadget Heaven</p>
          </div>
          <div className="list-none flex space-x-4 text-black">
            <Link to="home">Home</Link>
            <Link to="static">Statices</Link>
            <Link to="dashboard">DashBorad</Link>

            <li>Dashboard</li>
          </div>
          <div>
            <i class="ri-heart-3-fill"></i>
            <i class="ri-shopping-cart-2-line"></i>
          </div>
        </div>

        {/* 2nd */}


      </section>
    </div>
  );
}

export default Banner;
