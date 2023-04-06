import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          img={Single}
          title={"Single User"}
          price={"$149"}
          storage={"500 GB Storage"}
          users={"1 Granted User"}
          send={"Send up to 2 GB"}
        />
        <Card
          img={Double}
          title={"Single User"}
          price={"$149"}
          storage={"500 GB Storage"}
          users={"1 Granted User"}
          send={"Send up to 2 GB"}
          best={true}
        />
        <Card
          img={Triple}
          title={"Single User"}
          price={"$149"}
          storage={"500 GB Storage"}
          users={"1 Granted User"}
          send={"Send up to 2 GB"}
        />
      </div>
    </div>
  );
};

export default Cards;
