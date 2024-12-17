import React from 'react'
import { AppStore, PlayStore } from '../../assets'
import { herobackground, heroImg, heroImg1 } from './assets'

const MobileHero = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32' >
        <p className='font-medium lg:text-xl'>keep the interchain with you, wherever you go</p>
        <p className='text-4xl  lg:text-8xl text-[#32DA6D] font-bold mt-10'>Cosmos is better </p>
       <p className='text-4xl lg:text-8xl text-[#32DA6D] font-bold flex  items-center'> on  <img className='w-12 lg:w-20' src={heroImg1} alt="" />   mobile</p>
       <span className=" flex gap-5  z-10">
              <button className="flex w-28 px-2 py-1 bg-[#A3F7C1] rounded-full items-center">
                <img className="w-7 rounded-full" src={PlayStore} alt="" />
                <p> Android</p>
              </button>
              <button className="flex w-20 bg-[#A3F7C1] px-2 py-1 rounded-full items-center">
                <img className="w-7 rounded-full" src={AppStore} alt="" />
                <p> iOS</p>
              </button>
            </span>
            <div className="relative overflow-hidden flex justify-center mt-20">
              <img className='absolute  sm:-bottom-[240px] -z-10 w-[800px]  sm:w-[1000px]' src={heroImg} alt="" />
              <img src={herobackground} alt="" />
            </div>
    </div>
  )
}

export default MobileHero