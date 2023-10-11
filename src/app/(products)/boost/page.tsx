import InView from '@/app/components/Animation/InView'
import Slide from '@/app/components/Animation/Slide'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsBoxSeamFill } from 'react-icons/bs'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="scroll-smooth w-screen overflow-hidden">
            <Hero />
            <Toolkit />
            <Versatitle />
            <Feature />
            <Fraction />
        </div>
    )
}

export default page



const Hero = () => {
    const listPage = [
        { image: "https://framerusercontent.com/images/AG4EVCbjf53t4PEERco7BVNk.webp" },
        { image: "https://framerusercontent.com/images/uxeZbS7Aw7dboHRMkhe7FJNqkI.webp" },
        { image: "https://framerusercontent.com/images/k8mg5nKZA8gU3l3DEFCqFURI1rM.webp" },
        { image: "https://framerusercontent.com/images/PV2r4z12DkCbJVaX7gOawzh3ry0.webp" },
        { image: "https://framerusercontent.com/images/MJhP56AgNxk05j6hn7MfyyuJrA.webp" },
        { image: "https://framerusercontent.com/images/5Vlf0Ezf7vKncSiQpWsqHLXsA.webp" },
        { image: "https://framerusercontent.com/images/k8mg5nKZA8gU3l3DEFCqFURI1rM.webp" },
        { image: "https://framerusercontent.com/images/PV2r4z12DkCbJVaX7gOawzh3ry0.webp" },
        { image: "https://framerusercontent.com/images/MJhP56AgNxk05j6hn7MfyyuJrA.webp" },
        { image: "https://framerusercontent.com/images/5Vlf0Ezf7vKncSiQpWsqHLXsA.webp" },
    ]
    return (
        <div className='flex h-screen px-32  w-screen items-center bg-gradient-to-br from-white to-[#bfb6e7] overflow-hidden'>
            <InView className='flex-1 space-y-5'>
                <p className='font-semibold text-boost '>FREE FRAMER TEMPLATE</p>
                <p className='text-7xl font-semibold w-2/3'>Boost your website.</p>
                <p className='text-gray-500 text-xl w-2/3'>Quickly assemble pages from various categories and customize them to your business is needs.</p>
                <div className='flex gap-2'>
                    <Link href={'#'} className='px-4 py-2 rounded-md bg-boost text-white'>Use Template</Link>
                    <Link href={'#'} className='px-4 py-2 rounded-md bg-white text-black shadow-md'>Explore Pages</Link>
                </div>
            </InView>
            <InView delay={0.2} className='flex-1 flex  flex-wrap justify-center items-start gap-4'>
                {listPage.map((item, index) => {
                    return (
                        <div key={index}>
                            <Image src={item.image} width={240} height={420} alt={''} />
                        </div>
                    )
                })}
            </InView>
        </div>
    )
}
const Toolkit = () => {
    const listCard = [{
        icon: <BsBoxSeamFill />,
        title: '25+ Prebuilt Pages',
        description: 'Choose from 20+ pages from various categories. Customize your page, hit publish and instantly see your site live. ',
        link: 'Explore Pages',
        href: '#'
    },
    {
        icon: <BsBoxSeamFill />,
        title: '25+ Prebuilt Pages',
        description: 'Choose from 20+ pages from various categories. Customize your page, hit publish and instantly see your site live. ',
        link: 'Explore Pages',
        href: '#'
    },
    {
        icon: <BsBoxSeamFill />,
        title: '25+ Prebuilt Pages',
        description: 'Choose from 20+ pages from various categories. Customize your page, hit publish and instantly see your site live. ',
        link: 'Explore Pages',
        href: '#'
    }
    ]
    return (
        <div className='p-32  flex-col flex justify-center items-center gap-5'>
            <InView >
                <p className='text-boost font-semibold'>COMPLETE TOOLKIT</p>
            </InView>
            <InView delay={0.2} className='w-1/2'>
                <p className='text-6xl  text-center'>Building  blocks for your next website.</p>
            </InView>
            <div className='flex justify-center gap-3 p-20'>
                {listCard.map((item, index) => {
                    return (
                        <InView key={index} delay={index * 0.2} >
                            <CardToolkit {...item} />
                        </InView>
                    )
                })}
            </div>
        </div>
    )
}
type CardToolkitProps = {
    icon: React.ReactNode,
    title: string,
    description: string,
    link?: string,
    href?: string
}
const CardToolkit = ({ icon, title, description, link, href }: CardToolkitProps) => {
    return (
        <div className='p-4 space-y-4 rounded-md border-[0.3px] border-gray-300 shadow-md'>
            <div className='p-2 text-boost inline-block rounded-md bg-boostBackground'>{icon}</div>
            <p className='text-xl font-semibold'>{title}</p>
            <p className='textsm text-gray-500'>{description}</p>
            <Link href={href ?? '#'} className='text-sm font-semibold text-boost'>{link}</Link>
        </div>
    )
}
const Versatitle = () => {
    const listPage = [
        { image: "https://framerusercontent.com/images/AG4EVCbjf53t4PEERco7BVNk.webp" },
        { image: "https://framerusercontent.com/images/uxeZbS7Aw7dboHRMkhe7FJNqkI.webp" },
        { image: "https://framerusercontent.com/images/k8mg5nKZA8gU3l3DEFCqFURI1rM.webp" },
        { image: "https://framerusercontent.com/images/PV2r4z12DkCbJVaX7gOawzh3ry0.webp" },
        { image: "https://framerusercontent.com/images/MJhP56AgNxk05j6hn7MfyyuJrA.webp" },
        { image: "https://framerusercontent.com/images/5Vlf0Ezf7vKncSiQpWsqHLXsA.webp" },
        { image: "https://framerusercontent.com/images/k8mg5nKZA8gU3l3DEFCqFURI1rM.webp" },
        { image: "https://framerusercontent.com/images/PV2r4z12DkCbJVaX7gOawzh3ry0.webp" },
        { image: "https://framerusercontent.com/images/MJhP56AgNxk05j6hn7MfyyuJrA.webp" },
        { image: "https://framerusercontent.com/images/5Vlf0Ezf7vKncSiQpWsqHLXsA.webp" },
        { image: "https://framerusercontent.com/images/MJhP56AgNxk05j6hn7MfyyuJrA.webp" },
        { image: "https://framerusercontent.com/images/5Vlf0Ezf7vKncSiQpWsqHLXsA.webp" },
        { image: "https://framerusercontent.com/images/k8mg5nKZA8gU3l3DEFCqFURI1rM.webp" },
        { image: "https://framerusercontent.com/images/PV2r4z12DkCbJVaX7gOawzh3ry0.webp" },
        { image: "https://framerusercontent.com/images/MJhP56AgNxk05j6hn7MfyyuJrA.webp" },
        { image: "https://framerusercontent.com/images/5Vlf0Ezf7vKncSiQpWsqHLXsA.webp" },
    ]
    return (
        <div id='pages' className='flex px-32 h-screen overflow-scroll'>
            <InView className='sticky top-10 flex-1 space-y-5'>
                <p className='font-semibold text-boost '>VERSATILE PAGES</p>
                <p className='text-6xl font-semibold w-2/3'>Complete pages for your project.</p>
                <p className='text-gray-500 w-2/3'>Create beautiful pages within minutes directly in Framer. Easily customize images, content, and style to make it your own.</p>
            </InView>
            <InView delay={0.2} className='flex-1 flex flex-wrap justify-center gap-4'>
                {listPage.map((item, index) => {
                    return (
                        <div key={index}>
                            <Image src={item.image} width={240} height={420} alt={''} />
                        </div>
                    )
                })}
            </InView>
        </div>
    )
}
const Feature = () => {
    const listCard = [{}, {}, {}, {}, {}, {}]
    return (
        <div className='p-32 bg-boostBackground  flex-col flex justify-center items-center gap-5'>
            <InView>
                <p className='text-boost font-semibold'>FEATURES</p>
            </InView>
            <InView delay={0.3} className='w-1/2'>
                <p className='text-6xl  text-center'>Essential features for your next website.</p>
            </InView>
            <InView delay={0.5}>
                <div className='flex justify-center flex-wrap gap-6 p-14'>
                    {listCard.map((item, index) => {
                        return (
                            <CardFeature key={index} {...item} />
                        )
                    })}
                </div>
            </InView>
        </div>
    )
}
const CardFeature = () => {
    return (
        <div className='w-[320px] p-10 flex justify-start gap-6 items-center flex-col h-[260px] rounded-xl shadow-xl bg-white'>
            <div className='inline-block bg-boostBackground p-2 text-boost rounded-md'>
                <BsBoxSeamFill className="w-10 h-10" />
            </div>
            <p className='text-xl font-semibold'>CMS</p>
            <p className='text-center text-sm'>Write, edit and update content across CMS pages.</p>
        </div>
    )
}
const Fraction = () => {
    return (
        <div className='p-28 bg-[#7421FC] text-white  flex-col flex justify-center items-center gap-10'>
            <InView>
                <p className=' font-semibold'>FRACTION TEMPLATE</p>
            </InView>
            <InView delay={0.3} className='w-1/2'>
                <p className='text-6xl  text-center'>Build a website that performs better.</p>
            </InView>
            <InView delay={0.6} className='flex gap-2'>
                <Link href={'#'} className='px-4 py-2 rounded-md bg-white text-black'>Use Template</Link>
                <Link href={'#'} className='px-4 py-2 rounded-md bg-[#3B1080] text-white shadow-md'>Watch Video</Link>
            </InView>
            <InView className='justify-items-start'>
                <Slide duration={40} >
                    <div className='flex min-w-fit flex-nowrap  gap-10 p-5'>
                        <TemplateItem />
                        <TemplateItem />
                        <TemplateItem />
                        <TemplateItem />
                        <TemplateItem />
                        <TemplateItem />
                        <TemplateItem />
                        <TemplateItem />
                        <TemplateItem />
                    </div>
                </Slide>
            </InView>
        </div>
    )
}
const TemplateItem = () => {
    return (
        <div className='px-4  py-2 rounded-full bg-[#651EDD] flex shrink-0 gap-2 items-center'>
            <AiFillCheckCircle />
            <p className='text-white font-semibold '>Optimize for SEO</p>
        </div>
    )
}
