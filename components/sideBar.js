import { CodeXml, Contact, FolderOpen, LayoutDashboard } from 'lucide-react'
import React from 'react'

export default function sideBar() {
  return (
    <div>
        <div className='flex flex-col '>
        <a href="#" className='flex'><LayoutDashboard/>Dashboard</a>
        <a href="#" className='flex'><CodeXml />Skills</a>
        <a href="#" className='flex'><FolderOpen />Projects</a>
        <a href="#" className='flex'><Contact />Contact</a>
        {/* <a href="#" className='flex'>Dashboard</a> */}
        </div>
    </div>
    
  )
}
