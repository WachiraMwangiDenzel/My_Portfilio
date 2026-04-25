import React from 'react'
import Navbar from '@/components/navbar'
import MiniNav from '@/components/miniNav'
export default function page() {
  return (
    <div className=" bg-white text-black font-medium min-h-screen ">
      <Navbar />
      <MiniNav />
    </div>
  )
}
