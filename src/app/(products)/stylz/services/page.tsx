
import React from 'react'
import { IoCut } from 'react-icons/io5'
import InView from '@/app/components/Animation/InView'
import CardContent from '../components/Card/CardContent'
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
        <div className='md:p-32 p-4 md:space-y-8 space-y-4'>
            <p className="text-center text-2xl md:text-6xl font-bold">Our Services</p>
            <p className="md:w-1/2 w-3/4 text-sm text-gray-400 mx-auto text-center">Discover our hair salon is exquisite services, from precision cuts to stunning color transformations. Elevate your style with the expertise of our skilled stylists.</p>
        </div>
    )
}

const Content = () => {
    return (
        <div className='p-6 space-y-6'>
            {/* Why? */}
            <div className="flex md:flex-row flex-col gap-6 ">
                <InView className="flex-1 md:p-10 p-4 flex bg-[#1D1D1D] flex-col items-center gap-4 justify-center rounded-3xl">
                    <p className='md:text-5xl text-2xl font-bold'>Why choose us?</p>
                    <ul className='md:w-2/3 w-3/4 text-sm md:text-base text-gray-400 list-disc'>
                        <li>Our team of talented stylists is committed to staying at the forefront of industry trends and techniques. </li>
                        <li>We use only the finest professional products to ensure exceptional results. </li>
                        <li>Your comfort and satisfaction are our top priorities, and we create a welcoming, relaxing atmosphere in our salon.</li>
                    </ul>
                </InView>
                <InView delay={0.2} className="flex-1 p-10 flex bg-[#1D1D1D] flex-col items-center gap-4 rounded-3xl">
                    <p className='md:text-5xl text-2xl font-bold'>Consultation</p>
                    <p className='md:w-2/3 w-3/4 text-sm md:text-base text-gray-400'>Personalized consultations with our experienced stylists to discuss your vision and provide expert advice tailored to your unique hair type and lifestyle.</p>
                    <button className='rounded-md md:text-base text-xs font-semibold border border-white p-2'>BOOK AN APPOINTMENT</button>
                </InView>
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
            <CardContent className='md:flex-row-reverse'
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
            <CardContent className='md:flex-row-reverse'
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
            <InView delay={0.2} className='bg-[#1D1D1D] flex flex-col justify-center items-center rounded-xl md:p-32 p-4 gap-8'>
                    <p className='md:text-4xl text-2xl font-bold'>Book an Appointment</p>
                    <p className='text-gray-400 md:w-1/2  text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
                    <button className='p-3 rounded-md md:text-base text-xs bg-white text-black font-bold'>BOOK NOW</button>
            </InView>
        </div>
    )
}



