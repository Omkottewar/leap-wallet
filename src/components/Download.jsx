import { AppStore, Brave, Chrome, dashboard, Explorer, PlayStore, SwapFast } from "../assets"
import DownloadPill from "./downloadPill"

const Download = () => {

  const items = [
    {
      heading:"Get for Chrome",
      text:"Extension",
      image:Chrome
    },
    {
      heading:"Get for Edge",
      text:"Extension",
      image:Explorer
    },
    {
      heading:"Get for brave",
      text:"Extension",
      image:Brave
    },
    {
      heading:"Install on iOS",
      text:"AppStore",
      image:AppStore
    },
    {
      heading:"Install on Android",
      text:"No installation, no hassle",
      image:PlayStore
    },
    {
      heading:"Explore with Leap Dashboard",
      text:"No installation, no hassle",
      image:dashboard
    },
    {
      heading:"Swap for any token instantly, with SwapFast",
      text:"All wallets supported!",
      image:SwapFast
    },
  ]

  return (
    <div className=" w-[95%] lg:w-[1000px] mx-auto bg-[#6AD99C] shadow-xl p-10 rounded-3xl mt-32">
      <p>Get Leap!</p>
      <h1 className="text-5xl font-bold">The interchain experience you've been waiting for</h1>
      <div className=" flex max-sm:flex-col justify-between gap-10 mt-10">
      {items.slice(0,3).map((item,index)=>{
        return (
          <DownloadPill data={item} className=""   key={index}/>
        )
      })}
      </div>
      <div className="flex max-sm:flex-col  justify-between gap-10 mt-10">
      {items.slice(3,5).map((item,index)=>{
        return (
          <DownloadPill data={item} className=""   key={index}/>
        )
      })}
      </div>
      <div className="mt-10"><DownloadPill data={items[5]} /></div>
      <div className="mt-10"><DownloadPill data={items[6]} /></div>
    </div>
  )
}

export default Download