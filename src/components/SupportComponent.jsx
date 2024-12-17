import React from "react";
import {
  one,
  two,
  four,
  six,
  eight,
  ten,
  twelve,
  fourteen,
  sixteen,
  eighteen,
  twenty,
  twentyTwo,
  twentyFour,
} from "../assets";

const SupportComponent = () => {
  const images = [
    { name: "Celestia", image: one },
    { name: "Archway", image: two },
    { name: "Akash Network", image: four },
    { name: "Axelar", image: six },
    { name: "Chihuahua", image: eight },
    { name: "Cosmos Hub", image: ten },
    { name: "DYDX", image: twelve },
    { name: "Dymension", image: fourteen },
    { name: "Nibiru", image: sixteen },
    { name: "Jackal", image: eighteen },
    { name: "Osmosis", image: twenty },
    { name: "Injective", image: twentyTwo },
    { name: "Band Protocol", image: twentyFour },
  ];

  return (
    <div className="relative bg-[#EAFDE7]  overflow-hidden py-20 mt-32 h-[600px]">
      {/* Infinite sliding logos */}
      <div className="opacity-40 flex flex-col gap-10">
      <div className="relative overflow-hidden">
          <div className="flex animate-slide-left gap-6 w-max">
            {[...images, ...images].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A8D42] flex gap-2 rounded-full items-center p-2"
                style={{ minWidth: "140px" }}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <p className="text-white text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-right gap-6 w-max">
            {[...images, ...images].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A8D42] flex gap-2 rounded-full items-center p-2"
                style={{ minWidth: "140px" }}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <p className="text-white text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left gap-6 w-max">
            {[...images, ...images].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A8D42] flex gap-2 rounded-full items-center p-2"
                style={{ minWidth: "140px" }}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <p className="text-white text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      
        <div className="relative overflow-hidden opacity-80">
          <div className="flex animate-slide-right gap-6 w-max">
            {[...images, ...images].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A8D42] flex gap-2 rounded-full items-center p-2"
                style={{ minWidth: "140px" }}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <p className="text-white text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      
      </div>

      {/* Main Content */}
      <div className="relative z-10  -top-[350px] w-fit h-[489px] mx-auto p-10 flex flex-col items-center rounded-full bg-circular-gradient bg-white justify-center text-center">
        <h3 className="text-[#1A8D42] font-bold mb-4">
          FRENS WITH EVERYONE ON THE INTERCHAIN
        </h3>
        <h1 className="text-black text-4xl font-extrabold mb-6">
          70+ chains. 100+ tokens. <br /> 150+ dApps.
        </h1>
        <button className="bg-[#1FA64E] text-white py-3 px-6 rounded-full text-lg font-medium">
          Explore ecosystem
        </button>
      </div>
    </div>
  );
};

export default SupportComponent;