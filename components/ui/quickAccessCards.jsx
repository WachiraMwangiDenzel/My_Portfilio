import Link from 'next/link'
import React from 'react'

export default function QuickAccessCards({
    href,
    title,
    count,
    countDescription,
    description,
    icon: Icon,
}) {
    return (
        <Link
            href={href}
            className="flex items-center gap-4 p-4 lg:p-6 mt-3 w-full max-w-sm bg-white border border-dashed border-gray-300 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            {/* TEXT */}
            <div className="flex flex-col gap-3">
                <h1 className="text-black text-lg">
                    {title}
                </h1>

                <p className="text-4xl lg:text-6xl font-bold">
                    {count}
                    <span className="ml-2 text-sm font-normal">
                        {countDescription}
                    </span>
                </p>

                <p className="text-sm max-w-[220px]">
                    {description}
                </p>
            </div>

            {/* ICON */}
            <div className="flex items-center justify-center  p-3 bg-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:rotate-3 hover:scale-110">
                <Icon className="w-10 h-10 lg:w-16 lg:h-16" />
            </div>
        </Link>
    )
}