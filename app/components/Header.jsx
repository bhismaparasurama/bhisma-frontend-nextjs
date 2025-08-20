// import { assets, randomInformation } from '@/assets/assets'
// import Image from 'next/image'
// import React, { use, useEffect, useState } from 'react'

const Header = () => {
    return (
        <div className='h-screen bg-bg-white pt-[82px] relative w-full flex justify-center items-center flex-col px-30 z-10 max-[1000px]:justify-start max-[1000px]:pt-50 max-[1000px]:gap-8 max-[1000px]:px-4 max-[1000px]:h-dvh'>
            <video className='absolute top-0 left-0 w-full h-full object-cover' 
            autoPlay loop muted playsInline
            src="/assets/background_profile.mp4" type="video/mp4">
            </video>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
            <div className='flex items-center w-full justify-between max-[500px]:flex-col z-10'>
                <div className='w-96 max-[500px]:flex max-[500px]:flex-col max-[500px]:items-center max-[500px]:w-full'>
                    <h3 className='text-orange-500 font-Montserrat font-medium tracking-wide text-4xl max-[1000px]:text-2xl'>1 Agustus 2025</h3>
                    <p className='text-white/60 font-Opensans text-xl max-[1000px]:text-base max-[500px]:text-center'>Don't be lazy because it is a parasite of life that will destroy your life.</p>
                    <span className='font-bold font-Opensans text-xl max-[1000px]:text-base text-white'>Putu Sinta Pridiantini</span>
                </div>
                <div className='max-[500px]:hidden'>
                    <h3 className='text-orange-500 font-Montserrat font-medium tracking-wide text-4xl max-[1000px]:text-2xl text-right'>3 years</h3>
                    <p className='text-white font-Opensans text-xl max-[1000px]:text-base text-right'>Expreiences</p>
                </div>
            </div>
            <div className='z-10'>
                <h1 className='text-[16rem] font-Montserrat font-bold text-orange-500 max-[1630px]:text-[14rem] max-[1445px]:text-[10rem] max-[1050px]:text-[5rem] max-[1000px]:text-4xl'>PORTFOLIO</h1>
            </div>
            <div className='flex items-center w-full justify-between z-10'>
                <div>
                    <h1 className='text-orange-500 font-Montserrat font-medium tracking-wide text-4xl max-[1000px]:text-2xl'>Frontend</h1>
                    <span className='text-white font-Opensans text-xl max-[1000px]:text-base'>Developer</span>
                </div>
                <div>
                    <h1 className='text-orange-500 font-Montserrat font-medium tracking-wide text-4xl max-[1000px]:text-2xl text-right'>Putu</h1>
                    <span className='text-white font-Opensans text-xl max-[1000px]:text-base text-right'>Bhisma Parasurama</span>
                </div>
            </div>
            <a href="/my-resume.pdf" download className="py-3 px-6 rounded-full bg-orange-500 text-white absolute bottom-10 flex items-center gap-2 font-Montserrat">
                <i className='bx  bx-arrow-to-bottom-stroke'></i>
                My Resume
            </a>
        </div>
    )
}

export default Header
