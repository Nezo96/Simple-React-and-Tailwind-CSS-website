import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
      <div>
        <h1 className="uppercase w-full text-3xl font-bold text-[#00df9a]">
          react.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-between ms:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span3 flex flex-row justify-between">
        <FooterMenu
          title={"Solutions"}
          linkOne={"Analytics"}
          linkTwo={"Marketing"}
          linkThree={"Commerce"}
          linkFour={"Insights"}
        />
        <FooterMenu
          title={"Support"}
          linkOne={"Pricing"}
          linkTwo={"Documentation"}
          linkThree={"Guides"}
          linkFour={"API Status"}
        />
        <FooterMenu
          title={"Company"}
          linkOne={"About"}
          linkTwo={"Blog"}
          linkThree={"Jobs"}
          linkFour={"Careers"}
        />
        <FooterMenu
          title={"Legal"}
          linkOne={"Claims"}
          linkTwo={"Policy"}
          linkThree={"Terms"}
          linkFour={"Cookies"}
        />
      </div>
    </div>
  );
};

export default Footer;
