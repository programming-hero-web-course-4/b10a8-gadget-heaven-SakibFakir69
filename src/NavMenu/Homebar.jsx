import React from "react";
import Banner from "../bannerandNav/Banner";
import Banner2 from "../bannerandNav/Banner2";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { ssrImportKey } from "vite/runtime";
import ShowallProducts from "../Sidebar/ShowallProducts";

import { Link } from "react-router-dom";
import { plugin } from "postcss";

function Homebar() {
  const data = useLoaderData();

  const palce = useLocation();
  const isActive =palce
  console.log(isActive);




  return (
    <div className="">
      <Banner2 />
      <h1 className="mt-64 text-center text-4xl font-bold"> Explore Cutting-Edge Gadgets </h1>

      <section className="grid grid-cols-12 justify-center ">
        <div className="col-span-3 space-y-1 mt-20 ml-6 border-2 h-[450px] w-[180px] text-center p-4 flex flex-col">

          <Link to="showall" className='px-4 py-2 border-2 rounded-md focus:bg-blue-600'> All products</Link>

          <br></br>

          <Link to="laptop" className='px-4 py-2 border-2 rounded-md  focus:bg-blue-600'>Laptops</Link>
          <br></br>
          <Link to="phone" className="px-4 py-2 border-2  rounded-md  focus:bg-blue-600">Phones</Link>
          <br></br>
          
          <Link to="smartwatch" className="px-4 py-2 border-2 rounded-md focus:bg-blue-600">Smart Watches</Link>
     
      
          <br></br>
          <Link to="acces" className="px-4 py-2 border-2 rounded-md  focus:bg-blue-600">Accessories</Link>
        </div>

        <div className="col-span-9  mt-20 items-center justify-center gap-4 mb-10 border-2">
          <div className=" ">
            <Outlet/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homebar;
