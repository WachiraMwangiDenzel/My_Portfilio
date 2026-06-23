'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import { getRoute } from './Config/getRoute'
import { Menu, Download, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function miniNav() {
  const links = [
    { id: '1', href: '/', title: 'Dashboard' },
    { id: '2', href: '/skills', title: 'Skills' },
    { id: '3', href: '/projects', title: 'Projects' },
    { id: '4', href: '/experience', title: 'Experience' },
    { id: '5', href: '/education', title: 'Education' },
    { id: '6', href: '/contact', title: 'Contact' }
  ]



  const pathname = usePathname();
  const currentRoute = getRoute(pathname);


  const [isOpen, setisOpen] = useState(false);
  const open = <Menu size={35} />;
  const notOpen = <X size={35} />

  function handleMenu() {
    setisOpen(prev =>!prev)
  }

  return (


    <div className='backdrop-blur-md bg-white/50 text-gray-600 flex md:pt-6 justify-between pb-2 pr-2 md:px-4 lg:px-6 items-center'>
      {/* Mini Nav Content */}
      <div className=' flex gap-4 items-center'>

        {/* Hamburger Menu */}
        <button
          type='button'
          onClick={handleMenu}
          className='p-3 md:hidden cursor-pointer'>
          {!isOpen ? open : notOpen}
        </button>

        {isOpen &&
          <div className=' flex flex-col gap-3 fixed top-0 left-0 h-dvh w-full  z-10 p-2 bg-white md:hidden '>

            <button
              type='button'
              onClick={() => handleMenu(false)}
              className='p-3 md:hidden cursor-pointer'>
              {!isOpen ? open : notOpen}
            </button>

            {links.map((link) => {

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setisOpen(false)}
                  className='text-black text-xl  flex flex-col gap-6 w-fit justify-items-center p-2 '>
                    {link.title}
                </Link>
              )
            })}


          </div>}

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
      <div className='lg:hidden '>
        <a href="/Denzel_Mwangi_CV.pdf"
          download
          className="bg-blue-500 text-white text-lg md:text-base p-2 md:px-4 md:py-2 md:rounded hover:bg-blue-600 flex gap-2 items-center"><Download />
          <span className='hidden md:block not-italic '>Resume</span>
        </a>
      </div>
    </div>
  );
}
