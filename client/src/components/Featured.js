import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const Featured = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },

    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },

    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  return (
    <div className="max-w-[1520px] h-[450px] w-full p-4 relative">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        className="absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] bg-orange-600 text-white font-bold rounded-full p-1 cursor-pointer"
        onClick={
          currentIndex > 0
            ? () => {
                setcurrentIndex(currentIndex - 1);
              }
            : null
        }
      >
        <BsChevronCompactLeft size={25} />
      </div>
      <div
        className="absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] bg-orange-600 text-white font-bold rounded-full p-1 cursor-pointer"
        onClick={
          currentIndex < sliders.length - 1
            ? () => {
                setcurrentIndex(currentIndex + 1);
              }
            : null
        }
      >
        <BsChevronCompactRight size={25} />
      </div>
    </div>
  );
};

export default Featured;
