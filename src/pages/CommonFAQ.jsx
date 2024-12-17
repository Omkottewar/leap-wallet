import { useState } from "react";

const CommonFAQ = ({accordionData}) => {
  const [showAccordion,setShowAccordion] = useState(false)


  const handleClick = (id)=>{
    setShowAccordion(showAccordion === id ?"":id);
    setShowAccordion
  }
  return (
    <div className='lg:flex mt-32 justify-between items-center w-[95%] lg:w-6/12 mx-auto'>
     <div className="">
     <h1 className='font-bold text-4xl'>FAQs</h1>
     <p className='text-[#1FA64E]'>Support</p>
     </div>

      <div className="flex flex-col  gap-10 mt-10">
    {
      accordionData?.map((item,index)=>{
        return(
          <div className="bg-[#cbf5d1] lg:h-20 rounded-xl shadow-xl flex flex-col justify-center px-10 py-12 " onClick={()=>handleClick(index)} key={index}>
            <span className='flex justify-between mb-2'>
              <span className='text-xl'>{item.title}</span>
             <p className='text-xl'>{showAccordion === index ?"-" :"+" }</p>
            </span>
            {showAccordion === index && <p >{item.text}</p>}
          </div>
        )
      })
    }
      </div>
    </div>
  )
}

export default CommonFAQ