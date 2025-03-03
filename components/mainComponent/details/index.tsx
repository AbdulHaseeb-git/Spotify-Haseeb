import data from '@/data'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { PiDotsThreeBold } from 'react-icons/pi'
import SongInfo from './SongInfo'
import AboutArtist from './AboutArtist'

const Details = () => {
  return (
    <div className='bg-gradient-to-b from-black/10
       to-foreground rounded-lg h-full overflow-auto hide-scrollbar relative z-[1]'>
      <video autoPlay loop muted className='absolute inset-x-0 top-0 h-[400px]  object-cover -z-[1]'>
        <source src={'/song.mp4'} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-gradient-to-b from-black/10
       to-foreground h-[400px] -z-[1]' />
       <div className='flex justify-between sticky top-0 inset-x-0 p-3 rounded-xl'>
        <span>{data.song.album}</span>
        <div className='flex items-center gap-1.5 text-dimmed text-2xl'>
          <PiDotsThreeBold/>
          <IoCloseOutline/>
        </div>
       </div>
       <div className='space-y-12 p-3'>
        <SongInfo/>
        <AboutArtist/>
       </div>
    </div>
  )
}

export default Details
