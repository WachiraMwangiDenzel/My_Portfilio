import { Briefcase, CodeXml, FolderOpen, GraduationCap } from 'lucide-react'
import React from 'react'

export default function quickAcces() {
  return (
    <div className='text-gray-600'>
        <a className='flex justify-between mb-3 items-center w-full p-2 text-lg'>
            <h1>Quick Access</h1>
            <p>Click Card To Navigate</p>
        </a>
        <div className='flex gap-8 items-center w-full p-2 text-xl ml-3'>
        <a className='bg-gray-200 flex flex-col-2 gap-15 p-6 border border-dashed border-gray-400 rounded-xl mt-3 cursor-pointer w-fit'>
            <div className='flex flex-col gap-6'>
                <h1>Projects</h1>
                <p className='text-6xl  font-bold'>3+</p>
                <p className='mt-3 text-sm'>View my Featured Projects</p>
            </div>
            <div className='flex items-center'>
                <FolderOpen size={105}/>
            </div>
        </a>
        <a className='bg-gray-200 flex flex-col-2 gap-15 p-6 border border-dashed border-gray-400 rounded-xl mt-3 cursor-pointer w-fit'>
            <div className='flex flex-col gap-6'>
                <h1>Skills</h1>
                <p className='text-6xl  font-bold'>3+</p>
                <p className='mt-3 text-sm'>View my Skills and Expertise</p>
            </div>
            <div className='flex items-center'>
                <CodeXml size={105}/>
            </div>
        </a>
        <a className='bg-gray-200 flex flex-col-2 gap-15 p-6 border border-dashed border-gray-400 rounded-xl mt-3 cursor-pointer w-fit'>
            <div className='flex flex-col gap-6'>
                <h1>Experience</h1>
                <p className='text-6xl  font-bold'>3+ <i className='-ml-3 font-normal text-base not-italic'>years</i></p>
                <p className='mt-3 text-sm'>View my Work Experience</p>
            </div>
            <div className='flex items-center'>
                <Briefcase size={105}/>
            </div>
        </a>
        <a className='bg-gray-200 flex flex-col-2 gap-15 p-6 border border-dashed border-gray-400 rounded-xl mt-3 cursor-pointer w-fit'>
            <div className='flex flex-col gap-6'>
                <h1>Certifications</h1>
                <p className='text-6xl  font-bold'>3+ <i className='-ml-3 font-normal text-base not-italic'>certs</i></p>
                <p className='mt-3 text-sm'>View my Certifications</p>
            </div>
            <div className='flex items-center'>
            <GraduationCap size={105} className='flex-end'/>
            </div>
        </a>
        </div>
    </div>
  )
}
