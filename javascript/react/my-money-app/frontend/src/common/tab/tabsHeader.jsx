import React from 'react'

export default function TabsHeader({children}) {
  return (
    <ul className='nav nav-tabs'>
      { children }
    </ul>
  )
}
