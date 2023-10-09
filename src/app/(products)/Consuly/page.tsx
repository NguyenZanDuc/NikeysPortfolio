import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}
const page = (props: Props) => {
  return (
    <div className='w-screen '>
      <Navbar />
      <Hero />
      <Service />
      <More />
      <CaseStudies />
      <Blog />
      <Connect />
      <Footer />
    </div>
  )
}
export default page

const Navbar = () => {
  return (
    <div className='container mx-auto flex items-center px-24 py-4'>
      <Logo className=' ' />
      <div className='flex h-full flex-1 font-semibold justify-center gap-8 items-center'>
        <Link href={'#'} >Home</Link>
        <Link href={'#'} className='relative group' >
          Page
          <PageHoverContent />
        </Link>
        <Link href={'#'} >About</Link>
        <Link href={'#'} >Contact</Link>
      </div>
      <div className='flex basis-1/6 justify-center items-center '>
        <Link className='px-4 py-2 rounded-md text-white bg-consulyText' href={'#'} >Get Started</Link>
      </div>
    </div>
  )
}
const PageHoverContent = () => {
  return (
    <div className='w-[600px] border-8 border-transparent duration-500 h-[400px] absolute rounded-lg bg-gray-300 shadow-lg z-0 opacity-0 top-full translate-y-20 left-1/2 -translate-x-1/2 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-50
     '>
    </div>
  )
}
const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Image src={'/ConsulyLogo.png'} width={120} height={120} alt={''} />
    </div>
  )
}
const Hero = () => {
  return (
    <div className='container z-10 px-24 relative flex items-center gap-10 mx-auto '>
      <div className='space-y-10 flex-1'>
        <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Customer Focus Solution</p>
        <p className='text-6xl font-semibold'>Guidance Extends Past Advice</p>
        <p className=' text-gray-600'>Elevate Your Business with Expert Guidance. Unlock Growth Potential. Your Success, Our Mission.</p>
        <div>
          <Link className='px-4 py-2 rounded-md text-white bg-consulyText' href={'#'} >Discover More</Link>
        </div>
      </div>
      <div className='flex-1'>

        <Image src={'https://framerusercontent.com/images/SfnBSeZbf961m7XNpw06oyn0I.png?scale-down-to=1024'} width={1000} height={100} alt={''} />
      </div>
    </div>
  )
}


const Service = () => {
  return (
    <div className='px-24 bg-consulyBackground p-10 flex flex-col items-center gap-10'>
      <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Our Services</p>
      <p className='w-1/3 font-semibold text-5xl text-center'>Unlocking Your Business Potential</p>
      <div className='w-full flex gap-10 justify-center flex-wrap'>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
    </div>
  )
}
const CardService = () => {
  return (
    <div className='w-[410px] px-10 h-[360px] rounded-lg p-6 space-y-6 bg-white shadow-xl '>
      <div>Icon</div>
      <p className='font-bold text-lg'>Market Research and Analysis</p>
      <p className='text-gray-500 '>Our experts will gather comprehensive data and provide in-depth analysis to help you understand market trends, customer preferences, and competitive landscapes, enabling informed decision-making.</p>
      <div>
        <Link className=' font-semibold' href={'#'}>Learn More</Link>
      </div>
    </div>
  )
}
const More = () => {
  return (
    <div className='container mx-auto flex p-10  items-center'>
      <div className='flex-1 p-24 overflow-hidden relative'>
        <p className='p-2 bg-white rounded-md text-sm absolute bottom-1/4 right-14 shadow-lg'>
          <span className=' text-consulyText text-xl font-semibold'>12+ </span>
          Years Of Experience
        </p>
        <Image src={'https://framerusercontent.com/images/6OWYXmqlhilNhnikr8Al2FhYUA.png?scale-down-to=1024'} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} ></Image>
      </div>
      <div className='flex-1 space-y-10'>
        <p className='text-6xl font-semibold'>Reliable & <span className='text-consulyText'>cost efficient</span> consultancy </p>
        <p className='text-xm text-gray-500'>Consuly is your trusted advisors in business excellence. With a passion for innovation and a commitment to results, we provide tailored solutions to help businesses thrive. Our experienced team is dedicated to your success, guiding you through challenges and opportunities in today is dynamic landscape.</p>
        <div>
          <Link className='px-4 py-2 rounded-md text-white bg-consulyText' href={'#'} >Learn More</Link>
        </div>
      </div>
    </div>
  )
}
const CaseStudies = () => {
  return (
    <div className='bg-consulyBackground p-10 flex flex-col items-center gap-10 justify-center'>
      <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Case Studies</p>
      <p className='w-1/4 text-5xl text-center'>Discover our case history</p>
      <div className='w-full flex gap-4 justify-center flex-wrap'>
        <CardCaseStudies />
        <CardCaseStudies />
        <CardCaseStudies />
      </div>
    </div>
  )
}

const CardCaseStudies = () => {
  return (
    <div className='space-y-8 w-[280px]'>
      <Image src={'https://framerusercontent.com/images/HjeqWu2XMNekRkuW9wNJOW0bUk.png'} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} className='rounded-2xl shadow-md' ></Image>
      <p className='text-3xl'>Market Entry Strategy for Global Expansion</p>
      <p className=' text-gray-600'>Discover how we assisted Company X in entering new international markets and achieving rapid growth with a data-driven market entry strategy.</p>
      <div>
        <Link className='px-4 py-2 rounded-md text-white bg-consulyText' href={'#'} >View Project</Link>
      </div>
    </div>
  )
}
const Blog = () => {
  return (
    <div className='container mx-auto flex flex-col items-center py-10 space-y-10'>
      <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Case Studies</p>
      <p className='w-1/4 text-5xl text-center'>Lastest News</p>
      <div className='h-[600px] gap-4 grid grid-cols-4 grid-rows-3 px-32'>
        <CardBlog className='flex col-span-2 row-span-3 flex-col rounded-xl overflow-hidden shadow-md' />
        <CardBlog className='flex gap-3 col-span-2 row-span-1 first:basis-1/3' />
        <CardBlog className='flex gap-3 col-span-2 row-span-1 first:basis-1/3' />
        <CardBlog className='flex gap-3  col-span-2 row-span-1 first:basis-1/3' />
      </div>
    </div>
  )
}

const CardBlog = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div>
        <Image src={'https://framerusercontent.com/images/r954eJffhaYpoYFKoiTeOq27AdI.jpg?scale-down-to=1024'} alt={''} width={1000} height={1000} style={{ width: "auto", height: "100%" }} className='rounded-2xl shadow-md' ></Image>
      </div>
      <div className='p-4 flex flex-col justify-between flex-1'>
        <p className='text-gray-600'>Mar 24, 2023</p>
        <p className='font-semibold'>Boosting Business Success: The Power of Strategic Consultancy</p>
        <p className='text-gray-500 text-sm'>In a competitive business landscape, strategic consultancy has become indispensable.</p>
        <Link className='text-sm text-consulyText' href={'#'}>Read more</Link>
      </div>
    </div>
  )
}
const Connect = () => {
  return (
    <div className='bg-consulyText text-white rounded-md p-24'>
      <div className='w-1/2 mx-auto items-center flex flex-col gap-10'>
        <p className='text-5xl font-semibold text-center'>We are ready to assist you! connect with us today.</p>
        <p className='text-lg text-center'>The mockups will be used to visually communicate to features and functionality of the software.</p>
        <div>
          <Link className='px-4 py-2 rounded-md text-black bg-white' href={'#'} >Get Free Consultation</Link>
        </div>
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <div className='container mx-auto p-10 flex'>
      <div className=' px-10 space-y-4'>
        <Logo />
        <p className='text-sm text-gray-500 w-3/4'>We denounce with righteous indignation and dislike  and demoralized.</p>
        <input type="text" className='outline-none w-2/3 p-2 rounded-md border-gray-300 border-[0.4px]' placeholder='name@email.com' />
        {/* <div className='w-full'> */}
          <Link className='px-4 py-2 block w-2/3 rounded-md text-white bg-consulyText' href={'#'} >Learn More</Link>
        {/* </div> */}
      </div>
      <div className='flex flex-1 justify-between'>
        <div className='space-y-3'>
          <p className='font-semibold'>Essential Links</p>
          <p>Home</p>
          <p>About us</p>
          <p>Case Study</p>
          <p>Service</p>
          <p>Blog</p>
        </div>
        <div className='space-y-3'>
          <p className='font-semibold'>Pages</p>
          <p>Career</p>
          <p>Team</p>
          <p>Contact</p>
        </div>
        <div className='space-y-3'>
          <p className='font-semibold'>Utility Pages</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>404</p>
          <p>Website</p>
        </div>
        <div className='space-y-3'>
          <p className='font-semibold'>Other Products</p>
          <p>Magneto</p>
          <p>Saasco</p>
          <p>Hirer</p>
          <p>Offtech</p>
        </div>
      </div>
    </div>
  )
}

