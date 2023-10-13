import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div >
            <Hero />
            <Content />
            <Data />
            <Team />
        </div>
    )
}

export default page

const Hero = () => {
    return (
        <div className='w-screen bg-consulyText relative z-10 text-white flex justify-center flex-col gap-5 items-center p-4 md:p-32'>
            <p className='text-6xl font-semibold'>About us</p>
            <p className='md:w-1/2 text-center'>Our collaborative approach fosters strong partnerships with our clients, ensuring that we truly understand your business and its potential.</p>
        </div>
    )
}
const Content = () => {
    return (
        <div className='w-screen md:h-screen flex justify-center items-center flex-col gap-4 md:gap-10'>
            <p className='md:text-6xl text-2xl'>The story behind our agency start</p>
            <div className='w-3/4 rounded-md overflow-hidden hover:cursor-pointer'>
                <Image src={'https://framerusercontent.com/images/w1k2gbmjI5rx00llqj3A84Qja0s.png?scale-down-to=2048'} width={1000} height={1000} style={{ width: "100%", height: "auto" }} alt={''} />
            </div>
            <p className='text-gray-500 text-lg'>Trusted by the most innovative companies worldwide</p>
            <div className='overflow-hidden hidden md:block space-x-8'>
                <Image src={'https://framerusercontent.com/images/QngwOL9EkHo5mkb9pUvySjkcjiA.svg'} alt={''} width={180} height={40} className='inline' />
                <Image src={'https://framerusercontent.com/images/rZ9foHtdta9g39UI8rIejFq4MwE.svg'} alt={''} width={180} height={40} className='inline' />
                <Image src={'https://framerusercontent.com/images/IwK1MVCzxLoQhRUJeiaRWxYmBQI.svg'} alt={''} width={180} height={40} className='inline' />
                <Image src={'https://framerusercontent.com/images/AbRilvd0U23oFQHDd33Zf0ChZU4.svg'} alt={''} width={180} height={40} className='inline' />
                <Image src={'https://framerusercontent.com/images/YNeLjVaLBLFuuUpzLOd3Kn4WYNY.svg'} alt={''} width={180} height={40} className='inline' />
            </div>
        </div>
    )
}
const Data = () => {
    return (
        <div className='md:p-20 p-4 w-screen flex flex-col items-center md:flex-row justify-center gap-6'>
            <CardData />
            <CardData />
            <CardData />
        </div>
    )
}

const CardData = () => {
    return (
        <div className='w-[300px] p-4 space-y-4 shadow-lg rounded-lg'>
            <p className='text-4xl font-semibold'>93%</p>
            <p className='text-2xl font-semibold'>Data accuracy</p>
            <p className='text-gray-400 text-lg'>South African business consulting firm Current Advisory features a slideshow banner made services. </p>
        </div>
    )
}
const Team = () => {
    return (
        <div className='container mx-auto flex flex-col items-center gap-4 md:gap-10 p-4 md:p-10'>
            <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Case Studies</p>
            <p className='md:w-1/4 md:text-5xl text-2xl text-center'>Meet Our Leadership</p>
            <p className='text-gray-400'>We denounce with righteous indignation and dislike men who are so beguiled business cannot foresee the pain and trouble.</p>
            <div className='grid md:grid-cols-4 gap-4 md:gap-10'>
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
            </div>
            <p className='md:text-xl text-gray-500 font-semibold'>Interset About knowing More About Us?  
                <span className='text-consulyText'>  Join Our Team</span>
            </p>
        </div>
    )
}
const CardMember = () => {
    return (
        <div className='md:max-w-[200px] space-y-3 relative overflow-hidden cursor-pointer group'>
            <Image src={'https://framerusercontent.com/images/ByJktErcZwAh3fwR9evD8qcZVC8.jpg?scale-down-to=512'} width={1000} height={1000} style={{ width: "100%", height: "auto", borderRadius: 12 }} alt={''} className='group-hover:opacity-60 duration-300 ' />
            <p className='text-xl text-gray-500'>Esther Howard CEO & Co-Founder</p>
            <div className='absolute top-0 left-0 bg-white z-10 p-2 rounded-r-md space-y-1 -translate-x-full group-hover:translate-x-0 duration-500'>
                <Image src={'https://framerusercontent.com/images/y5naWOGuRnN1XCmSa2AhX70I.svg'} width={30} height={30} alt={''} />
                <Image src={'https://framerusercontent.com/images/DpKVJIfPaUlgqjuNMa2GzsdKY.svg'} width={30} height={30} alt={''} />
                <Image src={'https://framerusercontent.com/images/arA9oHUm1019tdlkUuE4Twx5aw.svg'} width={30} height={30} alt={''} />
            </div>
        </div>
    )
}



