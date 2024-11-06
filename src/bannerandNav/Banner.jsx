import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../Contextapi";

function Banner() {

  const locurl = useLocation();
 const homeurl = locurl.pathname;

 const home = homeurl==='/';
 console.log(home)



 const {counter2 , counter} = useContext(MyContext);
 const s = useLocation().pathname;

 const statcies = s==='/static';


 const d = useLocation().pathname;

 const dash = d==='/dashboard';

 const u = useLocation().pathname;

 const uncoming = u==='/uncoming';

  

  
  return (
    <div className=" rounded-md text-black ">
      <section className={`${homeurl==='/' ?'bg-custome-color ': 'bg-white'}`}  >


        <div className="flex justify-between px-4 p-6 rounded text-white">
          <div>
            <p className="text-black text-2xl font-bold">Gadget Heaven</p>
          </div>
          <div className="list-none flex space-x-4 text-black">

            <Link to="/" className={`${home ? 'bg-white mb-10 p-2 rounded-md' : ''}`}>Home</Link>
            <Link to="static" className={`${statcies ? 'bg-black text-white mb-10 p-2 rounded-md' : ''}`}>Statices</Link>
            <Link to="dashboard" className={`${dash ? 'bg-black text-white mb-10 p-2 rounded-md' : '' }`}>DashBorad</Link>
            <Link to='uncoming' className={`${uncoming ? 'bg-black text-white mb-10 p-2 rounded-md' : ''}`}>Uncoming Product</Link>


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
