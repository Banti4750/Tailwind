import React from "react";

const UserCard = () => {
  return (
    <>
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full h-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Sarah Smith</h2>
        <p className="text-gray-500">srarh.gmail.com</p>
        <p className="text-gray-500">7645783478</p>
      </div>

      <div className="text-center mt-2">
        <p className="text-gray-500">Delhi India</p>
      </div>
    </>
  );
};

export default UserCard;
