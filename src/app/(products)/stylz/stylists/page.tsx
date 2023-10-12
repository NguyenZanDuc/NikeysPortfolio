
import InView from '@/app/components/Animation/InView'
import React, { } from 'react'
import Content from './components/Content'

type Props = {}

const page = (props: Props) => {

    return (
        <div className=''>
            <Content />
            <div className='p-4'>
                <InView className='bg-[#1D1D1D] flex flex-col justify-center items-center rounded-xl md:p-32 p-4 gap-4 md:gap-8'>
                    <p className='md:text-4xl text-2xl font-bold'>Book an Appointment</p>
                    <p className='text-gray-400 md:w-1/2 text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
                    <button className='p-3 rounded-md bg-white md:text-base text-xs text-black font-bold'>BOOK NOW</button>
                </InView>
            </div>
        </div>
    )
}

export default page
