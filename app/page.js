import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Intro from '../components/intro'
import QuickAccess from '../components/quickAcces'

export default function page() {
  return (
    <div className=''>
        {/* <Navbar /> */}
        {/* main container */}
      {/* <div  className='flex flex-1 overflow-hidden'>
      <div className='  bg-gray-200'>
      <Sidebar />
      </div> */}
      <main className='overflow-y-auto flex-1 p-4 bg-gray-100'>
        <Intro />
        <div className='w-full border-t border-gray-300 p-1'></div>
        <QuickAccess />
      </main>
      </div>
    // </div>
  )
}
