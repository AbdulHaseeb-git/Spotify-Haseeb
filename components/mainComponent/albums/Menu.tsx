import React from 'react'
import { IoIosAlbums, IoIosSearch, IoMdAdd } from 'react-icons/io'
import { IoList } from 'react-icons/io5'

const Menu = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4 hover:text-white'>
        <IoIosAlbums/>
        <span className='font-semibold text-xs text-center lg:text-lg'>Your Library</span>
      </div>
      <div className='text-xl bg-transparent hover:bg-hover rounded-full p-1 cursor-pointer'>    
        <IoMdAdd/>
      </div>
    </div>
    <div className='text-sm text-white bg-hover rounded-full w-fit px-3 py-1 my-3'>
        Albums
    </div>
    <div className='flex justify-between items-center'>
      <IoIosSearch/>
      <div className='flex items-center gap-1'>
        <span className='text-xs'>Recents</span>
        <IoList/>
      </div>
    </div>
    </>
  )
}

export default Menu
