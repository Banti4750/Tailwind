import React from "react";
import RedVideo from "../icons/RedVideo";

const Live = () => {
  return (
    <>
      <div className="flex w-full p-3 gap-4 items-center">
        {/* Time Section */}
        <div>
          <p className="text-xl font-semibold">11:00 AM</p>
          <p className="text-sm">11:00 AM</p>
        </div>

        {/* Divider */}
        <div className="w-1 h-12 bg-green-500 rounded-lg"></div>

        {/* Live Indicator and Event Title */}
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-red-600 font-bold uppercase">Live</p>
            <RedVideo />
          </div>
          <p className="text-xl font-semibold">UX Webinar</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Live;
