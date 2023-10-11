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
        <div className='p-32 flex-col text-xl bg-[#E4F1FF] flex justify-center items-center gap-10'>
            <InView className='font-semibold'>About our company</InView>
            <InView delay={0.2} className='font-semibold text-center text-6xl'>
                Your Trusted TechPro Partner
            </InView>
            <InView delay={0.4} className='text-center w-1/2 text-gray-600'>
                Our team of experts who have been in the profession for years focuses on helping you achieve optimal technical surface.
            </InView>
        </div>
    )
}
const Misson = () => {
    return (
        <div className='p-32 space-y-6'>
            <InView className="text-xl">Our Mission</InView>
            <InView delay={0.2} className="flex gap-10">
                <p className="flex-1 text-4xl font-semibold">Your happiness is our first priority</p>
                <p className="flex-1 text-gray-500">Lorem ipsum dolor sit amet consectetur. Sed euismod egestas ac ullamcorper vitae platea. Congue augue dignissim turpis tincidunt at. Vulputate sed massa donec rhoncus sed in.</p>
            </InView>
            <div className="flex gap-5">
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
        <div className='p-28 bg-gray-100 space-y-10'>
            <InView className="text-center text-xl">Our Team</InView>
            <InView className="text-center text-4xl font-bold">Meet our creative team</InView>
            <div className='flex flex-wrap justify-center gap-5'>
                {Array(4).fill(0).map((_, i) => 
                    <InView key={i} delay={i*0.2} className='flex-1'>
                        <CardMenber />
                    </InView>
                )}
            </div>
            <div className='space-y-10'>
                <InView className="font-bold text-4xl text-center">How we have helped our clients</InView>
                <InView delay={0.2} className="flex justify-around">
                    <div>
                        <p className="text-4xl font-bold text-[#387CFF] text-center">15</p>
                        <p className="text-gray-600">Years of Experience</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-[#387CFF] text-center">36k</p>
                        <p className="text-gray-600">Social Followers</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-[#387CFF] text-center">428</p>
                        <p className="text-gray-600">Project Completed</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-[#387CFF] text-center">92K</p>
                        <p className="text-gray-600">Social Profiles</p>
                    </div>
                </InView>
            </div>
        </div>
    )
}

const CardMenber = () => {
    return (
        <div className="rounded-md p-4 bg-white w-[240px] space-y-2">
            <Image src="https://framerusercontent.com/images/lYaSMJTSi3uACaj9F5SBhAgT8Q4.png" alt="" width={1000} height={1000} style={{ width: "100%", height: "auto" }} />
            <p className="text-center font-semibold">Faye Carson</p>
            <p className="text-center">Instructor</p>
        </div>
    )
}
