import QuickAccessCards from '@/components/ui/quickAccessCards'
import { Briefcase, CodeXml, FolderOpen, GraduationCap } from 'lucide-react'
import React from 'react'

export default function quickAcces() {
  return (
    <div className='text-gray-600 mr-5'>
        <div className='flex justify-between mb-3 items-center w-full p-2 text-lg'>
            <h1>Quick Access</h1>
            <p>Click Card To Navigate</p>
        </div>
        <div className='grid grid-cols-4 gap-8 items-center w-full p-2 text-xl ml-3'>
            <QuickAccessCards 
                href='./projects'
                title='Projects'
                count='3+'
                description='View my Featured Projects'
                icon={FolderOpen}
            />

            <QuickAccessCards 
                href='./skills'
                title='Skills'
                count='3+'
                description='View my Skills and Expertise'
                icon={CodeXml}
            />

            <QuickAccessCards 
                href='./experience'
                title='Experience'
                count='3+'
                countDescription='years'
                description='View my Work Experience'
                icon={Briefcase}
            />
            
            <QuickAccessCards 
                href='./education'
                title='Certificates'
                count='3+'
                countDescription='certs'
                description='View my Certifications'
                icon={GraduationCap}
            />
        </div>
    </div>
  )
}
