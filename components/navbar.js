import Image from 'next/image'
import { CodeXml, Moon, MousePointer2, Sun } from 'lucide-react'
import React from 'react'

export default function navbar() {
  return (
    <div className='flex justify-between items-center p-1 bg-gray-300 text-black font-base text-md max-w-full'>
        <div className='flex items-center gap-2 ml-2'>
            <p className='border border-white shadow-md p-2 hover:rotate-180'>
                <CodeXml size={28} />
            </p>
            <div>
            <h2 className='flex flex-col leading-tight font-black text-lg'>Portfolio</h2>
            <p className='text-gray-500 text-sm '>Front-end Developer</p>
            </div>
        </div>
        <div className='flex justify-center gap-1 border border-dashed border-blue-600 p-2 rounded-md shadow-md '>
           <p>Currently Viewing:</p>
            <p className='text-blue-600'>Dashboard</p> 
        </div>
        <div className='text-blue-500 text-lg '>
            <p>3+ Designs In One Portfolio</p>
        </div>
        <div className='flex gap-4 items-center mr-4'>
            <div className='flex gap-1 items-center text-sm border border-dashed border-blue-500 text-blue-500 p-1 shadow-md shadow-blue-500/50'>
                <MousePointer2 size={16} />
                <a href='#' className=''>Click to View One Page Portfolio</a>
            </div>
            <div className='flex items-center gap-1 border border-dashed border-gray-600 p-1 rounded-md shadow-md bg-blue-100'>
            <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className=' w-auto h-auto rounded-sm' />
            </div>
            <div className=''>
                <Moon size={25}/>
                {/* <Sun /> */}
            </div>
        </div>
    </div>
  )
}
