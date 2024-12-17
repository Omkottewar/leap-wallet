import React from "react";
import {
  AppStore,
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Logo1,
  OnlyLogo,
  PlayStore,
} from "../assets";

const Hero = () => {
  return (
    <div className=" flex flex-col mt-32">
      <div className=" xl:text-[24px]   sm:text-[18px] text-[12px] flex flex-col justify-center items-center">
        <p>swap, transfer, stake, earn, explore.</p>
        <div className="text-[#32DA6D]  font-bold xl:text-[121px] sm:text-[61px]  text-[41px] ">
          <p className="flex justify-between">
            this
            <img className="w-20    xl:w-48" src={OnlyLogo} alt="" /> wallet is
          </p>
          <p className=""> ready for cosmos</p>
        </div>
        {
          <div className="w-full flex flex-col justify-center items-center">
            <button className="max-lg:hidden bg-[#1FA64E] px-3 py-2 rounded-full text-white font-semibold">
              Get Leap
            </button>
            <span className="lg:hidden flex gap-5 ">
              <button className="flex w-28 px-2 py-1 bg-[#A3F7C1] rounded-full items-center">
                <img className="w-7 rounded-full" src={PlayStore} alt="" />
                <p> Android</p>
              </button>
              <button className="flex w-20 bg-[#A3F7C1] px-2 py-1 rounded-full items-center">
                <img className="w-7 rounded-full" src={AppStore} alt="" />
                <p> iOS</p>
              </button>
            </span>
          </div>
        }
      </div>
      <div className="hero-grid grid lg:w-[1100px] mx-10   lg:mx-auto mt-32  p-10 gap-8 lg:grid-cols-2 grid-rows-2 bg-[#37C074] rounded-3xl">
  <div className="bg-[#CEF8E1] w-full h-[450px] rounded-3xl p-5 lg:relative overflow-hidden flex flex-col  sm:flex-row">
    <p className="font-semibold text-2xl">Stake your assets, earn rewards, rinse & repeat</p>
    <img className="lg:absolute lg:-bottom-40" src={Hero1} alt="" />
  </div>
  <div className="bg-[#C9EFFF] w-full h-[450px] rounded-3xl p-5 lg:relative overflow-hidden flex flex-col  sm:flex-row ">
    <p className="font-semibold text-2xl">Swap between 100+ tokens on 50+ chains</p>
    <img className="lg:absolute lg:-bottom-28" src={Hero2} alt="" />
  </div>
  <div className="bg-[#F8C79A] w-full h-[450px] rounded-3xl p-5 lg:relative overflow-hidden flex flex-col  sm:flex-row">
    <p className="font-semibold text-2xl">Curated mobile notifications for you</p>
    <img className="lg:absolute lg:-bottom-16 right-0" src={Hero3} alt="" />
  </div>
  <div className="bg-[#FEC0C0] w-full h-[450px] rounded-3xl p-5 lg:relative overflow-hidden flex flex-col sm:flex-row ">
    <p className="font-semibold text-2xl">Buy, trade, show off & explore new NFTs</p>
    <img className="lg:absolute lg:-bottom-28 right-0" src={Hero4} alt="" />
  </div>
</div>

    </div>
  );
};

export default Hero;
