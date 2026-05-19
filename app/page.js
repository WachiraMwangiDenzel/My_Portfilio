import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

export default function page() {
  return (
    <div className='flex flex-col min-h-screen bg-white text-black w-full'>
        <Navbar />
        {/* main container */}
      <div  className='flex flex-1 overflow-hidden'>
      <div className='  bg-gray-200'>
      <Sidebar />
      </div>
      <main className='overflow-y-auto flex-1 p-4 bg-gray-100'>

      </main>
      </div>
    </div>
  )
}
