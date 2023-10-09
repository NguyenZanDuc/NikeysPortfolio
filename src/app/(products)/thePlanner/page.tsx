import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlideImage from './components/SlideImage'
import SlideCommnet from './components/SlideCommennt'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { NavBar } from './components/NavBar'
import { Content } from './components/Content'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full bg-slate-50 scroll-smooth'>
            <NavBar />
            <Hero />
            <Service />
            <Content />
            <Comment />
            <Contact />
            <Footer />
        </div>
    )
}

export default page


const Hero = () => {
    return (
        <div className='relative'>
            <SlideImage />
            <div className='w-[80%] md:h-[400px] bg-white z-10 absolute top-full right-1/2 flex gap-10  -translate-y-1/4 translate-x-1/2 md:p-16 p-4'>
                <div className='flex-1 md:flex hidden justify-center items-center'>
                    <p className='text-5xl w-[90%] text-center font-inconsolata font-light text-[#333333]'>Tasteful, distinctive and unforgettable wedding and events</p>
                </div>
                <div className='flex-1 space-y-8'>
                    <p className='text-md'>Là một trong những wedding planner cao cấp và chuyên nghiệp nhất tại Việt Nam, The Planners cung cấp dịch vụ tư vấn, lập kế hoạch, thiết kế và tổ chức lễ cưới trọn gói tới các khách hàng trong nước và quốc tế tại nhiều địa điểm xuyên suốt Việt Nam.
                        <span className='md:inline hidden'>Với dịch vụ cao cấp thiết kế dựa trên yêu cầu cụ thể của từng khách hàng, mỗi đám cưới do The Planners tổ chức luôn đẹp, độc đáo và đáng nhớ không chỉ với các cặp đôi mà còn để lại ấn tượng sâu sắc với các khách mời.
                        </span>
                    </p>
                    <button className='rounded-sm text-white hover:scale-105 px-3 py-2 relative bg-thePlanner group w-[140px]  hover:w-[150px] duration-300 overflow-hidden flex justify-start items-center '>
                        <p className='flex-1'> TALK TO US</p>
                        <AiOutlineArrowRight />
                        <div className='h-full z-10 w-[30px] absolute top-0 bg-thePlanner group-hover:w-0 duration-1000 right-0'></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Service = () => {
    return (
        <div className='md:h-[600px]  bg-thePlannerBackground w-full md:pt-[320px] pt-[250px]'>
            <div className='md:space-y-10 space-y-5'>
                <p className='text-center text-xl'>| DỊCH VỤ |</p>
                <p className='w-[70%] mx-auto text-center text-md'>Các dịch vụ của The Planners được thiết kế dựa trên yêu cầu cụ thể của từng khách hàng. Chúng tôi biết rằng mỗi đám cưới là riêng biệt và điều mà các khách hàng mong đợi từ The Planners là sự hỗ trợ chuyên nghiệp, chi tiết với yêu cầu cá nhân hoá cao.</p>
                <div className='flex justify-center md:gap-20 gap-5 pb-5 divide-x-2 md:text-5xl text-sm'>
                    <p className='md:w-[300px] text-center cursor-pointer'>Wedding Planning</p>
                    <p className='md:w-[300px] text-center cursor-pointer'>Destination Wedding</p>
                    <p className='md:w-[300px] text-center cursor-pointer'>Styling & Decoration</p>
                </div>
            </div>
        </div>
    )
}



const Comment = () => {
    return (
        <div className='w-screen space-y-10 py-10 mb-10 shadow-sm bg-thePlannerBackground'>
            <p className='text-center'>| PRESS & PRAISE |</p>
            <SlideCommnet />
            <div className='w-full justify-center items-center flex gap-8'>
                <button className='px-3 py-2 rounded-sm border-[1px] border-thePlanner text-thePlanner '>VIEW PRESS</button>
                <button className='px-3 py-2 rounded-sm text-white bg-thePlanner'>VIEW PRAISE</button>
            </div>
        </div>
    )
}
const Contact = () => {
    return (
        <div className='w-screen relative'>
            <Image src='https://theplannersvn.com/wp-content/uploads/2022/02/TU-NGUYEN-DESTINATION-WEDDING-PHU-QUOC-FRANKY-SEAN-07163905-2.jpg'
                style={{ width: '100%', height: "570px", objectFit: 'cover' }}
                className='shadow-sm'
                alt='logo' width={1000} height={1000} />
            <div className='md:w-[60%] w-[90%] absolute top-full -translate-y-1/3 left-1/2 -translate-x-1/2  md:py-14 md:px-28 py-4 px-4 bg-thePlannerBackground shadow-sm flex flex-col justify-center items-center gap-6'>
                <p className='font-serif text-center text-5xl'>Looking</p>
                <p className='md:text-3xl text-center'>for a professional team to take care ofyour wedding?</p>
                <button className='rounded-sm text-white hover:scale-105 px-3 py-2 relative bg-thePlanner group w-[140px]  hover:w-[150px] duration-300 overflow-hidden flex justify-start items-center '>
                    <p className='flex-1'> CONTACT US</p>
                    <AiOutlineArrowRight />
                    <div className='h-full z-10 w-[30px] absolute top-0 bg-thePlanner group-hover:w-0 duration-1000 right-0'></div>
                </button>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div id='footer' className='w-screen flex md:px-14 px-4  md:py-10 py-4 justify-between mt-64 text-sm bg-thePlannerBackground'>
            <Link className='' href="/" >
                <Image src="/mainlogo-tp-01.svg" alt="logo" width={200} height={200} />
            </Link>
            <div className='md:inline hidden font-light'>
                <div>logo social</div>
                <p>+84 123 456 789</p>
                <p>develop@nikeys.com</p>
                <p>Hanoi: 2nd floor, 1C Dang Thai Than, Hoan Kiem.</p>
            </div>
            <div className='md:inline hidden'>
                <p className='font-semibold'>ABOUT</p>
                <p className='font-semibold'>OUR WORKS</p>
                <p>Wedding Works</p>
                <p>Styling & Decoration</p>
            </div>
            <div className='md:inline hidden'>
                <p className='font-semibold'>OUR SERVICES</p>
                <p>Wedding Planning</p>
                <p>Destination Wedding</p>
                <p>Styling & Decoration</p>
            </div>
            <div>
                <p className='font-semibold'>PRESS & PRAISE</p>
                <p className='font-semibold'>BLOG</p>
                <p className='font-semibold'>CONTACT</p>
                <p className='font-semibold'>FAQ</p>
            </div>
        </div>
    )
}