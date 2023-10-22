import Image from 'next/image'
import React from 'react'
import HeadSection from '../components/HeadSection'
import BlogCard from '../components/BlogCard'
import { Button } from '@/app/components/UI/Button'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen sm:px-32 space-y-10 py-10 sm:space-y-32 sm:py-32 px-4'>
      {/* Blogs */}
      <section id="Blogs" className="sm:space-y-10 space-y-4">
        <HeadSection center={true} title={'Explore Financial Insights'} subtitle={'Read Our Blog'} description={'Discover valuable financial insights, tips, and articles on our blog. Stay informed and make informed decisions about your finances with our expert content.'} />
        <div className='flex gap-5 flex-col sm:flex-row justify-center'>
          <BlogCard
            image={'https://framerusercontent.com/images/6gctHPSd4luM1PjI9WIcmXL25k.jpg?scale-down-to=512'}
            title={'Financial Safety: A Comprehensive Guide'}
            subtitle={'Financial Security'}
            date={new Date('2023-09-26').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            link={'#endregion'} />
          <BlogCard
            image={'https://framerusercontent.com/images/6gctHPSd4luM1PjI9WIcmXL25k.jpg?scale-down-to=512'}
            title={'Financial Safety: A Comprehensive Guide'}
            subtitle={'Financial Security'}
            date={new Date('2023-09-26').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            link={'#endregion'} />
          <BlogCard
            image={'https://framerusercontent.com/images/6gctHPSd4luM1PjI9WIcmXL25k.jpg?scale-down-to=512'}
            title={'Financial Safety: A Comprehensive Guide'}
            subtitle={'Financial Security'}
            date={new Date('2023-09-26').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            link={'#endregion'} />
        </div>
        <div className='flex justify-center'>
          <Button variant={'outline'} className='rounded-full text-gray-400 border-gray-400'>View More</Button>
        </div>
      </section>
      {/* Download */}
      <section id="download " className='pt-20 sm:h-[500px] rounded-3xl overflow-hidden'>
        <div className='rounded-3xl flex flex-col-reverse sm:flex-row  gap-10 bg-slate-100 '>
          <div className="basis-1/3 px-10 rounded-3xl bg-black">
            <Image src="https://framerusercontent.com/images/pULjicvJTne2aVz2Covzm5YPU4.svg" alt={''} className='sm:-translate-y-20 -translate-y-10' width={1187} height={1000} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </div>
          <div className="flex-1 p-10 space-y-4 sm:space-y-10">
            <HeadSection center={false} title={'Manage Your Finances on the Go'} subtitle={'Download App'} description={'Manage your finances on the go with the Spendly mobile app. Download it today for easy expense tracking and customized alerts.'} />
            <div className='flex justify-start flex-1 gap-10'>
              <button className='px-4 py-2 bg-spendly text-white font-bold rounded-full'>App Store</button>
              <button className='px-4 py-2 bg-spendly text-white font-bold rounded-full'>Google play</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page


