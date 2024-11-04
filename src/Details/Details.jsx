import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Rating from "react-rating";
function Details() {
  const { product_id } = useParams();
  const id = parseInt(product_id);

  const data = useLoaderData();
  console.log(data);

  const finddata = data.find((item) => item.product_id === id);

  const {
    price,
    product_image,
    product_title,
    description,
    Specification,
    rating,
  } = finddata;

  const hadneladdcart = () => {
    toast.success("Add to cart Succesfully");
    console.log("show");
  };

  return (
    <div>
      <div className=" ">
        <div>
          <div
            className="text-center p-20"
            style={{ background: "rgb(149, 56, 226)" }}
          >
            <h1 className="text-4xl text-white font-semibold">
              Product Details
            </h1>
            <p className="text-gray-300 mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>

          <section className="flex justify-center items-center border-2 gap-4  absolute bg-white  shadow-lg rounded-md p-8 -mt-20 ml-72 my-20">
            <div className="flex justify-center w-9/12">
              <img src={product_image} className="border-2 w-full rounded-md" />
            </div>
            <div className="-mt-10">
              <p className="text-2xl font-semibold mb-2">{product_title}</p>
              <p className="text-xl font-bold mb-2"> price :{price}$</p>
              <button className="text-xl border-2 rounded-full p-2 px-4 py-1 bg-green-200 border-green-500 mb-2">
                Stock
              </button>

              <p className="text-xl">{description}</p>
              <p>
                <p className="text-2xl font-semibold">Specificatio:</p>

                {Specification.map((item, key) => (
                  <p className="mb-2">
                    {key} {item}
                  </p>
                ))}
              </p>
              <p className="text-xl font-semibold">Rating</p>
              <div className="flex space-x-2">
              <Rating
                initialRating={rating}
                readonly
                emptySymbol="ri-star-line text-gray-400 text-2xl"
                fullSymbol="ri-star-fill text-yellow-400 text-2xl"
              ></Rating>
              <p className="px-3 py-1 border-2 rounded-full">{rating}</p>

              </div>

              <div className=" space-x-5">
                <button
                  className="bg-blue-500 px-6 py-2 rounded-md"
                  onClick={hadneladdcart}
                >
                  Add cart <i class="ri-shopping-cart-2-line"></i>{" "}
                </button>

                <button className="rounded-full border-2  p-2 mt-2">
                  <i class="ri-heart-3-line"></i>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="h-[200px]"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Details;