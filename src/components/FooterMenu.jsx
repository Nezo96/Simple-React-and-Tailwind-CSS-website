import React from "react";

const FooterMenu = ({ title, linkOne, linkTwo, linkThree, linkFour }) => {
  return (
    <div>
      <h6 className="font-medium text-gray-400">{title}</h6>
      <ul className="flex flex-col">
        <a href="#" className="py-2 text-sm">
          {linkOne}
        </a>
        <a href="#" className="py-2 text-sm">
          {linkTwo}
        </a>
        <a href="#" className="py-2 text-sm">
          {linkThree}
        </a>
        <a href="#" className="py-2 text-sm">
          {linkFour}
        </a>
      </ul>
    </div>
  );
};

export default FooterMenu;
