"use client";
import React from 'react'
import Image from 'next/image';

const projects = [
    { id: 1, image: '/Originator.jpg', name: 'End Originator', category: 'Web Development', technology: 'Html5, CSS3' },
    { id: 2, image: '/Zebu.jpg', name: 'Zebu Closet', category: 'Mobile Application', technology: 'React Native' },
    { id: 3, image: '/Zebu.jpg', name: 'Zebu Closet', category: 'Mobile Application', technology: 'React Native' },
];
export default function ProjectSection() {
    return (
        <div className='text-gray-700 mb-8 mx-5  '>
            <h1 className='text-xl font-normal mb-6'>Projects </h1>

            <div className='bg-white w-full m-4 border border-dashed'>
                <table className=' border-separate border-spacing-y-2 w-full p-6'>
                    <thead className='text-gray-700 border border-dashed border-gray-500 items-center '>
                        <tr className='bg-blue-200 h-10 m-2 border'>
                            <th className='border-y border-dashed border-black text-left first:pl-6'>Name</th>
                            <th className='border-y border-dashed border-black text-center'>Category</th>
                            <th className='border-y border-dashed border-black text-center'>Technology</th>
                            <th className='border-y border-dashed border-black text-right last:pr-6'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        {projects.map((project) => (
                            <tr key={project.id} className='bg-gray-200 border h-16 items-center'>
                                <td className='flex justify-start items-center gap-4 p-2 first:pl-6'>
                                    <div className='p-2 bg-white border border-dashed'>
                                        <Image src={project.image}
                                            width={30} height={30}
                                            alt='Icon'
                                            priority
                                            className='w-auto h-auto' />
                                    </div>
                                    <p className='text-black text-lg '> {project.name}</p>

                                </td>
                                {/*   */}
                                <td className='text-center'>{project.category} </td>
                                <td className='text-center'>{project.technology} </td>
                                <td className='text-right last:pr-6'>
                                    <a href="#" className="p-2 border border-dashed border-gray-600 text-black hover:bg-blue-500    transition-all transition-duration-350 hover:border-blue-500 hover:shdow-lg hover:-translate-y-1">View Details</a>
                                </td>
                            </tr>
                        ))}
                       
                    </tbody>
                            
                </table>

                    <div className='flex justify-center my-6'>
                        <a href="#" className="p-2 border border-dashed border-gray-600 text-black hover:bg-blue-500 transition-all transition-duration-350 hover:border-blue-500 hover:shdow-lg hover:-translate-y-1">View All Projects</a>
                    </div>
            </div>

        </div>
    )
}
