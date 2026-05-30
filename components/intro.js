import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from 'react-icons/fa'
import { FaCss } from 'react-icons/fa6'

export default function intro() {
  return (
    <div className=' ml-4 mt-4 flex flex-row mb-2'>
        <div className='flex flex-col gap-4 w-70'>
            <Image src="/Potrait.jpg" alt="Hi There! Image Still Loading...." width={200} height={200} className=' w-65 h-65 rounded-lg mt-6' />
        
        <div className='flex gap-4 text-lg text-black items-center justify-center-safe'>
        <a href="https://github.com/WachiraMwangiDenzel/LofftyPixel" target="_blank" rel="noopener noreferrer" className='bg-white text-gray-700 border border-dashed border-gray-700 rounded-lg p-1 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 '>
            <FaGithub size={30}/>
            </a>
        <a href="https://twitter.com/DenzelMwangi" target="_blank" rel="noopener noreferrer" className='bg-white text-gray-700 border border-dashed border-gray-700 rounded-lg p-1 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300'>
            <FaTwitter size={30} />
        </a>
        <a href="https://www.linkedin.com/in/denzel-mwangi" target="_blank" rel="noopener noreferrer" className='bg-white text-gray-700 border border-dashed border-gray-700 rounded-lg p-1 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300'>
            <FaLinkedin size={30}/>
        </a>
        </div>

        </div>
        <div className='flex flex-col flex-1 text-black p-6 max-w-250 '>
            <div className='flex justify-between w-full mb-2 '>
                <div className=' flex gap-2 items-center text-center '>
                 <h1 className='text-3xl font-black text-blue-700'> Denzel </h1>
                <p className='p-1  border border-dashed border-green-500 text-green-500 rounded-xl text-sm bg-green-100'>Open to New Front-end Roles | Hire </p>
                </div>
                <a href="/Denzel_Mwangi_CV.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex gap-2 items-center"><Download />
                    Download Resume
                </a>  
            </div>
            <div>
                <p className='text-base text-green-500 font-semibold mb-2 ml-2'>
                    Web Developer | Basic Computer Operation Tutor 
                </p>
            </div>
            <div>
                <p className='text-xl text-gray-700 w-200'>
                I’m a Front-End Developer focused on building clean, responsive, and user-friendly web experiences. I enjoy turning ideas into interactive interfaces using modern technologies, and I’m constantly learning to improve my craft. My goal is to create designs that not only look good but also solve real-world problems efficiently.
                </p> 
                <div className='flex gap-2 mt-4'>
                    <p className='bg-white border-dashed gap-1 flex rounded-lg p-1 border border-grey-700 text-gray-700  hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300'>
                        <FaHtml5 size={20} />HTML5
                    </p>
                    <p className='bg-white border-dashed gap-1 flex rounded-lg p-1 border border-grey-700 text-gray-700 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300'>
                        <FaCss size={20} />CSS3
                    </p>
                    <p className='bg-white border-dashed gap-1 flex rounded-lg p-1 border border-grey-700 text-gray-700 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300'>
                        <FaNodeJs size={20} />JavaScript ES6+
                    </p>
                    <p className='bg-white border-dashed gap-1 flex rounded-lg p-1 border border-grey-700 text-gray-700 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300'>
                        <FaReact size={20} />React
                    </p>
                    <p className='bg-white border-dashed gap-1 flex rounded-lg p-1 border border-grey-700 text-gray-700 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300'>
                        <FaReact size={20} />Next.js
                    </p>
                </div>
            </div>
        </div>
        
    </div>

  )
}
