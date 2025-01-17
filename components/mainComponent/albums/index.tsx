import React from 'react'
import Menu from './Menu'
import List from './List'

const Albums = () => {
  return (
    <div className='text-dimmed bg-foreground h-full overflow-auto hide-scrollbar rounded-lg p-4 flex flex-col gap-3
    '>
      <Menu />
      <List />
    </div>
  )
}

export default Albums
