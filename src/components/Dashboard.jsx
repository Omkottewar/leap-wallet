import React, { useState } from 'react'
import { dashboard, Dashboard1, Dashboard2, Dashboard3, DashboardMobile } from '../assets'

const Dashboard = () => {
  const [activeIndexNumber,setActiveItemIndex] = useState(0);


  const handleTab =(id)=>{
    setActiveItemIndex(id);
  }

  const toggleData = [
    {
      heading:"Detailed portfolio overview",
      text:"Explore all your tokens, DeFi positions, staked assets & more across all Cosmos chains.",
      image:Dashboard1,
      bgColor:"#98EDB6"
    },
    {
      heading:"Dive into Cosmos",
      text:"From top trending tokens to curated DeFi vaults, find it all right here.",
      image: Dashboard2,
      bgColor:"#55A370"
    },
    {
      heading:"Cross-platform",
      text:"Seamless access to your entire portfolio on any device, anytime.",
      image: Dashboard3,
      bgColor:"#1E6938"
    },
  ]
  return (
    <div className='lg:w-[1200px] mx-auto flex flex-col mt-32 max-lg:mx-10'>
      <p className='text-[#5B8760]'>LEAP DASHBOARD</p>
      <div className="flex flex-col lg:flex-row  justify-between my-10">
        <p className='text-5xl font-semibold lg:w-[700px]'>All the details you could ever need</p>
        <button className='flex items-center w-fit h-12  bg-[#98EDB6] rounded-full px-2  font-bold '><img className='w-5 rounded-full' src={dashboard}  alt="logo" /> Launch Leap Dashboard</button>
      </div>

    <div className="flex flex-col  justify-center items-center">
      <img style={{backgroundColor:toggleData[activeIndexNumber].bgColor}} className='w-[1200px] max-lg:hidden rounded-xl' src={toggleData[activeIndexNumber].image} alt="" />
      <img  className='w-[300px] lg:hidden bg-[#98EDB6] rounded-xl' src={DashboardMobile} alt="" />
    </div>

    <div className=" flex  max-lg:hidden mt-10 " >
      {toggleData.map((item,index)=>{
        return(
          <div onClick={()=>handleTab(index)} className={ ` flex flex-col gap-3  ${activeIndexNumber === index ?"":"opacity-40"}`} key={index}
          >
            <h1 className='text-xl font-bold'>{item.heading}</h1>
            <p>{item.text}</p>
            {activeIndexNumber === index && <p>Learn more</p>}
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Dashboard;