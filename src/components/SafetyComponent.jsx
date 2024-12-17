import React from "react";
import { safety1, safety2, safety3, Support } from "../assets";

const SafetyComponent = () => {
  const tabs = [
    {
      heading: "Non-custodial",
      text: "Your assets are always controlled by you.",
      image: safety1,
    },
    {
      heading: "Safe as it gets",
      text: "Leap has been audited by leading blockchain security experts.",
      image: safety2,
    },
    {
      heading: "Open source",
      text: "Verify, then trust. Our codebase is open to everyone's scrutiny.",
      image: safety3,
    },
  ];

  return (
    <div className="lg:w-[1200px]  mx-10   lg:mx-auto text-[#5B8760] mt-32">
      <p className="my-5 font-bold">SAFETY, GUARANTEED</p>
      <h1 className="my-5 text-5xl font-bold ">
        Stay in control, without worrying about security
      </h1>

      <div className="flex flex-col  lg:flex-row gap-10 justify-between">
        {tabs.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#BDFFD4] w-full mx lg:w-[350px] flex lg:flex-col  gap-5  p-5  lg:h-[300px]   lg:p-10 pr-20 rounded-xl  border border-gray-300 shadow-xl "
            >
              <img
                className="w-16 bg-[#1FA64E] p-3 rounded-lg"
                src={item.image}
                alt=""
              />
              <span>
                <h1 className="font-bold text-xl ">{item.heading}</h1>
                <p>{item.text}</p>
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex  flex-col lg:flex-row  bg-[#BDFFD4] mt-10 rounded-xl shadow-xl overflow-hidden ">
        <div className="flex flex-col gap-10 justify-between p-10">
          <div className="">
            <p className="font-bold">SUPPORT, ALWAYS</p>
            <h1 className="font-bold text-5xl text-black">
              web3, made <br /> friendly!
            </h1>
            <p>
              Find solutions for the most common issues on our support guides.
              If you're ever stuck, you can reach out to our support team.{" "}
              <strong> We're always ready to help!</strong>
            </p>
          </div>
          <button className="bg-[#222222] rounded-full w-40 h-12 text-white font-bold">
            Support guides
          </button>
        </div>
        <div className="">
          <img className="lg:relative md:w-96  left-16 top-16" src={Support} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SafetyComponent;
