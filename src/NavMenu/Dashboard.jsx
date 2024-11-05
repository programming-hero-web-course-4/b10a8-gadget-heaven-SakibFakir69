import React, { act } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Dashboard() {

  const loc = useLocation();
  const path = loc.pathname;


  const active = path==='/dashboard/cart';
  console.log(active);

  


  return (
    <div>
      <div className="bg-custome-color p-8">
        <div className="text-center p-6">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="mt-4 text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="text-center mt-2 flex space-x-4 justify-center ">
          <button className={ `${active ? 'bg-white px-6 py-2 rounded-full text-xl' : 'bg-green-500 px-6 py-2 rounded-full text-xl'}`}>

            <Link to="cart" className="p-4">Cart</Link>
          </button>
        
          <button className={ `${!active ? 'bg-white px-6 py-2 rounded-full text-xl' : 'bg-green-500 px-6 py-2 rounded-full text-xl'}`}>
            <Link to='Wishlist'>Wishlist</Link>

          </button>

        </div>
      </div>
      <Outlet/>

    </div>
  );
}

export default Dashboard;
