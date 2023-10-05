import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h2 className="text-orange-600 text-2xl font-bold text-center">
        Quick Delivery App
      </h2>
      <div className="w-full mx-auto md:grid-cols-2 grid">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="background"
        />
        <div className="my-auto">
          <h4 className="text-blue-500 font-bold text-xl">Get the App</h4>
          <p className="md:text-4xl sm:text-3xl font-bold py-2">
            Limitless Convenience on-demand
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
