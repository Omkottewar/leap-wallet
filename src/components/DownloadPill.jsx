import React from 'react'

const DownloadPill = ({data}) => {
    const {image,text,heading} = data
  return (
    <div className='flex bg-[#CCFFE3]   items-center rounded-full gap-3 p-5'>
        <img className=' w-6 lg:w-16 rounded-full' src={image} alt="" />
        <div className="">
            <p className='font-bold text-sm '>{heading}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default DownloadPill