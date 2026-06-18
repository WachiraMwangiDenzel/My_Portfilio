'use client'
import React from 'react'

import { getRoute } from './Config/getRoute'
import { Menu, Download } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function miniNav() {
        const pathname = usePathname();
        const currentRoute = getRoute(pathname);
        
  return (
        

    <div className='backdrop-blur-md bg-white/50 text-gray-600 flex md:pt-6 justify-between pb-2 pr-2 md:px-4 lg:px-6 items-center'>


      {/* Mini Nav Content */}
      <div className=' flex gap-4 items-center'>

        {/* Hamburger Menu */}
        <div className='p-3 md:hidden'>
          <Menu size={35} />
        </div>

        <div>
          <h1 className='text-lg text-black'>
            {currentRoute.title}
          </h1>

          <p className='hidden md:block ml-3 text-blue-500'>
            {currentRoute.subhead}
          </p>
          <p className='block md:hidden ml-3 text-blue-500'>
            {currentRoute.subhead2}
          </p>
        </div>

      </div>

      {/* Download Cv Button on Mobile Viewport */}
      <div className='md:hidden '>
        <a href="/Denzel_Mwangi_CV.pdf" 
        download 
        className="bg-blue-500 text-white text-lg md:text-base p-2 md:px-4 md:py-2 md:rounded hover:bg-blue-600 flex gap-2 items-center"><Download />
          <span className='hidden md:block'>Resume</span>
        </a>
      </div>
    </div>
  );
}
