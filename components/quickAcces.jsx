"use client";
import React from 'react'

import QuickAccessCards from '@/components/ui/quickAccessCards'
import { Briefcase, CodeXml, FolderOpen, GraduationCap } from 'lucide-react'

const cards = [
    { id: '1', location: '/projects', title: 'Projects', count: '3+', description: 'View my Featured Projects', icon: FolderOpen },
    { id: '2', location: '/skills', title: 'Skills', count: '3+', description: 'View my Skills and Expertise', icon: CodeXml },
    { id: '3', location: '/experience', title: 'Experience', count: '3+', countDescription: 'years', description: 'View my Work Experience', icon: Briefcase },
    { id: '4', location: '/education', title: 'Certificates', count: '3+', countDescription: 'certs', description: 'View my Certifications', icon: GraduationCap }
]

export default function QuickAcces() {
    return (
        <div className='text-gray-600 mr-5 mb-10 '>

            <div className='flex justify-between mb-3 items-center w-full p-2 text-lg'>
                <h1 className='border-l-2 border-blue-500'>Quick Access</h1>
                <p className='text-sm md:text-lg'>Click Card To Navigate</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  w-full p-2 text-xl ml-3 justify-items-center'>
                {cards.map((card) => (
                    <QuickAccessCards
                        key={card.id}
                        href={card.location}
                        title={card.title}
                        count={card.count}
                        countDescription={card.countDescription}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </div>
        </div>
    )
}
