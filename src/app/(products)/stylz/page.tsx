import Slide from '@/app/components/Animation/Slide'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
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
    const cards = [{
        image: '',
        title: 'title',
        description: 'description',
        href: '',
        linkText: 'linkText'
    }]
    return (
        <div className='flex gap-5'>
            <Card className='flex-1' image={'https://framerusercontent.com/images/OVymTEV1jNazXnbGmMDx2OvxHs.jpg'} title={'Welcome to STYLZ'} description={'A premium and modern hair salon based in the heart of central London is West End.'} href={'#'} linkText={'OUR SERVICES'} />
            <Card className='' image={'https://framerusercontent.com/images/OVymTEV1jNazXnbGmMDx2OvxHs.jpg'} title={''} description={''} href={''} linkText={''} />
            <Card className='' image={'https://framerusercontent.com/images/OVymTEV1jNazXnbGmMDx2OvxHs.jpg'} title={''} description={''} href={''} linkText={''} />
            <Card className='' image={'https://framerusercontent.com/images/OVymTEV1jNazXnbGmMDx2OvxHs.jpg'} title={''} description={''} href={''} linkText={''} />
        </div>
    )
}
type CardProps = {
    className?: string,
    image: string
    title: string
    description: string
    href: string
    linkText: string
}
const Card = ({ className, image, title, description, href, linkText }: CardProps) => {
    return (
        <div className={cn('w-[100px] relative hover:w-[140px] duration-300 h-[700px] bg-white rounded-lg overflow-hidden', className)}>
            <Image
                src={image}
                alt={''}
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className='absolute w-[400px] top-1/2 space-y-5 left-10'>
                <div className='text-5xl font-semibold'>{title}</div>
                <div className='text-sm text-gray-300'>{description}</div>
                <Link href={href} className='font-semibold p-2 inline-block rounded-md border'>{linkText}</Link>
            </div>
        </div>
    )
}
const Content = () => {
    return (
        <div className='p-4 space-y-6'>
            {/* Our Services */}
            <CardContent
                image={'https://framerusercontent.com/images/6Lf1wWBcDCHF3X1dUqDr1U7ZnV0.jpg'}
                title={'Our Services'}
                description={'Discover our hair salon is exquisite services, from precision cuts to stunning color transformations. Elevate your style with the expertise of our skilled stylists.'}
                href={'#'}
                linkText={'GET STYLZED NOW'} />
            {/* Our Stylists */}
            <div className='space-y-10 py-24  w-screen overflow-hidden'>
                <div className='text-5xl text-center font-semibold'>Our Stylists</div>
                <div className='flex gap-4 min-w-fit justify-start'>
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                    <CardStylist image={'https://framerusercontent.com/images/FhQ2ArEmqDkKoGUqsEk4gk0j510.jpg?scale-down-to=512'} name={'Jeni'} description={'Style Director'} />
                </div>
                <div className='w-screen flex justify-center'>
                    <Link href={'#'} className='font-semibold   p-2 inline-block rounded-md border'>EXPLORE OUR STYLISTS</Link>
                </div>
            </div>
            <CardContent className='flex-row-reverse' image={'https://framerusercontent.com/images/7FLH55QYKatB0dImeKquuzcATp4.jpg'} title={'Our Prices'} description={'Explore our transparent pricing for top-notch hair services. Affordable luxury awaits at our salon, where beauty meets your budget with exceptional value.'} href={'#'} linkText={'VIEW OUR PRICE LIST'} />
            <CardContent image={'https://framerusercontent.com/images/Vo81UAkNbHXJlRFS0gl2CRMZno.jpg'} title={'Our Salon'} description={'Elevate your beauty at our luxurious, contemporary hair salon. Indulge in expert styling, cutting-edge techniques, and premium products for a truly glamorous transformation.'} href={'#'} linkText={'VISIT THE SALON'} />
            <CardContent className='flex-row-reverse' image={'https://framerusercontent.com/images/CVXpSPpSbauiMhTcJFg44h7ZUw.jpg'} title={'Book an appointment'} description={'Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.'} href={'#'} linkText={'BOOK NOW'} />
            {/* @stylzsalon */}
            <div className='py-20 space-y-14'>
                <p className='text-6xl font-bold text-center'>@stylzsalon</p>
                <Slide className='gap-6'>
                    <div className='flex min-w-fit gap-6' >
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                        <CardInstagram image={'https://framerusercontent.com/images/JPSIDRkV8pCv0DvlKnUT714WrE.jpg'} />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

type CardContentProps = {
    image: string
    title: string
    description: string
    href: string
    linkText: string,
    className?: string
}
const CardContent = ({ image, title, description, href, linkText, className }: CardContentProps) => {
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
            <div className="rounded-2xl bg-[#1D1D1D] flex  flex-col flex-1 justify-center items-center gap-6">
                <div className='text-5xl font-semibold'>{title}</div>
                <div className='text-sm text-center w-1/2 text-gray-300'>{description}</div>
                <Link href={href} className='font-semibold p-2 inline-block rounded-md border'>{linkText}</Link>
            </div>
        </div>
    )
}

type CardStylistProps = {
    image: string
    name: string
    description: string
}
const CardStylist = ({ image, name, description }: CardStylistProps) => {
    return (
        <div className='relative rounded-2xl w-[350px] h-[350px] overflow-hidden'>
            <Image
                src={image}
                alt={''}
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className='absolute text-xl bottom-0 space-y-1 left-0 p-4'>
                <p className='font-bold'>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

const CardInstagram = ({image}:{image: string}) => {
    return (
        <div className='w-[200px] h-[200px] rounded-2xl overflow-hidden'>
             <Image
                src={image}
                alt={''}
                width={1000}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            
        </div>
    )
}