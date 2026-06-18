import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from 'react-icons/fa'
import { FaCss } from 'react-icons/fa6'

const socialLinks = [

    { id: '1', href: 'https://github.com/WachiraMwangiDenzel/LofftyPixel', icon: FaGithub, title: 'Github' },
    { id: '2', href: 'ttps://linkedin.com/in/denzel-mwangi', icon: FaLinkedin, title: 'LinkedIn' },
    { id: '3', href: 'https://twitter.com/DenzelMwangi', icon: FaTwitter, title: 'Twiter' }
];

const skillIcon = [
    { id: "1", icon: FaHtml5, title: "HTML5" },
    { id: "2", icon: FaCss, title: "CSS3" },
    { id: "3", icon: FaNodeJs, title: "JavaScript ES6+" },
    { id: "4", icon: FaReact, title: "React" }
];

export default function intro() {
    return (
        <div className=' md:ml-4 mt-20 flex flex-col md:flex-row mb-6 w-full'>
            <div className='flex flex-col gap-4 md:w-70 w-full items-center'>
                <Image src="/Potrait.jpg" alt="Hi There! Image Still Loading...."
                    width={200} height={200}
                    priority
                    className=' w-65 h-65 rounded-lg mt-6'
                />

                <div className='flex gap-4 text-lg text-black items-center justify-center-safe'>

                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='bg-white text-gray-700 border border-dashed border-gray-700 rounded-lg p-1 hover:text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 '>
                                <Icon size={30} />
                            </a>
                        )
                    })}
                </div>

            </div>
            <div className='flex flex-col flex-1 text-black p-6 max-w-250 '>
                <div className='flex flex-col md:flex-row justify-between w-full mb-4 '>
                    <div className=' flex flex-col md:flex-row gap-2 items-center text-center '>
                        <h1 className='text-3xl font-black text-blue-700'> Denzel Mwangi </h1>
                        <p className='p-1  border border-dashed border-green-500 text-green-500 rounded-xl text-sm bg-green-100'>Open to New Front-end Roles | Hire </p>
                    </div>
                    <a href="/Denzel_Mwangi_CV.pdf" 
                    download 
                    className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex gap-2 items-center"><Download />
                        Download Resume
                    </a>
                </div>
                <div className='flex w-full '>
                    <p className='text-center text-xl text-green-500 font-semibold mb-4 ml-2'>
                        Web Developer |
                        <br/><span>
                            Basic Computer Operation Tutor
                        </span> 
                    </p>
                </div>
                <div>
                    <p className='flex text-center text-lg md:text-xl text-gray-700 w-full md:w-200'>
                        I’m a Front-End Developer focused on building clean, responsive, and user-friendly web experiences. I enjoy turning ideas into interactive interfaces using modern technologies, and I’m constantly learning to improve my craft. <span className='md:block hidden'>My goal is to create designs that not only look good but also solve real-world problems efficiently.</span>
                    </p>
                    <div className='md:block hidden flex gap-2 mt-4 flex-wrap'>
                        {skillIcon.map((skill) => {
                            const Icon = skill.icon;

                            return (

                                <p key={skill.id} className='flex gap-2 text-gray-700 p-1.5 bg-white border border-dashed text-lg hover:bg-blue-500 hover:text-white transition-colors duration-300'>

                                    < Icon size={25} />

                                    {skill.title}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>

    )
}

