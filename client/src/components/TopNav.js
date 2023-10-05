import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";

import { FaUserFriends, FaGoogleWallet } from "react-icons/fa";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="flex items-center p-4 justify-between">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setSideNav(!sideNav)}>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-base">
          <p className="bg-orange-600 rounded-full p-1 text-white text-bold">
            free
          </p>
          <p>Delivery</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-gray-200 w-full mx-1 focus:outline-none p-2"
          placeholder="search meals"
          type="text"
        />
      </div>
      <button className="bg-orange-600 rounded-full text-white text-bold hidden lg:flex">
        <span className="flex items-center gap-x-1">
          <AiOutlineShoppingCart />
          Cart
        </span>
      </button>

      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : null}

      <div
        className={
          sideNav
            ? "h-screen z-10 top-0 left-0  w-[300px] duration-200 absolute bg-white"
            : "h-screen z-10 top-0 left-[-100%] duration-200 bg-white w-[300px] duration-200 absolute"
        }
      >
        <AiOutlineClose
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setSideNav(!sideNav)}
        />
        <h2 className="text-2xl p-4">
          Yum<span className="text-orange-600 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li className="p-2 flex items-center gap-x-2 cursor-pointer">
              <BsPersonCircle size={25} />
              <p className="text-xl">My Account</p>
            </li>
            <li className="p-2 flex items-center gap-x-2 cursor-pointer">
              <TbTruckReturn size={25} />
              <p className="text-xl">Delivery</p>
            </li>
            <li className="p-2 flex items-center gap-x-2 cursor-pointer">
              <MdOutlineFavorite size={25} />
              <p className="text-xl">My Favorite</p>
            </li>
            <li className="p-2 flex items-center gap-x-2 cursor-pointer">
              <FaGoogleWallet size={25} />
              <p className="text-xl">My Wallet</p>
            </li>
            <li className="p-2 flex items-center gap-x-2 cursor-pointer">
              <MdHelp size={25} />
              <p className="text-xl">Help</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
