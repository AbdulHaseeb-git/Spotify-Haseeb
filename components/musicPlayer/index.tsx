import React from 'react'
import Song from './Song'
import Player from './Player'
import Controls from './Controls'

const MusicPlayer = () => {
  return (
    <div className='flex items-center justify-between'>
        <Song/>
        <Player/>
        <Controls/>
    </div>
  )
}

export default MusicPlayer
