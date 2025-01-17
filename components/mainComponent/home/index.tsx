import React from 'react'
import Tabs from './Tabs'
import Artists from './Artists'
import Albums from './Albums'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-blue-800/20 to-foreground h-full
    rounded-lg p-4 space-y-6 overflow-y-auto hide-scrollbar'> 
        <Tabs/>
        <Artists />
        <Albums />
    </div>
  )
}

export default Home
