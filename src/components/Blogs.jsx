import { Blog1, Blog2 } from '../assets'
import Blog3 from '../assets/blog3.png'
const Blogs = () => {
  const blogs = [
    {
      category:"COSMOS",
      date:"Nov 15, 2024",
      image:Blog1,
      title:"Run a Celestia Light Node using Leap ☁",
      text:"Contribute to modularity with one tap. Come & take it!",
    },    {
      category:"COSMOS",
      date:"Nov 1, 2024",
      image:Blog2,
      title:"All Chains is live!",
      text:"View all your tokens in one single place...",
    },
    {
      category:"DEFI",
      date:"Oct 21, 2024",
      image:Blog3,
      title:"Getting Started with Unichain Testnet Using Leap Wallet",
      text:"A Step by Step Guide to Transact, Bridge and Explore Unichain Testnet on Superbridge, Bridge GG",
    },

  ]
  return (
    <div className='mt-32 lg:w-[1000px] mx-auto'> 
    <div className="flex justify-between items-center">
      <h1 className='text-2xl font-bold'>From the desk of froge.</h1>
      <button className='bg-[#1FA64E] text-white font-bold rounded-full p-2'>View all blogs</button>
    </div>
    <div className="flex justify-between mt-10">
      {blogs.map((item,index)=>{
        return(
          <div className="flex  w-80 bg-white flex-col  rounded-xl p-5 " key={index}>
            <img className=' rounded-xl ' src={item.image} alt="image" />
            <div className="flex flex-col ">
              <span className='mt-5 text-gray-400 mx-auto'><span className={`${item.category==="DEFI"?"bg-[#E625B9]":"bg-[#32DA6D]" } rounded-full p-2 text-white font-semibold`}>{item.category}</span >  . {item.date}</span>
              <p className='mt-5 text-2xl font-medium'>{item.title}</p>
              <p className='mt-5 text-gray-400'>{item.text}</p>
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Blogs