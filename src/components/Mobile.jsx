import React, { useState } from "react";
import { AppStore, Mobile1, Mobile3, Mobile2, PlayStore } from "../assets";

const Mobile = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const toggleData = [
    {
      heading: "Instant notifications",
      text: "Receive push notifications for wallet activity, governance, staking, & more.",
      image: Mobile1,
      bgColor: "#83DEA3",
    },
    {
      heading: "dApp browser",
      text: "Connect to any dApp on the Cosmos, permissionlessly.",
      image: Mobile2,
      bgColor: "#82C29E",
    },
    {
      heading: "In-wallet Swaps",
      text: "150+ token pairs on 50+ chains. Exchange whatever you want, seamlessly!",
      image: Mobile3,
      bgColor: "#031C0E",
    },
  ];

  return (
    <div className="flex flex-col justify-center mt-32 mx-10 lg:flex-row lg:w-[1200px] lg:mx-auto  items-start">
      {/* Text Section */}
      <div className="flex flex-col lg:w-[400px] py-10">
        <p>MOBILE APP</p>
        <p className="text-4xl font-semibold my-5">Take the interchain with you!</p>
        <div className="flex gap-5 mb-10">
          <button className="flex items-center px-2 py-1 bg-[#A3F7C1] rounded-full">
            <img className="w-7 rounded-full" src={PlayStore} alt="Play Store" />
            <p className="ml-2">Android</p>
          </button>
          <button className="flex items-center px-2 py-1 bg-[#A3F7C1] rounded-full">
            <img className="w-7 rounded-full" src={AppStore} alt="App Store" />
            <p className="ml-2">iOS</p>
          </button>
        </div>
        <div className="max-lg:hidden lg:flex flex-col gap-10">
          {toggleData.map((item, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-selected={activeItemIndex === index}
              className={`cursor-pointer ${
                activeItemIndex === index ? "" : "opacity-40"
              }`}
              onClick={() => setActiveItemIndex(index)}
              onKeyDown={(e) => e.key === "Enter" && setActiveItemIndex(index)}
            >
              <h1 className="text-lg font-bold ">{item.heading}</h1>
              <p>{item.text}</p>
              {activeItemIndex===index && <p className="text-green-400 " >Learn more</p>}
            </div>
          ))}
        </div>
      </div>
      {/* Image Section */}
      <div
        className="p-5 max-lg:hidden rounded-xl"
        style={{ backgroundColor: toggleData[activeItemIndex].bgColor }}
      >
        <img
          className="h-[500px]"
          src={toggleData[activeItemIndex].image}
          alt={toggleData[activeItemIndex].heading}
        />
      </div>
    </div>
  );
};

export default Mobile;
