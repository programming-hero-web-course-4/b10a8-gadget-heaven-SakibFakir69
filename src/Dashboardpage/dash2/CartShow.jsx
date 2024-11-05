import React from "react";

function CartShow({ data }) {
  const { product_title, description, price, product_image } = data;


  


  return (
    <div className="p-10">




      <div className="flex p-4 border-2 gap-4 mt-4 shadow-lg rounded-lg ">
        <div>
          <img src={product_image}  className="rounded-md w-full"/>
        </div>
        <div className="">
          <p className="text-2xl font-semibold">{description}</p>
          <p className=" font-bold">{product_title}</p>
          <p>Price :{price} $</p>
        </div>
        <button>X</button>
      </div>


    </div>
  );
}

export default CartShow;
