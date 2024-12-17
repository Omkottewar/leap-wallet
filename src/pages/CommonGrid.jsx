

const CommonGrid = ({gridData}) => {

  return (
    <div className="lg:w-[900px] w-[95%] mx-auto mt-32 ">
        <h1 className='font-bold text-5xl mb-10 w-[50%] text-[#1FA64E]'>The best ever mobile experience for Cosmos</h1>
        <div className='  grid grid-cols-1 gap-10 lg:grid-cols-2 lg:grid-rows-2'>
        {
            gridData?.map((item,index)=>{
                return(
                    <div key={index} className={`flex  max-sm:flex-col lg:flex-col lg:items-center rounded-2xl overflow-hidden h-[350px] lg:h-[450px]  lg:relative ${index===1||index===2?"bg-[#B3F5D0]":"bg-[#CFF8E2]"} p-5 lg:p-10`}>
                    <p className='text-2xl font-bold'>{item.text}
                    </p>
                    <img className={`lg:absolute object-cover bottom-[320px]  w-[400px] ${index===1 ? "lg:-bottom-[200px]":"lg:-bottom-[130px]"}`} src={item.image} alt="gridImg" />
                </div>
                )
            })
        }
        

         
    </div>
    </div>
  )
}

export default CommonGrid