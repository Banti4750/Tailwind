import React from "react";
import Calender from "../icons/Calender";
import Left from "../icons/Left";
import Right from "../icons/Right";
import Live from "./Live";

const Middlecard = () => {
  return (
    <>
      <div className="flex justify-between w-full bg-gray-200 rounded-xl items-center p-2 lg:gap-24 gap-8">
        {/* Calendar and Date Input */}
        <div className="flex items-center gap-2">
          <div className="justify-start flex cursor-pointer">
            <Calender />
          </div>
          <div className="cursor-pointer">
            <input
              className="rounded-lg p-1 cursor-pointer placeholder-gray-500"
              type="date"
            />
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex gap-2 cursor-pointer items-center">
          <Left />
          <Right />
        </div>
      </div>
      <Live />
      <Live />
      <Live />
      <Live />
    </>
  );
};

export default Middlecard;
