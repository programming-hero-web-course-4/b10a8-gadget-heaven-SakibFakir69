import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contextapi";
import CartShow from "./dash2/CartShow";
import { toast, ToastContainer } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setcart } = useContext(MyContext);
  console.log(cart, "carted");

  // const taotalcost = cart.reduce((sum,item)=> sum+item.price);

  const [sortcart, setsortcart] = useState([]);

  useEffect(() => {
    setsortcart(cart);
  }, [cart]);

  const sortbydescding = () => {
    const sorted = [...sortcart].sort((a, b) => b.price - a.price);
    setsortcart(sorted);
    toast.success("sorted");
  };

  const taotalCost = sortcart.reduce((sum, item) => sum + item.price, 0);
  console.log(taotalCost);

  const nav = useNavigate();

  const purchase = () => {
    setcart([]);
    setsortcart([]);
    toast.success("Buy succesfully");

    setTimeout(() => {
      nav("/")
      
    }, 1500);
    
    console.log("done")
  };




  return (
    <div>
      <div className="flex justify-between mt-6">
        <p className="text-2xl font-bold">Cart</p>

        <div className="flex justify-between gap-4">
          <p className="text-2xl font-bold mt-2">Total cost :{taotalCost}</p>
          <button
            className="px-5 py-2 border-2 border-pink-500 rounded-full text-xl "
            onClick={sortbydescding}
          >
            Sort by price
          </button>

          {/* <button className="px-5 py-2 bg-emerald-400 rounded-md text-xl" onClick={purchase}
          >
            
            Purchase
          </button> */}
          <div className="mt-2">
            <a href="#my_modal_8" class="btn"  onClick={purchase}>

            Purchase
              
            </a>

            <div class="modal" role="dialog" id="my_modal_8">
              <div class="modal-box" className="text-center bg-green-300 p-4 rounded-md ">
                <h3 class="text-lg font-bold">Congratulate!</h3>
                <p class="py-4">This modal works with anchor links</p>
                <div class="modal-action">
                  <a href="#" class="btn">
                    {/* <button>Close</button> */}
                    <button onClick={()=> nav("/")}>Close</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {sortcart.map((item, key) => (
        <CartShow data={item} key={key} />
      ))}

      {/* pass data to cartShow */}
    </div>
  );
}

export default Cart;
