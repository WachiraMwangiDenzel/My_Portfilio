"use client";
import React from 'react';

import { Download, Hamburger } from 'lucide-react';
import { getRoute } from './Config/getRoute';
import { usePathname } from 'next/navigation';


export default function MiniNav() {
  const pathname = usePathname();
  const currentRoute = getRoute(pathname);


  return (
    <div className='bg-gray-100 text-gray-600 flex pt-6 justify-between  pb-2 pr-2 md:px-4 lg:px-6 items-center'>
      
      

      {/* Mini Nav Content */}
      <div className=' flex gap-4 items-center'>

        {/* Hamburger Menu */}
        <div className='p-3 md:hidden'>
          <Hamburger size={35} />
        </div>

        <div>
          <h1 className='text-lg text-black'>
          {currentRoute.title}
        </h1>

        <p className='ml-3 text-blue-500'>
          {currentRoute.subhead}
        </p>
        </div>
        
      </div>

      {/* Download Cv Button on Mobile Viewport */}
      <div className='md:hidden '>
        <a href="/Denzel_Mwangi_CV.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex gap-2 items-center"><Download />
          Resume
        </a>
      </div>
    </div>
  )
}
