import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='font-serif w-screen overflow-hidden'>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <TryLesson />
            <Become />
            <More />
            <Comments />  
            <BecomeMember /> 
            <Pricing />
            <Footer />
        </div>
    )
}

export default page

const Navbar = () => {
    return (
        <div className='font-medium py-4 text-xl flex justify-between items-center px-32'>
            <div className='flex gap-2 items-center'>
                <p className='text-2xl p-2 rounded-md bg-black font-bold text-white'>10x</p>
                <p>Designers</p>
            </div>
            <div className='space-x-10'>
                <Link href={'#'}>Skill</Link>
                <Link href={'#'}>Members</Link>
                <Link href={'#'}>Plans</Link>
            </div>
            <div>
                <Link className='p-3 rounded-lg hover:bg-gray-200 border border-black' href={'#'}>Sign in</Link>
            </div>
        </div>
    )
}
const Hero = () => {
    return (
        <div className='relative text-center p-24 w-screen justify-center items-center flex flex-col gap-8'>
            {/* <Image className='absolute w-screen top-0 left-0' style={{width:"100%", height:"auto", objectFit:"cover"}} src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={1000} height={600} alt={''} /> */}
            <p className='text-5xl w-1/4 font-medium'>Become a 10x Designer</p>
            <p className='text-gray-600 w-1/3'>Expand your design skillset through live workshops and a-sync lessons, connect with like-minded individuals and have direct access to industry professionals.</p>
            <button className=' text-xl p-3 rounded-xl text-white bg-black'>Start your journey</button>
            <p>We empower designers from top companies</p>
            <div>logo logo logo logo</div>
        </div>
    )
}
const Skills = () => {
    return (
        <div className='p-32 space-y-10 text-center flex flex-col items-center'>
            <p className='text-4xl font-medium text-1/4'>Expand your skillset</p>
            <p className='w-1/3 text-gray-600'>We are here for those who want to keep growing. Currently you can jump into 5 skills, while we’re actively working on adding more </p>
            <div className='grid text-start  grid-cols-3 gap-5'>
                {/* Card */}
                <div className='p-4 bg-[#FAFAFA] space-y-3 rounded-md'>
                    <p>Design</p>
                    <p>Learn how to design beautiful interfaces, create user flows, and build prototypes</p>
                    <button>See more</button>
                </div>
                {/* Card */}
                <div className='p-4 bg-[#FAFAFA] space-y-3 rounded-md'>
                    <p>Design</p>
                    <p>Learn how to design beautiful interfaces, create user flows, and build prototypes</p>
                    <button>See more</button>
                </div>
                {/* Card */}
                <div className='p-4 bg-[#FAFAFA] space-y-3 rounded-md'>
                    <p>Design</p>
                    <p>Learn how to design beautiful interfaces, create user flows, and build prototypes</p>
                    <button>See more</button>
                </div>
                {/* Card */}
                <div className='p-4 bg-[#FAFAFA] space-y-3 rounded-md'>
                    <p>Design</p>
                    <p>Learn how to design beautiful interfaces, create user flows, and build prototypes</p>
                    <button>See more</button>
                </div>
                {/* Card */}
                <div className='p-4 bg-[#FAFAFA] space-y-3 rounded-md'>
                    <p>Design</p>
                    <p>Learn how to design beautiful interfaces, create user flows, and build prototypes</p>
                    <button>See more</button>
                </div>
                {/* Card */}
                <div className='p-4 bg-[#FAFAFA] space-y-3 rounded-md'>
                    <p>Design</p>
                    <p>Learn how to design beautiful interfaces, create user flows, and build prototypes</p>
                    <button>See more</button>
                </div>
            </div>
        </div>
    )
}
const About = () => {
    return (
        <div className='w-2/3 mx-auto space-y-10'>
            <p className='w-1/2 text-5xl mx-auto text-center'>Unlock hours of design education</p>
            <div className='flex justify-between gap-20'>
                {/*  */}
                <div>
                    <p className='text-6xl'>42+</p>
                    <p>Lessions</p>
                </div>
                <div >
                    <p className='text-6xl'>36+</p>
                    <p>Workshops</p>
                </div>
                <div >
                    <p className='text-6xl'>12+</p>
                    <p>Challenges</p>
                </div>
            </div>
        </div>
    )
}
const TryLesson = () => {
    return (
        <div className='w-1/3 py-24 space-y-10 mx-auto text-center'>
            <p className='text-4xl'>Try a lesson</p>
            <p className='text-gray-600'>Drop your email below and we will send you one video lesson for free, so you get a taste of the lessons on 10x.</p>
            <div>
                <div className='w-full flex gap-3'>
                    <input className='bg-[#FAFAFA] shadow-inner outline-none flex-1  p-2 rounded-md' placeholder='Email' />
                    <button className='px-4 py-2 bg-black text-white rounded-md'>Send preview</button>
                </div>
                <p className='text-xs text-gray-300 p-1'>By signing up you agree to receive occasional updates.</p>
            </div>
        </div>
    )
}
const Become = () => {
    return (
        <div className='w-2/3 text-center mx-auto'>
            <p className='text-2xl'>Become part of our</p>
            <p className='text-6xl font-bold'>Community</p>
            <div className='flex font-serif justify-center gap-14'>
                {/* items */}
                <div>
                    <p className='text-3xl'>15k</p>
                    <p>Friends</p>
                </div>
                {/* items */}
                <div>
                    <p  className='text-3xl'>1250+</p>
                    <p>Members</p>
                </div>
                {/* items */}
                <div>
                    <p  className='text-3xl'>36+</p>
                    <p>Nationalites</p>
                </div>
                {/* items */}
                <div>
                    <p  className='text-3xl'>25+</p>
                    <p>Advocates</p>
                </div>
                {/* items */}
                <div>
                    <p  className='text-3xl'>12+</p>
                    <p>Mentors</p>
                </div>
            </div>
        </div>
    )
}
const More = () => {
    return (
        <div className='p-32 space-y-10'>
            <div>
                <p className='text-3xl text-center'>And there is more,</p>
                <p className='text-3xl text-center'>A lot more.</p>    
            </div>
            <div className='columns-3 gap-3'>
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            </div>
        </div>
    )
}
const MoreCard = () => {
    return (
        <div className='w-full h-full p-4 bg-[#FAFAFA] rounded-lg'>
            <p>And there is more,</p>
            <p>A lot more.</p>
        </div>
    )
}
const Comments = () => {
    return (
        <div className='gap-14 flex flex-col p-24 relative'>
            <p className=' text-center text-3xl font-semibold'>What designers say about us</p>
            <div className='w-auto flex gap-10'>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
            <div className='w-auto -translate-x-32 flex gap-10'>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
            <div className='absolute top-0 left-0 w-64 bg-gradient-to-r from-white to-transparent h-full'></div>
            <div className='absolute top-0 right-0 w-64 bg-gradient-to-l from-white to-transparent h-full'></div>
        </div>
    )
}
const CommentCard = () => {
    return (
        <div className='min-w-[350px] h-[200px] bg-[#FAFAFA] border-[0.5px] border-gray-400 rounded-lg p-4'>
            <p>CommentCard</p>
        </div>
    )
}
const BecomeMember = () => {
    return (
        <div className='flex flex-col bg-[#FAFAFA] items-center p-24 gap-5'>
            <p className='w-1/2 mx-auto text-4xl font-semibold text-center'>Become the world-class designer you are meant to be</p>
            <button className='p-3  text-white translate-y-10 bg-black rounded-md'>Become a member</button>
            <div className='flex justify-center gap-5 h-[500px] overflow-hidden'>
                <div className='flex flex-col gap-5'>
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                </div>
                <div className='flex flex-col gap-5 translate-y-8'>
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                </div>
                <div className='flex flex-col gap-5 translate-y-16'>
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                </div>
                <div className='flex flex-col gap-5 translate-y-8'>
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                </div>
                <div className='flex flex-col gap-5'>
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                    <Image  src={'https://framerusercontent.com/images/0DSiRYnMCoTHmtG8eaN9mVLWQ.png?scale-down-to=1024'}  width={260} height={214} objectFit='cover' alt={''} />
                </div>
            </div>
        </div>
    )
}
const Pricing = () => {
    return (
        <div className='space-y-10 p-24'>
            <p className='text-center text-4xl'>Start your journey today</p>
            <div className='flex gap-4 justify-center'>
                <PriceCard />
                <PriceCard />
                <PriceCard />
            </div>
            <div className='flex py-10 justify-center gap-10 w-1/2 mx-auto'>
                <p className='w-1/2  text-6xl flex-1 '>Alternative financing</p>
                <div className='flex-1  space-y-10'>
                    <div className=' space-y-4'>
                        <p className='font-bold'>Parity Pricing Program</p>
                        <p >We have adjusted pricing options based on the purchasing power of different countries.  </p>
                        <Link href={'#'} className='text-gray-400'>Check out Parity Pricing</Link>
                    </div>
                    <div className=' space-y-4'>
                        <p className='font-bold'>Expense to your employer</p>
                        <p>Have a look at our template you can use if you need manager’s approval.</p>
                        <Link href={'#'} className='text-gray-400'>Download template</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
const PriceCard = () => {
    return (
        <div className='w-[400px] p-4 h-[560px] bg-gray-700 text-white  rounded-lg'>
            <p>PriceCard</p>
        </div>
    )
}
const Footer = () => {
    return (
        <div className='flex h-[450px] w-2/3 mx-auto gap-3 p-24'>
            <div className='bg-[#FAFAFA] basis-2/3 rounded-md'>
                <p>Before you go, check out these links</p>
            </div>
            <div className='basis-1/3 flex gap-3 flex-col'>
                <div className='basis-3/4 bg-[#FAFAFA] rounded-md'>
                    <p>Let is work together</p>
                </div>
                <div className='flex basis-1/4 gap-3'>
                    <div className='flex-1  bg-[#FAFAFA] rounded-md'></div>
                    <div className='flex-1  bg-[#FAFAFA] rounded-md' ></div>
                    <div className='flex-1  bg-[#FAFAFA] rounded-md'></div>
                </div>
            </div>
        </div>
    )
}