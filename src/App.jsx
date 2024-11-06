import { useEffect, useState } from "react";

import "./App.css";
import ThreeBar from "./icons/ThreeBar";
import Home from "./icons/Home";
import Setting from "./icons/Setting";
import UserCard from "./Card/UserCard";
import Middlecard from "./Card/Middlecard";
import LastCard from "./Card/LastCard";

const useMediaQuery = (query) => {
  const [matches, setmatches] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setmatches(media.matches);
    }
    const listener = () => {
      setmatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
};

function App() {
  const [sidebaropen, setsidebaopen] = useState(true);
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    if (isDesktop !== false) {
      setsidebaopen(false);
    } else {
      setsidebaopen(true);
    }
  }, [isDesktop]);
  return (
    <>
      <div className="flex">
        <Sidebar sidebaropen={sidebaropen} setsidebaopen={setsidebaopen} />
        <Mainbar sidebaropen={sidebaropen} />
      </div>
    </>
  );
}

function Sidebar({ sidebaropen, setsidebaopen }) {
  if (sidebaropen) {
    return (
      <>
        <div className="w-12 h-screen  bg-gray-300 cursor-pointer">
          <div
            className="flex flex-col items-center space-y-8"
            onClick={() => setsidebaopen(!sidebaropen)}
          >
            <div className="cursor-pointer">
              <ThreeBar />
            </div>
            <div className="cursor-pointer">
              <Home />
            </div>
            <div className="cursor-pointer">
              <Setting />
            </div>
            <div className="cursor-pointer">
              <Home />
            </div>
            <div className="cursor-pointer">
              <Setting />
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div
          className="w-64 h-screen bg-gray-300 fixed top-0 left-0 md:relative  cursor-pointer"
          onClick={() => {
            setsidebaopen(!sidebaropen);
          }}
        >
          <div className="cursor-pointer mb-8 ml-2">
            <ThreeBar />
          </div>
          <div className="m-2">
            <div className="flex justify-between hover:bg-gray-100 p-2 rounded-md transition-all delay-150 ease-in-out mb-6">
              <div className="text-xl font-medium">Home</div>
              <div>
                <Home />
              </div>
            </div>

            <div className="flex justify-between hover:bg-gray-100 p-2 rounded-md transition-all delay-150 ease-in-out mb-6">
              <div className="text-xl font-medium">Setting</div>
              <div>
                <Setting />
              </div>
            </div>
            <div className="flex justify-between hover:bg-gray-100 p-2 rounded-md transition-all delay-150 ease-in-out mb-6">
              <div className="text-xl font-medium">Home</div>
              <div>
                <Home />
              </div>
            </div>

            <div className="flex justify-between hover:bg-gray-100 p-2 rounded-md transition-all delay-150 ease-in-out mb-6">
              <div className="text-xl font-medium">Setting</div>
              <div>
                <Setting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Mainbar({ sidebaropen }) {
  return (
    <>
      <div className="w-full">
        <div className="h-48 bg-black hidden md:block"></div>

        <div className="grid grid-cols-11 gap-8 p-8">
          <div className="md:col-span-3 h-80 -translate-y-24 rounded-2xl shadow-2xl col-span-11 hidden md:block">
            <UserCard />
          </div>

          <div className=" md:col-span-5 h-96 rounded-2xl shadow-2xl col-span-11 p-4">
            <Middlecard />
          </div>

          <div className="md:col-span-3 h-64 rounded-2xl shadow-2xl col-span-11">
            <LastCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
