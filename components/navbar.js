import { CodeXml, Moon, Sun } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

export default function navbar() {
  return (
    <div className='  flex items-center justify-between px-3 py-4  bg-gray-100'>
      <div className='flex items-center space-x-4 hover:animate-bounce'>
        <div className='border-2 border-white shadow-lg transition-transform duration-600 hover:rotate-360 p-2 ml-3 '>
      <CodeXml  strokeWidth={2} color="#1c6ae8" size={34} />
        </div>
      <div className=''>
        <h1 className='text-xl font-semibold'>Portfolio</h1>
      </div>
    </div>
    <div className='border-2 inline-block border-gray-500 bg-gray-50 rounded border-dashed gray px-auto  py-2 font-semibold'>
      <p className='ml-2 mr-2 text-gray-500'> Currently Viewing :<span className='muppercase l-2 mr-2 text-green-500'>Project 1</span></p>
    </div>
    <div>
      <p>10+ Design Projects</p>
    </div>
      <div className='flex items-center justify-between space-x-8'>
        <div className=''>
         <p className='ml-9'> Denzel Mwangi</p>
                <p className='text-base text-gray-400 '>Front-End Developer</p>
        </div>
        <div className=''>
          <Image src="/avatar.jpg" alt="..." width={50} height={50} className='rounded-lg  ' />
        </div>
        <div className='flex flex-col space-y-1 mr-3 rounded-xl hover:bg-blue-950 hover:transition-colors p-1 '>
          <Moon className=' hover:text-white '/>
          <Sun className='hover:text-white hover:translate-y-2'/>
        </div>
      </div>
    </div>

  )
}

