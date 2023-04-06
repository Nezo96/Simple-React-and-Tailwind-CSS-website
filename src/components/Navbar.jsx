import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  //Navbar hide/show
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>

      <ul className="flex hidden">
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
      <div>
        <AiOutlineMenu size={20} />
      </div>

      {/* mobile menu */}
      <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React.</h1>
        <ul className="p-4 flex flex-col uppercase">
          <a href="#" className="p-4 border-b border-gray-600">
            Home
          </a>
          <a href="#" className="p-4 border-b border-gray-600">
            Company
          </a>
          <a href="#" className="p-4 border-b border-gray-600">
            Resource
          </a>
          <a href="#" className="p-4 border-b border-gray-600">
            About
          </a>
          <a href="#" className="p-4">
            Contact
          </a>
        </ul>
      </div>
      {/* mobile menu end */}
    </div>
  );
};

export default Navbar;
