import React from "react";
import { Link } from "react-router-dom";

function Showall({ data }) {
  const { price, product_image, product_title, product_id } = data;

  return (
    <div className="shadow-lg border-2 mt-2 p-2 space-y-3 rounded-md">
      <img src={product_image} className="rounded-md"/>

      <div className="flex flex-col space-y-3 p-2 text-center">
        <p className="text-2xl font-semibold">{product_title}</p>

        <p className=" ">Price :{price}$</p>
        <div>
          <Link
            to={`/details/${product_id}`}
            className="px-6 rounded-full py-2 border-2 border-green-500 bg-green-300 round-lg mb-4 mt-4"
          >
            Details
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Showall;
