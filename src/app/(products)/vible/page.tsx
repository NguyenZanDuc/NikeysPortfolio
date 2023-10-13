import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsLightningCharge } from 'react-icons/bs'
import { CiFaceSmile } from 'react-icons/ci'
import { BsKey } from 'react-icons/bs'
import { cn } from '@/app/lib/utils'
import { AiFillStar } from 'react-icons/ai'
import { GrLinkNext } from 'react-icons/gr'
import InView from '../Consuly/components/Animation/InView'
import Slide from '@/app/components/Animation/Slide'
type Props = {}

const page = (props: Props) => {
    return (
        <div className=' w-screen overflow-hidden'>
            <Hero />
            <Content />
            <Contact />
            <More />
        </div>
    )
}

export default page
const Hero = () => {
    return (
        <div className='md:p-32 p-4 w-screen bg-vibleBackground space-y-4 md:space-y-10 text-white'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex-1 flex flex-col justify-center gap-8'>
                    <InView>
                        <p className='font-semibold text-5xl'>Unleash your creativity at our pottery studio</p>
                    </InView>
                    <InView delay={0.2}>
                        <p>Discover the joy of sculpting clay and bring your artistic visions to life at our renowned pottery studio.</p>
                    </InView>
                    <InView delay={0.4}>
                        <Link className='p-4 rounded-full bg-vible text-black hover:bg-opacity-70' href="#">Buy template</Link>
                    </InView>
                </div>
                <InView delay={0.6}  className='flex-1'>
                    <Image src="https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512" alt="Hero" width={748} height={574} style={{ width: "100%", height: "auto" }} />
                </InView>
            </div>
            <Slide>
                    <div className='flex justify-between  md:w-screen min-w-fit gap-5  items-center'>
                        <Image className='scale-50 md:scale-100' src="https://framerusercontent.com/images/STNpRVk6MVMO4xZ6f2wqaYeVJQY.png" alt="Logo" width={110} height={40} />
                        <Image className='scale-50 md:scale-100' src="https://framerusercontent.com/images/XoPuDyH0F8kFTF7di3C0lIJzpLs.png" alt="Logo" width={110} height={50} />
                        <Image className='scale-50 md:scale-100' src="https://framerusercontent.com/images/EyFcmQJhEAdxbDuuc1TWaeAd1zw.png" alt="Logo" width={110} height={50} />
                        <Image className='scale-50 md:scale-100' src="https://framerusercontent.com/images/unoSnUsXAGwda8BGfykssdp3Y.png" alt="Logo" width={110} height={50} />
                        <Image className='scale-50 md:scale-100' src="https://framerusercontent.com/images/t67NomUjS1OdxsfpH85pncnbR0.png" alt="Logo" width={110} height={50} />
                        <Image className='scale-50 md:scale-100' src="https://framerusercontent.com/images/KDwoSBcOIqCXHwxUoA0r0Lzi6Y.png" alt="Logo" width={110} height={50} />
                    </div>
            </Slide>
        </div>
    )
}
const Content = () => {
    const cards = [{
        title: 'Boundless imagination',
        description: 'Timeless art of pottery meets the boundless imagination of passionate artists. Led by our experienced and accomplished artist, Emma Anderson, our studio offers a haven for both beginners and seasoned pottery enthusiasts alike. ',
        image: 'https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512'
    },
    {
        title: 'Transformative experience',
        description: 'We believe that pottery is not just about crafting beautiful objects; it is a transformative experience that allows you to connect with your inner artist.  Whether you are a complete novice or seeking to refine your skills, our studio offers a range of classes and workshops tailored to meet your needs and aspirations.',
        image: 'https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512'
    },
    {
        title: 'Tactile sensation',
        description: 'Immerse yourself in the tactile sensation of working with clay, shaping it into unique pottery pieces that reflect your individuality. From hand-building to wheel throwing, glazing to firing, our expert instructors will guide you through each step, ensuring you gain both technical expertise and artistic insight. ',
        image: 'https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512'
    }]
    return (
        <div>
            <div className='bg-vible md:p-28 p-4 text-xl flex flex-col md:flex-row justify-center gap-4 md:gap-10'>
                <div className='flex  gap-2 items-start flex-1'>
                    <div className='p-2 rounded-full border-[0.3px] border-gray-500'>
                        <BsLightningCharge className="w-5 h-5" />
                    </div>
                    <p>Spacious: Ample room for artistic exploration and creative freedom over your head.</p>
                </div>
                <div className='flex gap-2 items-start flex-1'>
                    <div className='p-2 rounded-full border-[0.3px] border-gray-500'>
                        <CiFaceSmile className="w-5 h-5" />
                    </div>
                    <p>Versatile: Equipped with state-of-the-art tools and materials for diverse pottery techniques.</p>
                </div>
                <div className='flex gap-2 items-start flex-1'>
                    <div className='p-2 rounded-full border-[0.3px] border-gray-500'>
                        <BsKey className="w-5 h-5" />
                    </div>
                    <p>Inspiring: Aesthetic ambiance and supportive community that fuels artistic inspiration.</p>
                </div>
            </div>
            <div className='md:p-28 p-4 space-y-4 md:space-y-10 bg-[#FCF9ED]'>
                {cards.map((card, index) => index % 2 == 0 ? (
                    <InView key={index} delay={index*0.2}>
                        <CardContext  {...card} />
                    </InView>
                ) : (
                    <InView key={index} delay={index*0.2}>
                        <CardContext {...card} className='md:flex-row-reverse' />
                    </InView>
                
                ))}
            </div>
        </div>
    )
}
type CardProps = {
    title: string
    description: string
    image: string
    className?: string
}
const CardContext = ({ title, description, image, className }: CardProps) => {
    return (
        <div className={cn('w-full flex flex-col md:flex-row md:gap-10', className)}>
            <div className='flex-1 md:p-10 p-4'>
                <Image src={image} alt="Image" width={748} height={574} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className='flex-1 flex flex-col justify-center md:gap-8 gap-2 p-10'>
                <p className='text-2xl font-semibold '>{title}</p>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    )
}
const Contact = () => {
    return (
        <div className='bg-[#FCF9ED] '>
            <div className='md:p-32 p-4 flex flex-col justify-center items-center gap-3 md:gap-5'>
                <InView>
                    <p className='text-2xl font-semibold'>Come and express yourself</p>
                </InView>
                <InView delay={0.2} className='md:w-1/3 text-center'>
                    <p >Located in the heart of Riga, we provide a warm and inviting atmosphere that inspires creativity and fosters artistic growth.</p>
                </InView>
                <InView delay={0.4}>
                    <Link className='p-4 rounded-full bg-vible text-black hover:bg-opacity-70' href="#">Contact us</Link>
                </InView>
            </div>
            <div className='w-[90%] mx-auto rounded-md md:py-20 md:px-40 p-4 flex flex-col md:flex-row gap-10 bg-[#E6E6DD]'>
                <div className='basis-1/3'>
                    <Image src="https://framerusercontent.com/images/xGWP5NFdgYSPvpvu9NuCtqEs1d0.jpg?scale-down-to=512" alt="Logo" width={1000} height={1000} style={{ width: "100%", height: "auto" }} className='rounded-full' />
                </div>
                <div className='flex-1 flex-col justify-start flex gap-4'>
                    <InView className='flex'>
                        <AiFillStar className="text-green-600 w-5 h-5" />
                        <AiFillStar className="text-green-600 w-5 h-5" />
                        <AiFillStar className="text-green-600 w-5 h-5" />
                        <AiFillStar className="text-green-600 w-5 h-5" />
                        <AiFillStar className="text-green-600 w-5 h-5" />
                    </InView>
                    <InView delay={0.2}>
                        <p className='text-xl'>I can not express how grateful I am for my experience at Vible. Under the expert guidance of Emma Anderson, I discovered a hidden talent for pottery that I never knew I had. Her patience, knowledge, and genuine passion for the craft made every class a delight.</p>
                    </InView>
                    <InView delay={0.4}>
                        <p className='textsm font-semibold'>Michael Davis</p>
                    </InView>
                </div>
            </div>
        </div>
    )
}
const More = () => {
    return (
        <div className='bg-[#FCF9ED] md:p-28 p-4 text-xl  md:divide-x flex flex-col md:flex-row justify-center gap-10'>
            <InView className='flex  px-6 gap-4 flex-row md:flex-col group items-start'>
                <div className='p-2 rounded-full border-[0.3px] border-gray-500'>
                    <BsLightningCharge className="w-5 h-5" />
                </div>
                <p>Read blog where we share insights, tips, and inspiring stories about the art of clay sculpting and pottery making.</p>
                <GrLinkNext className="group-hover:translate-x-3 duration-300" />
            </InView>
            <InView delay={0.3} className='flex px-6 gap-4 flex-row md:flex-col group items-start'>
                <div className='p-2 rounded-full border-[0.3px] border-gray-500'>
                    <CiFaceSmile className="w-5 h-5" />
                </div>
                <p>Learn the story behind our pottery studio, our passion for the art form, and the vision that drives us to inspire creativity.</p>
                <GrLinkNext className="group-hover:translate-x-3 duration-300" />
            </InView>
            <InView delay={0.6} className='flex px-6 gap-4 flex-row md:flex-col group items-start'>
                <div className='p-2 rounded-full border-[0.3px] border-gray-500'>
                    <BsKey className="w-5 h-5" />
                </div>
                <p>Discover our comprehensive range of pottery services, including classes, workshops, studio rentals, and custom pottery creation.</p>
                <GrLinkNext className="group-hover:translate-x-3 duration-300" />
            </InView>
        </div>
    )
}