import InView from '@/app/components/Animation/InView'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Hero />
            <Content />
        </div>
    )
}

export default page

const Hero = () => {
    return (
        <div className='w-screen p-32 space-y-10 bg-gradient-to-b from-white to-[#F6F4FF]'>
            <InView>
                <p className='text-7xl font-semibold text-center font-serif text-[#19154E]'>Styleguide</p>
            </InView>
            <InView delay={0.3}>
                <p className='text-center text-xl text-gray-600'>A reference guide for text styles, color palette and shadows.</p>
            </InView>
        </div>
    )
}
const Content = () => {
    return (
        <div className='w-1/2 py-32 mx-auto space-y-4'>
            <InView className='text-xl text-gray-600 font-semibold'>TEXT STYLES</InView>
            {/* note */}
            <InView className='p-5 rounded-lg border-[0.3px] border-gray-400 bg-[#FFFAEA]'>
                <p className='font-semibold'>Note</p>
                <p>Any edits of the Text Styles will apply to all reflective elements across the site.</p>
            </InView>
            <InView className='text-6xl'>Heading 1</InView>
            <InView className='text-5xl'>Heading 2</InView>
            <InView className='text-4xl'>Heading 3</InView>
            <InView className='text-3xl'>Heading 4</InView>
            <InView className='text-2xl'>Heading 5</InView>
            <InView className='text-xl'>Heading 6</InView>
            <InView className='text-xl text-gray-600 font-semibold'>COLORS</InView>
            {/* note */}
            <div className='p-5 rounded-lg border-[0.3px] border-gray-400 bg-[#FFFAEA]'>
                <p className='font-semibold'>Note</p>
                <p>You can change colors in the Shared Colors found in the property panel on the right side of the canvas. When you update a shared color, it will update everywhere on your canvas.</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <ColorCard name='Primary' color='#451397' />
                <ColorCard name='Secondary' color='#FFB800' />
                <ColorCard name='Tertiary' color='#FFFAEA' />
                <ColorCard name='White' color='#FFFFFF' />
                <ColorCard name='Black' color='#000000' />
                <ColorCard name='Gray' color='#C4C4C4' />
            </div>
            <p className='text-xl text-gray-600 font-semibold'>SHADOWS</p>
            {/* note */}
            <div className='p-5 rounded-lg border-[0.3px] border-gray-400 bg-[#FFFAEA]'>
                <p className='font-semibold'>Note</p>
                <p>You can copy one of the Shadow properties by right-clicking on one of the cards, selecting Copy Style, and then pasting it onto a chosen Frame or a Stack.</p>
            </div>
            <div className='shadow-sm rounded-xl font-semibold p-8 text-center border-[0.3px] border-gray-200'>Elevation 1</div>
            <div className='shadow-lg rounded-xl font-semibold p-8 text-center border-[0.3px] border-gray-200'>Elevation 2</div>
            <div className='shadow-2xl rounded-xl font-semibold p-8 text-center border-[0.3px] border-gray-200'>Elevation 3</div>
        </div>
    )
}
type colorCardProps = {
    name: string,
    color: string
}
const ColorCard = ({ name, color }: colorCardProps) => {
    return (
        <div className='aspect-video w-full rounded-xl shadow-xl p-2 flex flex-col justify-end' style={{ backgroundColor: color }}>
            <p>{name}</p>
            <p>{color}</p>
        </div>
    )
}