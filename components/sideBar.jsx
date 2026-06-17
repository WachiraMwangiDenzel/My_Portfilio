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
    <div className='p-4 w-58  h-full flex justify-between flex-col '>
      <div className='flex  flex-col gap-2 text-base font-md mt-4 text-gray-700 '>
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.id}
              href={link.href}
              className='flex gap-2 items-center ml-6 p-4 rounded-sm hover:bg-blue-100 hover:transition-all ease-in-out hover:transalte-x-2 hover:text-black hover:border-l-2 '>

              < Icon size={25} className='hover:text-blue-500 hover:' />
              {link.title}
            </Link>
          )
        })}
      </div>

      {/*  */}
      <div className="mt-6 p-4 border border-dashed border-gray-400 rounded-lg text-sm">
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
