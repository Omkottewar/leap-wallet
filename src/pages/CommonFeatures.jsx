import React from 'react'


const CommonFeatures = ({features}) => {


    

  return (
    <div className= 'w-[95%] lg:w-[800px] mx-auto gap-10 mt-32 grid grid-cols-1 grid-rows-auto sm:grid-cols-2'>
        {features?.map((item,index)=>{
            
            return(
                <div className="" key={index}> 
                <img className='w-10 rounded-lg' src={item.Image} alt="" />
                <div className="">
                <p className='font-bold text-lg'>{item.title}</p>
                <p className='font-medium'>{item.text}</p>
                </div>
                </div>
            )
        })}

    </div>
  )
}

export default CommonFeatures