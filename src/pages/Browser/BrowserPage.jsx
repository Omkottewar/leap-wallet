import React from 'react'
import BrowserHero from './BrowserHero'
import CommonGrid from '../CommonGrid' 
import { browserGrid1, browserGrid2, browserGrid3, browserGrid4 } from './assets'
import CommonFeatures from '../CommonFeatures'
import { addWallet, blutooth, ghost, magic, secure, stats, tag, wallet } from '../Mobile/assets'
import CommonFAQ from '../CommonFAQ'
import SupportComponent from '../../components/SupportComponent'
import Download from '../../components/Download'
const BrowserPage = () => {

  

  const gridData = [
    {
        text:"Delegate your assets with a single click, & claim rewards just as easily",
        image:browserGrid1
    },
    {
        text:"Contribute to the growth of Cosmos by voting on governance proposals",
        image:browserGrid2
    },
    {
        text:"Swap between 100+ tokens on 50+ chains, without ever leaving your wallet!",
        image:browserGrid3
    },
    {
        text:"Leap Wallet is supported on all top Cosmos dApps, so you can interact with ease",
        image:browserGrid4
    },
];

const accordionData =[
   
  {
    title:"Which browsers can I use the Leap Extension on?",
    text:"The Leap extension can be used on all Chromium based browsers. Support for other platforms is coming soon."
  },
  {
    title:"Is the Leap Extension safe?",
    text:"Indeed it is! Leap's codebase has been audited by leading security firms. Further, our codebase is open-source for enhanced scrutiny. Learn more."
  },
  {
    title:"Which chains does Leap support?",
    text:"The Leap Extension supports 70+ chains on Cosmos, with more being added everyday. You can also manually add chains if you wish to."
  },
  {
    title:"Is Leap the coolest wallet for Cosmos?",
    text: "What do you think? 😉"
  },
]

const features = [
  {
      title:"Intuitive UX, clean UI",
      text:"We stress on the smallest details, so you can keep looking at the big",
      Image:magic
  },

  {
      title:"Portfolio overview",
      text:"All your assets, categorised neatly for a comprehensive overview of your portfolio.",
      Image:stats
  },
  {
      title:"Accurate price feed",
      text:"Stay updated with the action. Token prices & portfolio values update in real time with decimal precision.",
      Image:tag
  },
  {
      title:"Your wallet, your style",
      text:"Customise themes, set custom PFPs, & view values in the currency of your choice. Make your wallet truly yours.",
      Image:wallet
  },
  {
      title:"Go ghost",
      text:"Prevent shoulder surfing by hiding all dollar values & balances. Show off your assets, not your stacks!",
      Image:ghost
  },
  {
      title:"Made for more",
      text:"Keep one for your DeFi, one for NFTs, one for trading… Import, create, & manage as many wallets as you want.",
      Image:addWallet
  },
  {
      title:"Bluetooth Ledger",
      text:"Pair & use your Ledger wallet through bluetooth. Live for all supported Cosmos chains.",
      Image:blutooth
  },
  {
      title:"Convenient & secure",
      text:"With Leap on mobile, you get the best of convenience, without any compromises on security.",
      Image:secure
  },
]

  return (
    <div>
        <BrowserHero/>
        <CommonGrid gridData={gridData} />
        <CommonFeatures features={features}/>
        <SupportComponent/>
        <CommonFAQ accordionData={accordionData} /> 
        <Download/>
    </div>
  )
}

export default BrowserPage