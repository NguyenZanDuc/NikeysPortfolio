import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <Category />
      <Content />
      <Brand />
      <Articles />
    </div>
  )
}

export default page

const Hero = () => {
  return (
    <div className='w-screen h-[700px] rounded-bl-[200px] overflow-hidden relative'>
      <Image src="https://framerusercontent.com/images/VeYOpfywAFlNztDgXwHoIALc3I.jpg" alt="hero" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-[500px] space-y-8 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <p className="text-6xl font-semibold">Let Your Home Be Unique</p>
        <p className="text-gray-800">  Various iterations of Lorem Ipsum content are available, with many being widespread.</p>
        <div>
          <Link href={"#"} className=" hover:text-calmHome p-3 rounded-full bg-black text-white font-semibold">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
const Category = () => {
  return (
    <div className='p-20 space-y-20'>
      <p className='text-5xl font-bold text-center'>Unleash the potential</p>
      <div className='flex justify-center gap-10 items-center'>
        {/* Items */}
        <div className='w-[400px] space-y-2 flex flex-col justify-center items-center'>
          <div className='text-calmHome'>Icon</div>
          <p className='text-2xl font-semibold'>Project Plan</p>
          <p>Experience a surge of power with our platform.</p>
          <Link href={"#"} className=" hover:text-calmHome text-sm font-bold ">Read more</Link>
        </div>
        <div className='w-[400px] space-y-2 flex flex-col justify-center items-center'>
          <div className='text-calmHome'>Icon</div>
          <p className='text-2xl font-semibold'>Project Plan</p>
          <p>Experience a surge of power with our platform.</p>
          <Link href={"#"} className=" hover:text-calmHome text-sm font-bold ">Read more</Link>
        </div>
        <div className='w-[400px] space-y-2 flex flex-col justify-center items-center'>
          <div className='text-calmHome'>Icon</div>
          <p className='text-2xl font-semibold'>Project Plan</p>
          <p>Experience a surge of power with our platform.</p>
          <Link href={"#"} className=" hover:text-calmHome text-sm font-bold ">Read more</Link>
        </div>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className='bg-calmHomeBackground '>
      <div className='sm:p-20 p-4 w-2/3  mx-auto flex  gap-20 justify-center sm:flex-row flex-col'>
        <div className="flex-1 space-y-5 ">
          <p className='text-5xl font-bold '>We Create The Art Of Stylish Living Stylishly</p>
          <p className=''>It is a long established fact that a reader will be distracted by the of readable content of a page  when lookings at its layouts the points of using  that it has a more-or-less normal.</p>
          <div className='flex gap-3'>
            <div>Icon</div>
            <div className='flex flex-col justify-between'>
              <p className='font-semibold'>012345678</p>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <div>
            <Link href={"#"} className=" hover:text-calmHome p-3 rounded-full bg-black text-white font-semibold">Contact Us</Link>
          </div>
        </div>
        <div className="flex-1 rounded-bl-[50px] rounded-tr-[160px] overflow-hidden relative">
          <Image src="https://framerusercontent.com/images/aFYJ19iM0hm3pvSWkmviw7q86c.png" alt="hero" fill objectFit='cover' />
        </div>
      </div>
    </div>
  )
}
const Brand = () => {
  return (
    <div>
      {/* Logo */}
      <div className='p-20 space-y-10'>
        <p className='text-center text-6xl font-semibold'>And your favorite brand</p>
        <div className=' flex justify-center h-[40px] gap-20 flex-wrap'>
          <Image src="https://framerusercontent.com/images/mCNtIRcU50xs6fh2Rw1cKL3kEw.png" alt="hero" width={1000} height={1000} style={{width:"auto", height:"100%"}} />
          <Image src="https://framerusercontent.com/images/lzFRTIX2h3sTijgkZyTZMyKZM2s.png" alt="hero" width={1000} height={1000} style={{width:"auto", height:"100%"}} />
          <Image src="https://framerusercontent.com/images/g8ygMcKWnoOnd72FlP27bbCy0c.png" alt="hero" width={1000} height={1000}  style={{width:"auto", height:"100%"}}/>
          <Image src="https://framerusercontent.com/images/4XhOgNFHjr0kkQ1bH8ujVwkIMsM.png" alt="hero" width={1000} height={1000} style={{width:"auto", height:"100%"}} />
          <Image src="https://framerusercontent.com/images/ssI3U2aP5Stj50olCxE2s32tuiY.png" alt="hero" width={1000} height={1000} style={{width:"auto", height:"100%"}} />
        </div>
      </div>
      {/* detail */}
      <div className='p-20 flex justify-center sm:divide-x divide-calmHome bg-calmHomeBackground'>
        <div className='px-20'>
          <p className='text-6xl font-semibold text-center text-calmHome'>12</p>
          <p className='font-semibold'>Years Of Experiance</p>
        </div>
        <div className='px-20'>
          <p className='text-6xl font-semibold text-center text-calmHome'>12</p>
          <p className='font-semibold'>Years Of Experiance</p>
        </div>
        <div className='px-20'>
          <p className='text-6xl font-semibold text-center text-calmHome'>12</p>
          <p className='font-semibold'>Years Of Experiance</p>
        </div>
        <div className='px-20'>
          <p className='text-6xl font-semibold text-center text-calmHome'>12</p>
          <p className='font-semibold'>Years Of Experiance</p>
        </div>
      </div>
    </div>
  )
}
const Articles = () => {
  return (
    <div className='p-20 space-y-10 '>
      <p className='text-center text-6xl font-semibold'>Articles & News</p>
      <p className='text-xl text-gray-700 text-center'>Our designers share secrets for creating a peaceful living space.</p>
      <div className='flex justify-center gap-4 flex-wrap'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      {/*  */}
      <div className=' p-20 rounded-3xl flex flex-col gap-10 items-center justify-center bg-calmHomeBackground'>
        <p className='w-1/2 text-center text-5xl font-semibold'>“Choosing CalmHome for our interior design studio was the best decision. Its minimalist design lets our work shine! ”</p>
        <Image src="https://framerusercontent.com/images/4XhOgNFHjr0kkQ1bH8ujVwkIMsM.png" alt="hero" width={1000} height={1000} style={{width:"auto", height:"40px"}} />
        <div className='flex items-center gap-4'>
          <div>Avatar</div>
          <div className='flex flex-col justify-center'>
            <p className='font-semibold'>Raymond Galario</p>
            <p className='text-sm'>Nature Home Founder</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='rounded-3xl bg-[#342E27] text-white p-20 space-y-10'>
        <div className=' flex flex-col items-center justify-center'>
          <p className='text-center text-6xl font-semibold'>Our Latest News</p>
          <p className='text-xl text-gray-200'>Our designers share secrets for creating a peaceful living space.</p>
        </div>
        <div className='flex justify-center'>
          <Link href={"#"} className=" hover:text-calmHome p-3  rounded-full hover:bg-white text-white bg-calmHome font-semibold">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

const ArticleCard = () => {
  return (
    <div className='rounded-xl p-4 flex flex-col gap-4 items-center border-[0.1px] border-gray-400'>
      <div className='w-[300px] h-[280px] relative overflow-hidden rounded-t-xl'>
        <Image src="https://framerusercontent.com/images/Q3fNuSTof27bRfH3vo8zrGUss.jpg?scale-down-to=512" alt="hero" fill objectFit='cover' />
      </div>
      <div className='space-y-10'>
        <p className='font-semibold text-xl w-[300px]'>Best For Any Office & Business Interior-Solution</p>
        <div className='flex justify-between'>
          <p className='text-sm text-gray-600'>September 25, 2023</p>
          <Link href={'#'}>Next</Link>
        </div>
      </div>
    </div>
  )
}