import InView from '@/app/components/Animation/InView';
import Slide from '@/app/components/Animation/Slide';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Hero />
            <Content />
            <FeedBack />
        </div>
    )
}
export default page
const Hero = () => {
    return (
        <div className='p-32 flex-col text-xl bg-[#E4F1FF] flex justify-center items-center gap-10'>
            <InView className='font-semibold'>About our company</InView>
            <InView delay={0.2} className='font-semibold text-center text-6xl'>
                Our Services
            </InView>
            <InView delay={0.4} className='text-center w-1/2 text-gray-600'>
                Our team of experts who have been in the profession for years focuses on helping you achieve optimal technical surface.
            </InView>
        </div>
    )
}
const Content = () => {
    const cards = [{
        icon: <AiOutlineReload />,
        title: "Energy & Renewables",
        description: "Real time problems solving is not just about time, it’s about time. This allows you to solve within a specified time problem."
    }, {
        icon: <AiOutlineReload />,
        title: "Industry & Automation",
        description: "In today's rapidly evolving world, industries are witnessing a transformative shift, thanks to automation technologies."
    }, {
        icon: <AiOutlineReload />,
        title: "Building Installations",
        description: "Building installation is not only about functionality but also sustainability. Modern installations focus on energy efficiency."
    }, {
        icon: <AiOutlineReload />,
        title: "Cybersecurity Services",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin egestas habitasse a sem vel dapibus nulla."
    }, {
        icon: <AiOutlineReload />,
        title: "Cloud Computing Solutions",
        description: "Real time problems solving is not just about time, it’s about time. This allows you to solve within a specified time problem.."
    }, {
        icon: <AiOutlineReload />,
        title: "Network Solutions",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin egestas habitasse a sem vel dapibus nulla."
    }]
    return (
        <div className='p-32 space-y-6'>
            <InView className="text-xl">What we provide</InView>
            <InView delay={0.2} className="flex gap-10">
                <p className="flex-1 text-4xl font-semibold">We provide the best technical services</p>
                <p className="flex-1 text-gray-500">Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and continue by example.</p>
            </InView>
            <InView type='FADE' delay={0.4} className='grid md:grid-cols-3 grid-cols-1 gap-5 justify-center'>
                {cards.map((card, index) => (
                    <ServiceCard key={index} {...card} />
                ))}
            </InView>
        </div>
    )
}
type ServiceCardProps = {
    icon: ReactNode,
    title: string,
    description: string
}
const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className='min-w-[320px] shadow-md p-4 rounded-md bg-white space-y-5'>
            <div className='inline-flex p-2 rounded-full text-techPro bg-gray-100'>
                {icon}
            </div>
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-sm text-gray-400'>{description}</p>
            <Link href={'#'} className=' font-semibold hover:text-techPro' >Learn More</Link>
        </div>
    )
}
const FeedBack = () => {
    return(
        <div className='p-32 space-y-10'>
            <div className='space-y-5'>
                <InView className='text-center'>Testimonials</InView>
                <InView delay={0.2} className='text-center text-4xl w-1/2 mx-auto font-semibold'>Kind words from customers around the world</InView>
                <InView delay={0.4} type='FADE' className='overflow-hidden bg-gray-100'>
                    <Slide duration={40} className=''>
                        <div className='flex min-w-fit gap-10 py-6 '>
                            <FeedbackCard />
                            <FeedbackCard />
                            <FeedbackCard />
                            <FeedbackCard />
                            <FeedbackCard />
                            <FeedbackCard />
                        </div>
                    </Slide>
                </InView>
            </div>
        </div>
    )
}
    const FeedbackCard = () => {
        return (
            <div className='p-6 w-[450px] bg-white rounded-md space-y-6'>
                <div className='flex gap-1 text-yellow-500'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </div>
                <p className='text-gray-500'>I recently had a major building installation project, and I could not have asked for a better partner than [Company Name]. Their attention to detail in electrical and plumbing systems ensured my new space is not only functional but also efficient.</p>
                <div>
                    <div>
                        avatar
                    </div>
                    <div>
                        <p className='font-semibold'>John D</p>
                        <p>Homeowner</p>
                    </div>
                </div>
            </div>
        )
    }