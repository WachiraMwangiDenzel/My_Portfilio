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
            {/* sm viewport */}
            <div className="">
                <h1 className='block md:hidden mb-6 border-l-2 border-blue-500 text-xl'>My first projects, showcasing growth and continuous learning. </h1>
            </div>
            {/* md viewport  */}
            <div className="">
                <h1 className='md:block hidden lg:hidden mb-6 border-l-2 border-blue-500 text-xl'>Early projects that reflect my growth, curiosity, and commitment to improvement. </h1>
            </div>
            {/* lg viewport  */}
            <div className="">
                <h1 className='hidden lg:blockmb-6 border-l-2 border-blue-500 hidden lg:block'>
                    THE PROJECTS BELOW REPRESENT THE FOUNDATION OF MY DEVELOPMENT JOURNEY — A COLLECTION OF EARLY WORK THAT REFLECTS MY GROWTH, CURIOSITY, AND COMMITMENT TO IMPROVING WITH EVERY BUILD. DATE: 16 JUNE 2026
                </h1>
            </div>



            <div className='bg-white w-full m-4 border border-dashed'>
                <table className=' border-separate border-spacing-y-2  p-6 md:w-full lg:w-full max-w-screen'>
                    <thead className='text-gray-700 border border-dashed border-gray-500 items-center'>
                        <tr className='bg-blue-200 h-10 m-2 border w-full'>
                            <th className='border-y border-dashed border-black text-left first:pl-6'>Name</th>
                            <th className='hidden md:table-cell border-y border-dashed border-black text-center'>Category</th>
                            <th className='hidden lg:table-cell border-y border-dashed border-black text-center'>Technology</th>
                            <th className='border-y border-dashed border-black text-right md:last:pr-12 last:pr-6'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        {projects.map((project) => (
                            <tr key={project.id} className='bg-gray-200 border h-16 items-center w-full md:w-full'>
                                <td className='flex justify-start items-center gap-4 p-2 first:pl-6'>
                                    <div className='p-2 bg-white border border-dashed'>
                                        <Image src={project.image}
                                            width={30} height={30}
                                            alt='Icon'
                                            priority
                                            className='w-auto h-auto' />
                                    </div>
                                    <p className='text-black text-md md:text-lg '> {project.name}</p>

                                </td>
                                {/*   */}
                                <td className='hidden md:table-cell text-center'>{project.category} </td>
                                <td className='hidden lg:table-cell text-center'>{project.technology} </td>

                                <td className='hidden md:table-cell text-right last:pr-6'>
                                    <a href="#" className="text-sm md:text-base p-2 border border-dashed border-gray-600 text-black hover:bg-blue-500 transition-all transition-duration-350 hover:border-blue-500 hover:shdow-lg hover:-translate-y-1 md:last:mr-6 last:mr-2">View Details</a>
                                </td>
                                <td className='md:hidden table-cell text-right last:pr-6'>
                                    <a href="#" className="text-sm md:text-base p-2 border border-dashed border-gray-600 text-black hover:bg-blue-500 transition-all transition-duration-350 hover:border-blue-500 hover:shdow-lg hover:-translate-y-1 md:last:mr-6 last:mr-2">View </a>
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
