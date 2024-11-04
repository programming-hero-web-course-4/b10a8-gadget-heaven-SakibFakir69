import React from "react";

function Footer() {
  return (
    <div className="p-10 mt-48 bg-pink-100">
      <section >
        <div className="flex flex-col text-center justify-center items-center mt-6">
          <h1 className="text-4xl text-center">Gadget Heaven</h1>
          <p className="text-gray-600 text-xl">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr></hr>

        <div className="flex justify-evenly mt-6">
          <div>
            <p className="text-xl font-semibold">Services</p>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
          </div>

          <div>
            <p className="text-xl font-semibold">Company</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Legal</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
