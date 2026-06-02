import Link from 'next/link'
import { Briefcase, CodeXml, Contact, FolderOpen, GraduationCap, LayoutDashboard } from 'lucide-react'
import React from 'react'

export default function sideBar() {
  return (
    <div className='p-4 w-58  h-full  '>
          <h1>Main</h1>
        <div className='flex  flex-col gap-2 text-base font-medium text-gray-700'>
        <Link href="/" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><LayoutDashboard size={25} className='hover:text-blue-500' />Dashboard</Link>
        <Link href="/skills" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><CodeXml size={25} className='hover:text-blue-500' />Skills</Link>
        <Link href="/projects" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><FolderOpen size={25} className='hover:text-blue-500' />Projects</Link>
        <Link href="/experience" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><Briefcase size={25} className='hover:text-blue-500' />Experience</Link>
        <Link href="/education" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><GraduationCap size={25} className='hover:text-blue-500' />Education</Link>
        <Link href="/contact" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><Contact size={25} className='hover:text-blue-500' />Contact</Link>
        {/* <a href="#" className='flex'>Dashboard</a> */}
        </div>

    </div>
  )
}
