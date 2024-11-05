import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contextapi";
import CartShow from "./dash2/CartShow";
import { toast, ToastContainer } from "react-toastify";

function Cart() {
  const { cart } = useContext(MyContext);
  console.log(cart, "carted");


  // const taotalcost = cart.reduce((sum,item)=> sum+item.price);

  const [ sortcart , setsortcart ] = useState([]);

  useEffect(()=>{
    setsortcart(cart);
  },[cart]);




  const sortbydescding = ()=>{

    const sorted =[...sortcart].sort((a,b)=> b.price-a.price);
    setsortcart(sorted);
    toast.success('sorted');


  }

  const taotalCost = sortcart.reduce((sum , item)=> sum+item.price,0);
  console.log(taotalCost);






  return (
    <div>
      <div className="flex justify-between mt-6">
        <p className="text-2xl font-bold">Cart</p>

        <div className="flex justify-between gap-4">
          <p className="text-2xl font-bold mt-2">Total cost :{taotalCost}</p>
          <button className="px-5 py-2 border-2 border-pink-500 rounded-full text-xl " onClick={sortbydescding}>
            
            Sort by price
          </button>

          <button className="px-5 py-2 bg-emerald-400 rounded-md text-xl">
            Purchase
          </button>
        </div>
      </div>
      <ToastContainer/>
      {sortcart.map((item, key) => (
        <CartShow data={item} key={key} />
      ))}

      {/* pass data to cartShow */}
    </div>
  );
}

export default Cart;
