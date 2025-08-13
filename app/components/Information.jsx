import { randomInformation } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Information = () => {
    return (
        <div className='flex px-30 flex-col gap-2 mt-20 max-[1000px]:px-4'>
            <div className='grid grid-cols-auto gap-10'>
                {randomInformation.map(({title, description, icon}, index)=>(
                    <div key={index} className='p-8 flex items-center gap-2 max-[500px]:p-4 max-[500px]:bg-gray-100 max-[500px]:rounded-2xl'>
                        <Image src={icon} alt='' className='w-12'/>
                        <div>
                            <h3 className='font-Montserrat text-xl font-medium'>{title}</h3>
                            <span className='font-Opensans text-gray-600'>{description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Information
