import React from "react";

const Card = ({ img, title, price, storage, users, send, best }) => {
  return (
    <div
      className={
        best
          ? "w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300"
          : "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
      }
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={img}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage}</p>
        <p className="py-2 border-b mx-8">{users}</p>
        <p className="py-2 border-b mx-8">{send}</p>
      </div>
      <button
        className={
          best
            ? "bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a]"
            : "bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black"
        }
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
