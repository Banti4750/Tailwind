import React from "react";
import Shedule from "../icons/Shedule";
import Add from "../icons/Add";
import Screerecoding from "../icons/Screerecoding";

const LastCard = () => {
  return (
    <>
      <div className="grid grid-cols-4  m-8">
        <div className="flex flex-col items-center gap-2 col-span-2">
          <div className="bg-green-300 p-4 items-center rounded-lg cursor-pointer">
            <Shedule />
          </div>
          <p className="text-xs">Shedule a webinar</p>
        </div>

        <div className="flex flex-col items-center gap-2 col-span-2">
          <div className="bg-green-300 p-4 items-center rounded-lg cursor-pointer">
            <Add />
          </div>

          <p className="text-xs">Join Webinar</p>
        </div>
      </div>

      <div className="grid grid-cols-4 m-8 ">
        <div className="flex flex-col items-center gap-2 col-span-2">
          <div className="bg-green-300 p-4 items-center rounded-lg cursor-pointer">
            <Screerecoding />
          </div>
          <p className="text-xs">Start Recording</p>
        </div>
      </div>
    </>
  );
};

export default LastCard;
