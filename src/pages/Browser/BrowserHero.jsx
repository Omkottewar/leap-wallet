import React from 'react'
import { browserBackground, browserHero, browserHero1, browserHero2, browserHero3, hero1 } from './assets'

const BrowserHero = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32' >
        <p className='font-medium lg:text-xl'>keep the interchain with you, wherever you go</p>
        <p className='text-4xl  lg:text-8xl text-[#32DA6D] font-bold mt-10'>a wallet that </p>
       <p className='text-4xl lg:text-8xl text-[#32DA6D] font-bold flex  items-center'>understands  <img className='w-12 lg:w-20' src={hero1} alt="" />  you</p>

    <button className='bg-[#1FA64E] py-3 px-2  rounded-full '>Install Extension</button>


            <div className="relative overflow-hidden flex justify-center mt-20">
             <div className=" absolute -bottom-16 z-10 ">
             <img src={browserHero1} className='absolute w-[100px]  sm:w-[300px]' alt="" />
             <img className='lg:w-[900px] w-[250px]' src={browserHero3} alt="" />
             <img className='absolute sm:right-0 sm:bottom-60 w-[100px] lg:w-[300px] ' src={browserHero2} alt="" />
             </div>
              <img className='z-40' src={browserBackground} alt="" />
            </div>
    </div>
  )
}

export default BrowserHero