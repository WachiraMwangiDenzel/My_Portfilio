
import Link from 'next/link'
import React from 'react'

export default function quickAccessCards({
    href,
    title,
    count,
    countDescription,
    description,
    icon: Icon,
}) {
    return (
        <Link href={href} className='bg-gray-200 flex flex-col-2 gap-4 lg:gap-6 sm:gap-2 md:p-4 lg:p-6 border border-dashed border-gray-300 rounded-xl mt-3 cursor-pointer md:w-fit lg:w-sm items-center shadow:lg hover:-translate-y-1.5 transition duration-300-all '>
            <div className='lg:ml-7 flex flex-col gap-6'>
                <h1>{title}</h1>
                <p className='text-6xl  font-bold'>{count}
                    <i className='text-base font-normal ml-2 not-italic'>{countDescription}</i>
                </p>
                <p className='mt-3 text-sm whitespace-nowrap overflow-hidden'>{description}</p>
            </div>
            <div className='flex items-center p-2 bg-gray-300 rounded-lg shadow-lg hover: rotate-y-3 '>
                <Icon className='lg:w-20 lg:h-20 md:h-12 lg:h-12' />
            </div>
        </Link>
    )
}
