import data from '@/data'
import Image from 'next/image'
import React from 'react'

const Albums = () => {
  return (
    <div className='space-y-2'>
        <div className='flex justify-between items-center '>
            <span className='text-2xl font-semibold'>Made For You</span>
            <span className='text-sm text-dimmed font-semibold'>Show All</span>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
          {
            data.albums.map((album)=>(
              <div key={album.name} className='space-y-4 w-full'>
                <Image className='object-cover rounded-lg' src={album.cover} width={200} height={200} alt='Album Cover'/>
                <span className='text-dimmed text-sm '>{album.name} - {album.artist}</span>
              </div>
            ))
          }
            
        </div>
      
    </div>
  )
}

export default Albums
