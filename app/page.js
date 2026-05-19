import React from 'react'
// import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

export default function page() {
  return (
    <div className='min-h-screen bg-gray-200 text-black w-full'>
      <div>
        <Navbar />
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}
