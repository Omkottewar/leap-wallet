import React from 'react'

const ChainsCard = ({data}) => {
  return (
    <div className='w-72 h-56 shadow-xl rounded-xl flex flex-col items-center justify-evenly bg-white hover:bg-gray-400 cursor-pointer'>
        <img className='w-16' src={data.image} alt="" />
        <p>{data.title}</p>
        <p>{data.text}</p>
    </div>
  )
}

export default ChainsCard