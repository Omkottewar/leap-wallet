import { akashNetwork, archway, axelar, bandProtocol, celestia, chihuahua, cosmosHub, download, dydx, dymension, injective, jackal, nibiru, osmosis } from "./assets";
import ChainsCard from "./ChainsCard";

const ChainsPage = () => {

    const ChainsData = [
        {
            title: "Cosmos Hub",
            image: cosmosHub,
        },
        {
            title: "Dymension",
            image: dymension,
        },
        {
            title: "Celestia",
            image: celestia,
        },
        {
            title: "Nibiru",
            image: nibiru,
        },
        {
            title: "Jackal",
            image: jackal,
        },
        {
            title: "Osmosis",
            image: osmosis,
        },
        {
            title: "Injective",
            image: injective,
        },
        {
            title: "Band Protocol",
            image: bandProtocol,
        },

        {
            title: "Archway",
            image: archway,
        },
        {
            title: "Akash Network",
            image: akashNetwork,
        },
        {
            title: "Axelar",
            image: axelar,
        },
        {
            title: "Chihuahua",
            image: chihuahua,
        },

        {
            title: "DYDX",
            image: dydx,
        },

    ];
    
  return (
    <div className="lg:w-[1200px] w-[95%] mx-auto mt-32">
        <h1 className="text-6xl font-bold">70+ chains live</h1>
        <p className="text-xl text-gray-500">The interchain is made to be explored! With Leap, you can dive into any chain with ease.</p>
    
         <div className="lg:w-[1200px] p-20">
         <p className="text-gray-400">FEATURED CHAINS</p>
            <p className="text-4xl font-bold">Our favourite chains in the ecosystem</p>
            <div className=" flex gap-10 flex-wrap justify-between mt-20">
        {ChainsData.splice(0,3).map((item,index)=>{
            return(
                <ChainsCard key={index} data={item} />
            )
        })}
        </div>
         </div>

    


<div className=" w-[95%] lg:w-[1200px] mx-auto mt-32">
    <div className="flex justify-between items-center">
        <p className="text-xl">ALL CHAINS</p>
        <button><img src={download} alt="" /></button>
    </div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
        {ChainsData.map((item,index)=>{
            return(
                <ChainsCard key={index} data={item}  />
            )
        })}
    </div>
</div>
    </div>
  )
}

export default ChainsPage;