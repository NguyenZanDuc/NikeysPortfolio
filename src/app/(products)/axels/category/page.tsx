import Link from 'next/link'
import React from 'react'
import ProductCard from '../components/Card/ProductCard'
import { FlashSale } from '../page'

type Props = {}

const page = (props: Props) => {
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
      }]
  return (
    <div className='space-y-4 py-10 sm:space-y-10 '>
        <p className='text-4xl text-center font-semibold'>Bracelet</p>
        <div className='flex justify-center flex-wrap gap-4 sm:gap-10'>
            <Link href={'#'} >ALL</Link>
            <Link href={'#'} >EARRING</Link>
            <Link href={'#'} >NECKLACE</Link>
            <Link href={'#'} >BRACELET</Link>
            <Link href={'#'} >RINGS</Link>
            <Link href={'#'} >WATCHES</Link>
            <Link href={'#'} >MEN IS JEWELRY</Link>
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2  gap-4'>
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
        </div>
        <FlashSale />
    </div>
  )
}

export default page

