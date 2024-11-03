import React from "react";

function Banner() {
  return (
    <div className="p-2 rounded-md ">
      <section style={{ background: "rgb(149, 56, 226)" }} className="">
        <div className="flex justify-between px-4 p-6 rounded text-white">
          <div>
            <p>Gadget Heaven</p>
          </div>
          <div className="list-none flex space-x-4">
            <li>Home</li>
            <li>Statistics</li>
            <li>Dashboard</li>
          </div>
          <div>
            <i class="ri-heart-3-fill"></i>
            <i class="ri-shopping-cart-2-line"></i>
          </div>
        </div>

        {/* 2nd */}

        <section>
          <div className="flex text-center justify-center flex-col space-y-3 ">
            <h1 className="md:text-4xl text-xl text-white font-bold">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="text-gray-200">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div>
              <button className="bg-white px-6 py-2 rounded-lg text-xl text-blue-700 mb-6">
                Shop Now
              </button>
            </div>
          </div>
        </section>
        {/* img absloute */}

        <section className="mt-32">

          <div className=" flex justify-center items-center mt-36 w-full md:mt-56 ">
            
          <img src="../assets/banner.jpg" className="  md:w-1/2 w-2/3 absolute object-contain rounded-md shadow-lg p-3 border-t border-l-2 border-r-2 flex items-center  backdrop-blur-md"></img>
          

          </div>
        </section>
      </section>
    </div>
  );
}

export default Banner;
