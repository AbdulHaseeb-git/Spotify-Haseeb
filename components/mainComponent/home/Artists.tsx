import data from '@/data'
import Image from 'next/image'
import React from 'react'

const Artists = () => {
  return (
    <div className='md:grid md:grid-cols-2 flex flex-col gap-1.5'>
        {data.artists.map(artist => (
            <div className='overflow-hidden rounded-lg w-full bg-white/10 hover:bg-white/30 transition-all flex items-center gap-2' key={artist.name}>
                <div className='aspect-square w-14 h-14 relative'>
                <Image src={artist.picture} fill className='object-cover' alt='artist' />
                </div>
                <h4 >{artist.name}</h4>
            </div>
        ))}
    </div>
  )
}

export default Artists
