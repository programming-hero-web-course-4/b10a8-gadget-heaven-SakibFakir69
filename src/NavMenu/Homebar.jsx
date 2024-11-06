import React from "react";
import Banner from "../bannerandNav/Banner";
import Banner2 from "../bannerandNav/Banner2";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { ssrImportKey } from "vite/runtime";
import ShowallProducts from "../Sidebar/ShowallProducts";

import { Link } from "react-router-dom";
import { plugin } from "postcss";
import { Helmet } from "react-helmet";

function Homebar() {

  const data = useLoaderData();

  const palce = useLocation();
  console.log(palce,"home")
  const isActive =palce.pathname==='/' ;
  console.log(isActive);

  const locurl = useLocation();
 const homeurl = locurl.pathname;

 const home = homeurl==='/';
 console.log(home);




  




  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner2 />
      <h1 className="mt-64 text-center text-4xl font-bold"> Explore Cutting-Edge Gadgets </h1>

      <section className="grid grid-cols-12 justify-center ">
        <div className="col-span-3 space-y-1 mt-20 ml-6 border-2 h-[450px] w-[180px] text-center p-4 flex flex-col">

          <Link to="" className={`${home ?'px-4 py-2 border-2 rounded-md bg-blue-600': "px-4 py-2 border-2 rounded-md"}`}> All products</Link>

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
