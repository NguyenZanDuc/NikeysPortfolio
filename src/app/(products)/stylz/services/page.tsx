import Image from 'next/image'
import { cn } from '@/app/lib/utils'
import React from 'react'
import Link from 'next/link'
import { IoCut } from 'react-icons/io5'
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
        <div className='p-32 space-y-8'>
            <p className="text-center text-6xl font-bold">Our Services</p>
            <p className="w-1/2 mx-auto text-center">Discover our hair salon is exquisite services, from precision cuts to stunning color transformations. Elevate your style with the expertise of our skilled stylists.</p>
        </div>
    )
}

const Content = () => {
    return (
        <div className='p-6 space-y-6'>
            {/* Why? */}
            <div className="flex gap-6 ">
                <div className="flex-1 p-10 flex bg-[#1D1D1D] flex-col items-center gap-4 justify-center rounded-2xl">
                    <p className='text-5xl font-bold'>Why choose us?</p>
                    <ul className='w-2/3 text-gray-600 list-disc'>
                        <li>Our team of talented stylists is committed to staying at the forefront of industry trends and techniques. </li>
                        <li>We use only the finest professional products to ensure exceptional results. </li>
                        <li>Your comfort and satisfaction are our top priorities, and we create a welcoming, relaxing atmosphere in our salon.</li>
                    </ul>
                </div>
                <div className="flex-1 p-10 flex bg-[#1D1D1D] flex-col items-center gap-4 rounded-2xl">
                    <p className='text-5xl font-bold'>Consultation</p>
                    <p className='text-center text-gray-600 w-2/3'>Personalized consultations with our experienced stylists to discuss your vision and provide expert advice tailored to your unique hair type and lifestyle.</p>
                    <button className='rounded-md font-semibold border border-white p-2'>BOOK AN APPOINTMENT</button>
                </div>
            </div>
            {/* Cuts */}
            <CardContent
                image={'https://framerusercontent.com/images/SMtxKqRO8hf1sq3qIIvL5ogQEBA.jpg'}
                title={'Cuts'}
                description={'Discover the ultimate hair transformation at our salon. Experience expert cuts, tailored styles, and personalized consultations. Your perfect look starts here.'}
                href={'#'}
                linkText={''}
                details={[
                    {
                        icon: <IoCut />,
                        name: 'Signature Cut'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Barbering'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Afro Textured Hair'
                    }
                ]} />
                {/* Colour */}
            <CardContent className='flex-row-reverse'
                image={'https://framerusercontent.com/images/RTqzzB9HXn9H2jubioHv7fLstc.jpg'}
                title={'Colour'}
                description={'Elevate your style with our salon is exquisite hair color services. From vibrant hues to natural tones, we craft stunning, personalized looks that define your beauty.'}
                href={'#'}
                linkText={''}
                details={[
                    {
                        icon: <IoCut />,
                        name: 'Signature Colour'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Signature Balayage'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Signature Highlights'
                    }
                ]} />
            {/* Texture */}
            <CardContent
                image={'https://framerusercontent.com/images/gOfA7F1aXfrPAzuu5OjfXzMQdl0.jpg'}
                title={'Texture'}
                description={'Experience the perfect finish at our salon. Our skilled stylists add the final touch to your hair, ensuring a flawless and polished look for any occasion.'}
                href={'#'}
                linkText={''}
                details={[
                    {
                        icon: <IoCut />,
                        name: 'Perm'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Keratin Smooth'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Relax'
                    }
                ]} />
                {/* Finish */}
            <CardContent className='flex-row-reverse'
                image={'https://framerusercontent.com/images/iS38URvF6qCxOP9ES05y6gQe4Y.jpg'}
                title={'Finish'}
                description={'The finishing touch that completes your style, from blowouts that add volume and shine to updos that make a statement for special occasions.'}
                href={'#'}
                linkText={''}
                details={[
                    {
                        icon: <IoCut />,
                        name: 'Hair Up'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Signature Blow Dry'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Wedding Hair'
                    }
                ]} />
                
                {/* Treatment */}
            <CardContent
                image={'https://framerusercontent.com/images/rcCV04IcPjUliBX3ePTqbZuwv0.jpg'}
                title={'Treatment'}
                description={'The finishing touch that completes your style, from blowouts that add volume and shine to updos that make a statement for special occasions.'}
                href={'#'}
                linkText={''}
                details={[
                    {
                        icon: <IoCut />,
                        name: 'Hairspa Treatment'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Keratin Smoothing'
                    },
                    {
                        icon: <IoCut />,
                        name: 'Damage Control Bonding'
                    }
                ]} />

            {/* Book */}
            <div className='bg-[#1D1D1D] flex flex-col justify-center items-center rounded-xl p-32 gap-8'>
                    <p className='text-4xl font-bold'>Book an Appointment</p>
                    <p className='text-gray-400 w-1/2 text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
                    <button className='p-3 rounded-md bg-white text-black font-bold'>BOOK NOW</button>
            </div>
        </div>
    )
}



const CutIcon = () => {
    return (
        <div className='w-6 h-6 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" color='#fff' xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: '100%', height: "100%" }} viewBox="0 0 36 36" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg846896968_7679"></use></svg>
        </div>
    )
}
type CardContentProps = {
    image: string
    title: string
    description: string
    href: string
    linkText: string
    className?: string
    details: Detail[]
}
type Detail ={
    icon: React.ReactNode
    name: string
}
const CardContent = ({ image, title, description, href, linkText, className, details }: CardContentProps) => {
    return (
        <div className={cn("flex gap-5 h-[600px]", className)}>
            <div className="rounded-2xl flex-1 overflow-hidden">
                <Image
                    src={image}
                    alt={''}
                    width={1000}
                    height={1000}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="rounded-2xl text-gray-300 bg-[#1D1D1D] flex  flex-col flex-1 justify-center items-center gap-6">
                <div className='text-5xl font-semibold text-white'>{title}</div>
                <div className='text-sm text-center w-1/2 '>{description}</div>
                <div className='flex justify-center gap-5'>
                    {details.map((detail, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-2 items-center'>
                                <div className=''>{detail.icon}</div>
                                <div className='text-sm'>{detail.name}</div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}