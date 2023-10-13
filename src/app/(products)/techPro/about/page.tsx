import InView from '@/app/components/Animation/InView'
import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Hero />
            <Misson />
            <Team />
        </div>
    )
}

export default page

const Hero = () => {
    return (
        <div className='md:p-32 p-4 flex-col text-xl bg-[#E4F1FF] flex justify-center items-center md:gap-10 gap-4'>
            <InView className='font-semibold'>About our company</InView>
            <InView delay={0.2} className='font-semibold text-center md:text-6xl text-2xl'>
                Your Trusted TechPro Partner
            </InView>
            <InView delay={0.4} className='text-center md:w-1/2 text-gray-600'>
                Our team of experts who have been in the profession for years focuses on helping you achieve optimal technical surface.
            </InView>
        </div>
    )
}
const Misson = () => {
    return (
        <div className='md:p-32 p-4 space-y-2 md:space-y-6'>
            <InView className="text-xl">Our Mission</InView>
            <InView delay={0.2} className="flex flex-col md:flex-row md:gap-10 gap-2">
                <p className="flex-1 md:text-4xl text-2xl font-semibold">Your happiness is our first priority</p>
                <p className="flex-1 text-gray-500">Lorem ipsum dolor sit amet consectetur. Sed euismod egestas ac ullamcorper vitae platea. Congue augue dignissim turpis tincidunt at. Vulputate sed massa donec rhoncus sed in.</p>
            </InView>
            <div className="flex flex-col md:flex-row gap-5">
                <InView type='FADE' delay={0.4} className="flex-1 ">
                    <Image src="https://framerusercontent.com/images/lYaSMJTSi3uACaj9F5SBhAgT8Q4.png" alt="" width={1000} height={1000} style={{ width: "100%", height: "auto" }} />
                </InView>
                <InView type='FADE' delay={0.4}  className="flex-1">
                    <Image src="https://framerusercontent.com/images/WoXOhOHLIJLTrTX6pgAgrKZ2uA.png" alt="" width={1000} height={1000} style={{ width: "100%", height: "auto" }} />
                </InView>
                <div className="flex-1 space-y-5">
                    {/* items */}
                    <InView delay={0.4} className='flex gap-3'>
                        <div>
                            Icon
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Highly Rated & Esteemed</p>
                            <p className='text-gray-500'>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</p>
                        </div>
                    </InView>
                    <InView delay={0.6} className='flex gap-3'>
                        <div>
                            Icon
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Globally Satisfaction Guarantee</p>
                            <p className='text-gray-500'>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</p>
                        </div>
                    </InView>
                    <InView delay={0.8} className='flex gap-3'>
                        <div>
                            Icon
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold'>Globally Satisfaction Guarantee</p>
                            <p className='text-gray-500'>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</p>
                        </div>
                    </InView>
                </div>
            </div>
        </div>
    )
}
const Team = () => {
    return (
        <div className='md:p-28 p-4 bg-gray-100 space-y-4 md:space-y-10'>
            <InView className="text-center text-xl">Our Team</InView>
            <InView className="text-center md:text-4xl text-2xl font-bold">Meet our creative team</InView>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                {Array(4).fill(0).map((_, i) => 
                    <InView key={i} delay={i*0.2} className='md:flex-1'>
                        <CardMenber />
                    </InView>
                )}
            </div>
            <div className='md:space-y-10 space-y-4'>
                <InView className="font-bold md:text-4xl text-2xl text-center">How we have helped our clients</InView>
                <InView delay={0.2} className="flex gap-1  justify-around">
                    <div>
                        <p className="md:text-4xl font-bold text-[#387CFF] text-center text-2xl">15</p>
                        <p className="text-gray-600 text-xs md:text-base">Years of Experience</p>
                    </div>
                    <div>
                        <p className="md:text-4xl font-bold text-[#387CFF] text-center text-2xl">36k</p>
                        <p className="text-gray-600 text-xs md:text-base">Social Followers</p>
                    </div>
                    <div>
                        <p className="md:text-4xl font-bold text-[#387CFF] text-center text-2xl">428</p>
                        <p className="text-gray-600 text-xs md:text-base">Project Completed</p>
                    </div>
                    <div>
                        <p className="md:text-4xl font-bold text-[#387CFF] text-center text-2xl">92K</p>
                        <p className="text-gray-600 text-xs md:text-base">Social Profiles</p>
                    </div>
                </InView>
            </div>
        </div>
    )
}

const CardMenber = () => {
    return (
        <div className="rounded-md p-4 bg-white md:w-[240px] space-y-2">
            <Image src="https://framerusercontent.com/images/lYaSMJTSi3uACaj9F5SBhAgT8Q4.png" alt="" width={1000} height={1000} style={{ width: "100%", height: "auto" }} />
            <p className="text-center font-semibold">Faye Carson</p>
            <p className="text-center">Instructor</p>
        </div>
    )
}
