import { Briefcase, CodeXml, Contact, FolderOpen, GraduationCap, LayoutDashboard } from 'lucide-react'
import React from 'react'

export default function sideBar() {
  return (
    <div className='p-4 w-58 border-r border-blue-500 h-full'>
        <div className='flex  flex-col gap-2 text-base font-medium text-gray-700'>
        <a href="#" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><LayoutDashboard size={25} className='hover:text-blue-500' />Dashboard</a>
        <a href="#" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><CodeXml size={25} className='hover:text-blue-500' />Skills</a>
        <a href="#" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><FolderOpen size={25} className='hover:text-blue-500' />Projects</a>
        <a href="#" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><Briefcase size={25} className='hover:text-blue-500' />Experience</a>
        <a href="#" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><GraduationCap size={25} className='hover:text-blue-500' />Education</a>
        <a href="#" className='flex gap-2 items-center hover:transalte-x-1 hover:bg-blue-200 ml-6 p-4 hover:text-black rounded-sm'><Contact size={25} className='hover:text-blue-500' />Contact</a>
        {/* <a href="#" className='flex'>Dashboard</a> */}
        </div>
    </div> 
    
  )
}
