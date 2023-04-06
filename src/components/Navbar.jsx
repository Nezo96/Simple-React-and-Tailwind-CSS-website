import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
      
      <ul className="flex">
        <a href="#" className="p-4">
          Home
        </a>
        <a href="#" className="p-4">
          Company
        </a>
        <a href="#" className="p-4">
          Resource
        </a>
        <a href="#" className="p-4">
          About
        </a>
        <a href="#" className="p-4">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
