import React from 'react'

const Tabs = () => {
    const tabs = ["All" , "Music" , "Podcasts" , "AudioBooks"]
  return (
    <div className='flex gap-2 md:gap-3 items-center'>
      {
        tabs.map((tab,index)=>(
            <div className={`${index === 0 ? "bg-white text-black" : "bg-white/20"} hover:bg-white hover:text-black  rounded-full px-1.5 md:px-2.5 md:py-1.5 py-1 text-sm cursor-pointer`} key={`${tab}${index}`}>{tab}</div>
        ))
      }
    </div>
  )
}

export default Tabs
