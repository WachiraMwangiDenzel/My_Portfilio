import { ArrowDownToLine } from 'lucide-react'
import React from 'react'

export default function miniNav() {
  return (
    <div>
        <div className='p-4 bg-gray-200 flex justify-between'>
            <div>
                <h1 className='text-xl font-bold'>My Portfolio</h1>
                <p> Dashboard</p>
            </div>
            <div className=''>
                <button className='hover:cursor-pointer hover:translate-x-1 p-2 hover:bg-blue-500 transition-colors bg-blue-300 m-2 rounded flex space-x-3 items-center justify-center'>Download Resume<ArrowDownToLine size={25}/></button>
            </div>
        </div>
    </div>
  )
}