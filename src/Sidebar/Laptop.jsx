import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Laptopapi from "./Sidebarcontent/Laptopapi";

function Laptop() {
  const data = useLoaderData();
  console.log(data);
  console.log(data.length);
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      {
        data.map((item,key)=> <Laptopapi data={item} key={key}/>)
      }


    </div>
  );
}

export default Laptop;
