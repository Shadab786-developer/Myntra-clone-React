// This file is a React component for the Header Bag section of the Myntra clone.
// It contains the structure for the header section of the bag page.

import React from "react";

function HeaderBag() {
  return (
    <div className="flex justify-between items-center">
      <div className="h-fit w-fit ml-[5%]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXA1QUsZw0J-GYgqwwcxqKyHw8wHYpXERHw&s"
          alt="logo"
          className="h-1/3 w-1/3 "
        />
      </div>
      <ol className="flex justify-center items-center">
        {" "}
        <li className="text-blue-400 border-b border-blue-400 text-[12px] font-mono mr-1 tracking-widest">
          BAG
        </li>{" "}
        <li className="">---------</li>{" "}
        <li className="text-gray-900 border-b text-[12px] font-mono mr-1 tracking-widest ml-1">
          ADDRESS
        </li>{" "}
        <li className="">----------</li>{" "}
        <li className="text-gray-900 ml-1 border-b text-[12px] font-mono tracking-widest">
          PAYMENT
        </li>{" "}
      </ol>
      <div className="flex justify-center items-center h-full w-fit mr-[5%]">
        <img
          src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          alt="secure -logo"
          className="h-1/6 w-1/6"
        />
        <p className="ml-1 font-semibold tracking-widest text-gray-400 text-[12px]">
          100% SECURE
        </p>
      </div>
    </div>
  );
}

export default HeaderBag;
