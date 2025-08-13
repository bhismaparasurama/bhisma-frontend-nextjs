import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenu = useRef();

    const openMenu = () => {
        sideMenu.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenu.current.style.transform = 'translateX(16rem)';
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else {
                setIsScroll(false)
            }
        })
    })

    return (
        <nav className={`w-full fixed top-0 right-0 left-0 px-30 py-4 flex items-center justify-between z-50 max-[1000px]:px-4 transition duration-300 ${isScroll ? "bg-white shadow-sm " : ""}`}>
            <a href="" className={`text-4xl font-Montserrat font-medium ${isScroll ? "text-black" : "text-white"}`}>
                Bhisma <span className='text-orange-500'>.</span>
            </a>

            <ul className='flex items-center gap-10 max-[1024px]:hidden'>
                <li><a href="#" className={`font-Opensans ${isScroll ? "text-black" : "text-white"}`}>Home</a></li>
                <li><a href="#about" className={`font-Opensans ${isScroll ? "text-black" : "text-white"}`}>About</a></li>
                <li><a href="#experience" className={`font-Opensans ${isScroll ? "text-black" : "text-white"}`}>Experience</a></li>
                <li><a href="#journey" className={`font-Opensans ${isScroll ? "text-black" : "text-white"}`}>Journey</a></li>
                <li><a href="#contact" className={`font-Opensans ${isScroll ? "text-black" : "text-white"}`}>Contact</a></li>
                <li><a href="#blog" className={`font-Opensans ${isScroll ? "text-black" : "text-white"}`}>Blog</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <a href="#contact" className={`flex items-center gap-2 border border-orange-500 rounded-full py-3 px-10 font-Opensans max-[1024px]:hidden ${isScroll ? "text-black" : "text-white"}`}>
                    <i className='bx bxs-arrow-up-right-stroke'></i>
                    <span>Contact</span>
                </a>
                <button className='hidden max-[1024px]:flex' onClick={openMenu}>
                    <i className={`bx bxs-menu-right text-3xl ${isScroll ? "text-black" : "text-white"}`}></i> 
                </button>
            </div>

            {/* MOBILE MENU */}
            <ul ref={sideMenu} className='fixed flex-col gap-10 py-20 px-10 -right-64 top-0 bottom-0 h-screen z-50 bg-gray-200 w-64 flex transition duration-500'>
                <button className='absolute top-6 right-6' onClick={closeMenu}>
                    <i className='bx bxs-x text-3xl'></i> 
                </button>

                <li><a href="#" className='font-Opensans'>Home</a></li>
                <li><a href="#about" className='font-Opensans'>About</a></li>
                <li><a href="#experience" className='font-Opensans'>Experience</a></li>
                <li><a href="#journey" className='font-Opensans'>Journey</a></li>
                <li><a href="#contact" className='font-Opensans'>Contact</a></li>
                <li><a href="#blog" className='font-Opensans'>Blog</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
