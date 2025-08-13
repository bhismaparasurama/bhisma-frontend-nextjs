import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20 flex justify-center flex-col gap-10 items-center bg-bg-white p-8'>
            <a href="" className='text-4xl font-Montserrat font-medium text-black'>
                Bhisma <span className='text-orange-500'>.</span>
            </a>
            <ul className='flex items-center gap-10 max-[500px]:gap-4 max-[500px]:flex-wrap max-[500px]:justify-center'>
                <li><a href="#" className='font-Opensans'>Home</a></li>
                <li><a href="#about" className='font-Opensans'>About</a></li>
                <li><a href="#experience" className='font-Opensans'>My Experience</a></li>
                <li><a href="#journey" className='font-Opensans'>Journey</a></li>
                <li><a href="#contact" className='font-Opensans'>Contact</a></li>
                <li><a href="#blog" className='font-Opensans'>Blog</a></li>
            </ul>
            <div>
                <h1 className='font-Opensans text-xl text-gray-600 text-center'>© 2025 Putu Bhisma Parasurama. <span className='text-orange-500'>All rights reserved.</span></h1>
            </div>
        </div>
    )
}

export default Footer
