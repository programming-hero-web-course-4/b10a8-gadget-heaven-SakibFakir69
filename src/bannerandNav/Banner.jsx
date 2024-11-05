import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../Contextapi";

function Banner() {

  const locurl = useLocation();
 const homeurl = locurl.pathname;

 const {counter2 , counter} = useContext(MyContext);

  

  
  return (
    <div className=" rounded-md text-black ">
      <section className={`${homeurl==='/home' ?'bg-custome-color ': 'bg-white'}`}  >


        <div className="flex justify-between px-4 p-6 rounded text-white">
          <div>
            <p className="text-black text-2xl font-bold">Gadget Heaven</p>
          </div>
          <div className="list-none flex space-x-4 text-black">
            <Link to="home">Home</Link>
            <Link to="static">Statices</Link>
            <Link to="dashboard">DashBorad</Link>
            <Link>Make a free comonenet</Link>


          </div>
          <div className="text-black flex gap-4 flex-row-reverse">
            <p className="-mt-2 -ml-4">{counter2}</p>
            <i class="ri-heart-3-fill text-2xl">
           
            </i>

            <p className="-mt-2 -ml-4">{counter}</p>

            <i class="ri-shopping-cart-2-line text-2xl">
             
            </i>
          </div>
        </div>

        {/* 2nd */}


      </section>
    </div>
  );
}

export default Banner;
