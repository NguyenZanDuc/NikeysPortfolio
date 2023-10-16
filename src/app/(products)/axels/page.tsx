import React from 'react'
import Image from 'next/image'
import { Button } from '@/app/components/UI/Button'
import Link from 'next/link'
import ProductCard from './components/Card/ProductCard'
import { cn } from '@/app/lib/utils'
import { BsDiamondHalf } from 'react-icons/bs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/UI/Accordion"

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <Hero />
      <Collections />
      <MoreCollections />
      <ExploreProducts />
      <BestSellers />
      <Service />
      <Question />
    </div>
  )
}

export default page
const Hero = () => {
  return (
    <div>
      <div className='flex w-full sm:flex-row flex-col gap-5 h-[680px]'>
        <div className='relative z-20 flex-1 hover:shadow-xl duration-500 cursor-pointer'>
          <Image src={'https://framerusercontent.com/images/lLm6hpHLRSg735lTza1sihaHA1o.png'} fill className=' ' alt="Picture of the author" />
          <div className='absolute top-0 w-full h-full flex flex-col justify-center gap-8 sm:gap-28  items-center left-0 text-white'>
            <p>COLLECTIONS</p>
            <p className='sm:text-7xl text-2xl text-center'> Discover YourPerfect Style</p>
            <Button variant="outline" > SHOP NOW</Button>
          </div>
        </div>
        <div className='relative z-20 flex-1 hover:shadow-xl duration-500 cursor-pointer'>
          <Image src={'https://framerusercontent.com/images/BrLuUJek4HY2vrt3Kvhx0LYa8.png'} fill alt="Picture of the author" />
          <div className='md:p-20 p-4 flex flex-col justify-between absolute top-0 left-0  w-full h-full'>
            <p>SHOP</p>
            <div className='sm:space-y-5  space-y-2 text-sm '>
              <p className='sm:text-6xl text-2xl w-1/3'>Golden Memory</p>
              <p className='sm:w-2/3'>Indulge in the opulence of Golden Memory, a mesmerizing jewelry collection fit for a queen. Embrace your inner allure with exquisite designs exclusive in our store to your heart content.</p>
              <Link className='font-semibold block' href={'/axels'}>View Full Collection</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex text-black  justify-between'>
        <div className='flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: "100%", height: "100%" }} viewBox="0 0 128 43" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg1851069303_15882"></use></svg>
        </div>
        <div className='flex-1 relative'>
          <Image src={'https://framerusercontent.com/images/A8SdN3SLQJqn2PXa6VtIcMfvBk.svg'} fill alt="Picture of the author" />
        </div>
        <div className='flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: "100%", height: "100%" }} viewBox="0 0 65 33" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg1117465695_4408"></use></svg>
        </div>
        <div className='flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: "100%", height: "100%" }} viewBox="0 0 142 41" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg-1600987413_4925"></use></svg>
        </div>
        <div className='flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: "100%", height: "100%" }} viewBox="0 0 128 43" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg1851069303_15882"></use></svg>
        </div>
        <div className='flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: "100%", height: "100%" }} viewBox="0 0 145 49" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg1900036722_4152"></use></svg>
        </div>
      </div> */}
    </div>
  )
}

const Collections = () => {
  const products = [{
    image: 'https://framerusercontent.com/images/c9QKffNbEyY8KtvkpEn21RHdNDQ.png?scale-down-to=1024',
    title: 'Femme Chronos Watch',
    price: 199.99,
    href: '/axels'
  }, {
    image: 'https://framerusercontent.com/images/XbshYtJHAgrrh3DNixXufqYGeU.png?scale-down-to=512',
    title: 'Vintage Cuff Ring',
    price: 79.99,
    href: '/axels'
  },
  {
    image: 'https://framerusercontent.com/images/8sik1FvspOgcNwzDz5Fo9KQqoVM.png?scale-down-to=1024',
    title: 'Pearl Stud Earrings',
    price: 49.99,
    href: '/axels'
  },
  {
    image: 'https://framerusercontent.com/images/nzBNzv6x3Rm6NFZ9ORgGrgetm4.png?scale-down-to=512',
    title: 'Birthday Charm Bracelet',
    price: 69.99,
    href: '/axels'
  },
  {
    image: 'https://framerusercontent.com/images/JvLQvNRx4FQTV0ihkqobwpRXI.png?scale-down-to=512',
    title: 'Stack Diamond Ring',
    price: 249.99,
    href: '/axels',
    sale: 20
  },
  {
    image: 'https://framerusercontent.com/images/j6TyciOzs67zpJRquJP98yqgqcY.png?scale-down-to=512',
    title: 'Diamond Drop Earrings',
    price: 149.99,
    href: '/axels',
    sale: 50
  }]
  return (
    <div className='space-y-10 py-20'>
      <div className='flex justify-between items-center'>
        <p className='text-4xl'>Featured Collections</p>
        <Link href={''} className='text-xs font-semibold'>View More</Link>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5'>
        {products.map((product, index) => {
          return (
            <ProductCard key={index} {...product} />
          )
        }
        )}
      </div>
      <div className='flex justify-center'>
        <Button variant='outline' className='text-axels border-axels'>VIEW ALL PRODUCTS</Button>
      </div>
    </div>
  )
}
const MoreCollections = () => {
  return (
    <div className='space-y-5'>
      <div className='w-full h-[600px] relative'>
        <Image src={'https://framerusercontent.com/images/kuZTpews0wMyLiUNxjnRUmjsth0.png'} fill objectFit='cover' alt="Picture of the author" />
        <div className='absolute top-0 sm:right-10 p-4  flex flex-col sm:gap-8 gap-4 justify-center h-full '>
          <p className='text-xl font-light'>COLLECTION</p>
          <p className='text-5xl'>Flower Power</p>
          <p className='sm:w-[450px] w-[300px]'>Introducing our new mesmerizing jewelry collection. Embrace your inner allure with the timeless elegance.</p>
          <div>
            <Button variant="outline" className='font-semibold hover:bg-gray-500 hover:text-white border-black bg-transparent'>SHOP NOW</Button>
          </div>
        </div>
      </div>
      <div className='flex gap-5 flex-col sm:flex-row'>
        <div className='flex-1 h-[200px] bg-axelsBackground flex flex-col sm:flex-row-reverse'>

          <div className=' relative h-full aspect-video'>
            <Image src={'https://framerusercontent.com/images/keyhH9YxfFoxDwXJHIRd0beg.png'} fill objectFit='cover' alt="Picture of the author" />
          </div>
          <div className='flex-1  p-4 space-y-2'>
            <p className='text-4xl'>Luxe Abundance</p>
            <p className='text-gray-500'>Get 20% off with our code: LUXE20.</p>
            <Link className='text-sm font-semibold pt-8 block' href={'#'}>View Full Collection</Link>
          </div>
        </div>
        <div className='flex-1 h-[200px] flex flex-col bg-axelsBackground sm:flex-row-reverse'>
          <div className=' relative h-full aspect-video'>
            <Image src={'https://framerusercontent.com/images/PjRJsnSx3hORCBWJivTy39dY.png'} fill objectFit='cover' alt="Picture of the author" />
          </div>
          <div className='flex-1  p-4 space-y-2'>
            <p className='text-4xl'>Sparkle in Love</p>
            <p className='text-gray-500'>Make her say yes with our 50% off rings.</p>
            <Link className='text-sm font-semibold pt-8 block' href={'#'}>View Full Collection</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
const ExploreProducts = () => {
  return (
    <div className='w-full p-10 space-y-10'>
      <p className='text-center text-4xl w-full'>Explore Products</p>
      <div className='flex justify-center flex-col sm:flex-row gap-8'>
        <CategoryCard />
        <CategoryCard className='sm:translate-y-20' />
        <CategoryCard />
        <CategoryCard className='sm:translate-y-20' />
        <CategoryCard />
      </div>
    </div>
  )
}
type CategoryCardProps = {
  image?: string,
  title?: string,
  price?: number
  href?: string
  sale?: number
  className?: string
}

const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className={cn('h-[800px] sm:w-[200px] w-full hover:w-[300px] group relative duration-500', props.className)}>
      <Image src={'https://framerusercontent.com/images/8wQ4HEvq0mD0GrnKHc6v1lIFI.png'} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Picture of the author" />
      <div className='absolute bottom-64 left-1/2 space-y-4 group-hover:left-5 group-hover:bottom-32 text-white group-hover:translate-x-0 -translate-x-1/2'>
        <p className='uppercase group-hover:text-2xl text-6xl  tracking-[10px] group-hover:tracking-normal group-hover:rotate-0 -rotate-90  '>bracellets</p>
        <p className='hidden group-hover:block'>All time favorite</p>
        <Button variant="outline" className=' hidden group-hover:block border-white'>SHOP NOW</Button>
      </div>
    </div>
  )
}
const BestSellers = () => {
  const bestSellers = [{
    image: 'https://framerusercontent.com/images/8nrI714PWPpxvAerPHfroa0aznI.png?scale-down-to=1024',
    title: 'Silver Chain Watch',
    price: 199.99,
    href: '/axels'
  }, {
    image: 'https://framerusercontent.com/images/jzSJgPLbHnXk66bLSplMIGn0oLU.png?scale-down-to=512',
    title: 'Gold Pearl Ring',
    price: 499.99,
    href: '/axels'
  },
  {
    image: 'https://framerusercontent.com/images/m6K79vnqurHSm16R6Kfpcavm3c.png?scale-down-to=512',
    title: 'Gold Chain Necklace',
    price: 149.99,
    href: '/axels'
  }]
  return (
    <div className='py-32 gap-5 flex sm:flex-row flex-col'>
      <div className= "sm:w-full min-w-[300px]  relative h-[700px]">
        <Image src={'https://framerusercontent.com/images/yAtTbh2vCdyXWGHWycjOsXzWlIQ.png'} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Picture of the author" />
        <div className='bottom-20 absolute space-y-3 left-1/2 flex flex-col items-center text-white -translate-x-1/2'>
          <p>SALE</p>
          <p className='text-4xl text-center'>Seasonal Sale</p>
          <Button variant="outline" className='border-white'>SHOP NOW</Button>
        </div>
      </div>
      <div className='sm:space-y-10 space-y-4 flex-1'>
        <p className='text-4xl'>Best Seller</p>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 justify-between'>
          <p className='text-gray-400'>Take a look at our best selling products that we have provided for your beauty and jewelry needs.</p>
          <Link href={'#'} className='text-sm font-semibold flex-1'>View All Best Seller</Link>
        </div>
        <div className='flex gap-4 flex-col w-full sm:flex-row justify-between'>
          {bestSellers.map((product, index) => {
            return (
              <ProductCard key={index} {...product} />
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}
const Service = () => {
  return (
    <div>
        <div className='flex justify-center sm:justify-between flex-wrap py-10'>
          <CardService />
          <CardService />
          <CardService />
          <CardService />
        </div>
        <FlashSale />
    </div>
  )
}
export const FlashSale = () => {
  return (
    <div className='w-full relative  h-[600px]'>
    <Image src={'https://framerusercontent.com/images/ef1puQi2tWhzTKKkMI0RCmmjWg.png'} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Picture of the author" />
    <div className='absolute w-[360px] sm:w-[500px] p-2 bg-axelsBackground top-10 sm:right-10 right-1/2 sm:translate-x-0 translate-x-1/2'>
          <div className='border-[0.1px] border-axels p-10 gap-4  flex flex-col items-center justify-center'>
                <p className='text-axels tracking-widest uppercase'>Flash sale</p>
                <p className='text-xl font-bold text-center'>Goldenia Engagement Ring</p>
                <p className='text-gray-400'>Capture the essence of eternal love with our exquisite gold diamond engagement ring, a symbol of timeless commitment.</p>
                <Button className='bg-axels text-white uppercase font-semibold'>Shop now</Button>
          </div>
    </div>
</div>
  )
}
const CardService = () => {
  return (
    <div className='flex  flex-col justify-center items-center gap-2'>
      <div className=' text-axels bg-axelsBackground rounded-full'>
          <BsDiamondHalf className="w-10 h-10 rounded-full p-3" />
      </div>
      <p className='font-semibold'>Quality Certified</p>
      <p>Available certificates of authenticity.</p>
    </div>
  )
}
const Question = () => {
  return (
    <div className='p-10 space-y-10 bg-axelsBackground'>
        <p className='text-center text-2xl sm:text-4xl'>Questions</p>
        <div className='space-y-4'>
            <CardQuestion />
            <CardQuestion />
            <CardQuestion />
            <CardQuestion />
            <CardQuestion />
            <CardQuestion />
        </div>
        <div className='flex flex-wrap sm:flex-nowrap gap-5 sm:h-[500px] overflow-hidden'>
            <Image src={'https://framerusercontent.com/images/yAtTbh2vCdyXWGHWycjOsXzWlIQ.png'} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Picture of the author" />
            <Image src={'https://framerusercontent.com/images/yAtTbh2vCdyXWGHWycjOsXzWlIQ.png'} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Picture of the author" />
            <Image src={'https://framerusercontent.com/images/yAtTbh2vCdyXWGHWycjOsXzWlIQ.png'} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Picture of the author" />
            <Image src={'https://framerusercontent.com/images/yAtTbh2vCdyXWGHWycjOsXzWlIQ.png'} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Picture of the author" />
        </div>
    </div>
  )
}

const CardQuestion = () => {
  return (
    <Accordion className='bg-white px-2 sm:first-line:w-2/3 mx-auto'  type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className='font-semibold'>Is it accessible?</AccordionTrigger>
      <AccordionContent className='text-gray-400 p-6'>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}
