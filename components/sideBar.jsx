import Link from 'next/link'
import { Briefcase, CodeXml, Contact, FolderOpen, GraduationCap, LayoutDashboard, } from 'lucide-react'
import React from 'react'

const links = [
  { id: '1', href: '/', icon: LayoutDashboard, title: 'Dashboard' },
  { id: '2', href: '/skills', icon: CodeXml, title: 'Skills' },
  { id: '3', href: '/projects', icon: FolderOpen, title: 'Projects' },
  { id: '4', href: '/experience', icon: Briefcase, title: 'Experience' },
  { id: '5', href: '/education', icon: GraduationCap, title: 'Education' },
  { id: '6', href: '/contact', icon: Contact, title: 'Contact' }
]

export default function sideBar() {
  return (
    <div className='flex flex-col flex-1 justify-between items-center text-gray-900 pb-4 md:pt-30 lg:pt-24 md:px-2 px-6 w-fit max-w-64 bg-white '>

      {/* Large Viewport */}
      <div className='flex flex-col gap-4 '>
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.id}
              href={link.href}
              className='flex flex-row gap-6 w-fit justify-items-center p-2 '>
              < Icon size={25} />
              <div className='hidden lg:block'>
                {link.title}
              </div>
            </Link>
          )
        })}
      </div>


      {/*  */}
      <div className="hidden lg:block mt-6 p-4 border border-dashed border-gray-400 rounded-lg text-sm">
        <p className="font-semibold text-gray-800">Status</p>

        <p className="text-green-600 mt-1">
          ● Open to Work
        </p>
        <p className="text-gray-600 mt-2">
          Building modern web experiences & improving daily.
        </p>
      </div>

    </div>
  )
}
