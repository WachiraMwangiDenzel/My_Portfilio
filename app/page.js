import React from 'react'
import Intro from '../components/intro'
import QuickAccess from '../components/quickAcces'
import ProjectSection from '@/components/ProjectSection'

export default function page() {
  return (
    <div className='min-h-full flex-1 flex flex-col scroll-smooth'>
      <main className='overflow-y-auto flex-1 p-4 bg-gray-300'>
        <Intro />
        <div className='w-full border-t border-gray-300 p-1'></div>
        <QuickAccess />
        <ProjectSection/>
      </main>
      </div>
  )
}
