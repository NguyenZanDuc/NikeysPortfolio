import InView from '@/app/components/Animation/InView'
import Slide from '@/app/components/Animation/Slide'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'


type Props = {}

const page = (props: Props) => {
    return (
        <div className=''>
            <Hero />
            <Services />
            <About />
            <Blogs />
        </div>
    )
}
export default page

const Hero = () => {
    return (
        <div className='px-32'>
            <div className='flex'>
                <div className='flex-1 space-y-6'>
                    <p> Welcome to TechPro</p>
                    <InView type="RIGHT" className='text-6xl font-semibold'>Leading global technical service provider</InView>
                    <InView type="RIGHT" delay={0.2} className='text-gray-500'>We harness the power of the latest technological to provide you with solutions that propel your business.</InView>
                    <InView delay={0.4} type='FADE' className='flex gap-4'>
                        <Link className='px-4 py-2 bg-techPro text-white rounded-md' href={''}>Get Started</Link>
                        <Link className='px-4 py-2 border-[0.1px] text-black rounded-md' href={''}>Learn More</Link>
                    </InView>
                    <div className='flex divide-x'>
                        <InView delay={0.6} className='px-4 space-y-2'>
                            <p className='text-xl font-semibold'>450+</p>
                            <p className='text-sm text-gray-400'>Collections</p>
                        </InView>
                        <InView delay={0.8} className='px-4 space-y-2'>
                            <p className='text-xl font-semibold'>15+</p>
                            <p className='text-sm text-gray-400'>Customers</p>
                        </InView>
                        <InView delay={1} className='px-4 space-y-2'>
                            <p className='text-xl font-semibold'>4.9+</p>
                            <p className='text-sm text-gray-400'>Review Rating</p>
                        </InView>
                    </div>
                </div>
                <div className='flex-1 p-20 relative'>
                    <InView type='FADE' delay={1} className='rotate-[20deg] relative overflow-hidden -translate-y-12 z-50 '>
                        <Image className='relative z-40 translate-y-20 -rotate-[20deg]' src={'https://framerusercontent.com/images/cG6ARQcLGLjGOFfE0MVUM2w1smQ.png?scale-down-to=512'} alt={''} width={1000} height={1000} style={{ width: "80%", height: "100%" }} />
                    </InView>
                    <div
                        style={{ borderRadius: "50% 50% 10% 12% / 88% 89% 10% 11% " }}
                        className='absolute top-1/4   w-[440px] h-[400px] rotate-[40deg] z-0  left-1/4 bg-[#E4F1FF]' />
                    <InView delay={0.2} type='FADE' >
                        <div
                            style={{ borderRadius: "50% 50% 10% 12% / 88% 89% 10% 11% " }}
                            className='absolute top-1/4  w-[400px] h-[400px] rotate-[20deg] z-10  left-1/4 bg-techPro' />
                    </InView>
                    <InView className='absolute top-1/2 z-50 shadow-sm' type="RIGHT" delay={1.2} >
                        <Image src={"https://framerusercontent.com/images/vMkGnfeFwaUde0sIvinogR4BbtU.png"} alt='' width={200} height={50} />
                    </InView>
                    <div
                        style={{ borderRadius: "50% 50% 10% 12% / 88% 89% 10% 11% " }}
                        className='absolute top-1/4  w-[40px] h-[40px] animate-spin  z-10 opacity-30  left-1/4 bg-techPro' />
                </div>
            </div>
        </div>
    )
}
const Services = () => {
    const cards = [
        {
            icon: <AiOutlineReload />,
            title: "Energy & Renewables",
            description: "Real time problems solving is not just about time, it’s about time. This allows you to solve within a specified time problem."
        },
        {
            icon: <AiOutlineReload />,
            title: "Industry & Automation",
            description: "In today's rapidly evolving world, industries are witnessing a transformative shift, thanks to automation technologies."
        },
        {
            icon: <AiOutlineReload />,
            title: "Building Installations",
            description: "Building installation is not only about functionality but also sustainability. Modern installations focus on energy efficiency."
        },
    ]
    return (
        <div className='bg-gray-100 p-32 space-y-5 '>
            <InView>What we provide</InView>
            <InView delay={0.2} className='flex justify-between'>
                <p className='basis-1/3 font-semibold text-2xl'>We provide the best technical services</p>
                <div>
                    <Link className='text-xl px-4 py-2 rounded-md font-semibold text-white bg-black hover:text-techPro' href={'#'}>All Services</Link>
                </div>
            </InView>
            <InView delay={0.4} className='flex gap-4 justify-center flex-wrap'>
                {cards.map((card, index) => (
                    <ServiceCard key={index} {...card} />
                ))}
            </InView>
        </div>
    )
}
type ServiceCardProps = {
    icon: React.ReactNode,
    title: string,
    description: string
}
const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className='w-[320px] p-4 rounded-md bg-white space-y-5'>
            <div className='inline-flex p-2 rounded-full text-techPro bg-gray-100'>
                {icon}
            </div>
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-sm text-gray-400'>{description}</p>
            <Link href={'#'} className=' font-semibold' >Learn More</Link>
        </div>
    )
}
const About = () => {
    return (
        <div className='p-32 space-y-10'>
            {/* section */}
            <div className='flex gap-10'>
                <div className='flex-1'>
                    <Image src={'https://framerusercontent.com/images/wT4JiFfQetAZm4xaj36qqJ4bB1s.png?scale-down-to=512'} alt={''} width={1000} height={1000} style={{ width: "80%", height: "100%" }} />
                </div>
                <div className='flex-1 space-y-5 text-lg'>
                    <InView >About us</InView>
                    <InView delay={0.2} className='text-3xl font-semibold'>World leading technical company since 1997</InView>
                    <InView delay={0.4} className='text-gray-500'>Our mission was clear - to empower businesses and individuals with cutting-edge technology solutions that would transform the way they operate, communicate, and thrive in the digital age.</InView>
                    <InView delay={0.6} className='flex gap-3'>
                        <div>
                            Icon
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Company details</p>
                            <p className='text-gray-500'>We made our mark by developing pioneering software applications and hardware solutions.</p>
                        </div>
                    </InView>
                    <InView delay={0.8} className='p-2 rounded-md bg-white'>
                        <p className='text-gray-500 '>As our portfolio of services and products expanded, so did our global footprint. We opened offices and established partnerships is key.</p>
                    </InView>
                </div>
            </div>
            {/* section */}
            <div className='flex flex-row-reverse gap-10'>
                <div className='flex-1'>
                    <Image src={'https://framerusercontent.com/images/MnZWH8Y03bsYQwGi3eVE5fymoY.png?scale-down-to=1024'} alt={''} width={1000} height={1000} style={{ width: "80%", height: "100%" }} />
                </div>
                <div className='flex-1 space-y-5 text-lg'>
                    <InView >What we offer</InView>
                    <InView delay={0.2} className='text-3xl font-semibold'>Experience backed by our expertise at your service</InView>
                    <InView delay={0.4} className='text-gray-500'>Throughout our journey, [Company Name] has achieved numerous milestones that reflect our unwavering dedication to technical excellence.</InView>
                    {/* items */}
                    <InView delay={0.6} className='flex gap-3'>
                        <div>
                            Icon
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Highly Rated & Esteemed</p>
                            <p className='text-gray-500'>We have been instrumental in the development and launch of products that have redefined.</p>
                        </div>
                    </InView>
                    <InView delay={0.8} className='flex gap-3'>
                        <div>
                            Icon
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Globally Satisfaction Guarantee</p>
                            <p className='text-gray-500'>Collaborations with industry leaders, research institutions, and visionary startups.</p>
                        </div>
                    </InView>
                </div>
            </div>
            {/* Feedback */}
            <div className='space-y-5'>
                <InView className='text-center'>Testimonials</InView>
                <InView delay={0.2} className='text-center text-4xl w-1/2 mx-auto font-semibold'>Kind words from customers around the world</InView>
                <div className='overflow-hidden bg-gray-100'>
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
                </div>
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
const Blogs = () => {
    return (
        <div className='p-32 space-y-10'>
            <InView>Our Blogs</InView>
            <InView delay={0.2} className='flex gap-20'>
                <p className='flex-1 text-4xl font-semibold '>Lets discover our latest finished project</p>
                <p className='flex-1 text-gray-500'>This endeavor has been a testament to our unwavering commitment to innovation, excellence, and delivering solutions that exceed expectations.</p>
            </InView>
            <InView delay={0.4} className='flex flex-wrap justify-center gap-10'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </InView>
        </div>
    )
}
const BlogCard = () => {
    return (
        <div className='p-6 space-y-6 w-[360px]  rounded-md border-[0.1px] border-gray-400'>
            <div className='w-full aspect-video rounded-md overflow-hidden'>
                <Image src={'https://framerusercontent.com/images/RKzSdJnS8LcfXNwixNzzLnUQ0.png '} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className='flex text-gray-400 justify-between'>
                <p>by Johnson</p>
                <p>Mar 15, 2022</p>
            </div>
            <p className='text-xl font-semibold'>The Significance of User-Centered Design</p>
            <p className='text-gray-400'>It encompassed a wide range of tasks and challenges, requiring a multidisciplinary team of experts to come together and turn vision into reality.</p>
        </div>
    )
}




