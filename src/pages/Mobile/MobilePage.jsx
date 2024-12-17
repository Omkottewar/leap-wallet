import React from 'react'
import MobileHero from './MobileHero'
import MobileGrid from '../CommonGrid'
import MobileFeatures from '../CommonFeatures'
import SafetyComponent from '../../components/SafetyComponent'
import Download from '../../components/Download'
import MobileFAQ from '../CommonFAQ'
import { Mobile1, Mobile2 } from '../../assets'
import { grid1, grid2 } from './assets'
import { addWallet, blutooth, ghost, magic, secure, stats, tag, wallet } from './assets'

const MobilePage = () => {

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


  const accordionData =[
   
    {
      title:"Can Leap Wallet be used on mobile?",
      text:"Yes. You can easily use Leap Wallet on both iOS & Android. To download Leap, click here!"
    },
    {
      title:"Is Leap Wallet safe to use on mobile?",
      text:"Yes it is! In fact, our codebase has been audited twice. You can learn more here."
    },
    {
      title:"Which chains does Leap support?",
      text:"Leap Wallet supports 70+ chains on Cosmos. See them all here. Further, you can also add chains manually."
    },
    {
      title:"What dApps can I use on the app?",
      text: "For the explorers of Cosmonaut, our mobile dApp browser offers permissionless access to more than 100 dApps on the interchain. See our favourites here."
    },
  ]
  const gridData = [
    {
        text:"Instant mobile notifications bring the alpha to you, wherever you go",
        image:Mobile1
    },
    {
        text:"Explore 150+ dApps conveniently, connect & interact securely",
        image:Mobile2
    },
    {
        text:"Swap quickly & cheaply between 100+ tokens on 50+ chains",
        image:grid1
    },
    {
        text:"One tap to stake, one tap to claim, one tap to repeat & grow!",
        image:grid2
    },
]
  return (
    <div>
        <MobileHero/>
        <MobileGrid gridData = {gridData} />
        <MobileFeatures features={features} />
        <SafetyComponent/>
        <Download/>
        
        <MobileFAQ accordionData={accordionData} />
    </div>
  )
}

export default MobilePage