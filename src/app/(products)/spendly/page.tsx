import React from 'react'
import HeadSection from './components/HeadSection'
import Link from 'next/link'
import TransactionCard from './components/TransactionCard'
import CommentCard from './components/CommentCard'
import PricingCard from './components/PricingCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/UI/Accordion'
import BlogCard from './components/BlogCard'
import PricingTable from './components/PricingTable'
import ContactForm from './components/ContactForm'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen'>
      {/* Hero*/}
      {/* <section id='hero' className='p-32 space-y-10'>
          <HeadSection 
          center={true}
           title='Simplified Financial Control'
            subtitle='My Cards' 
            description='Spendly simplifies your financial control. Manage budgets and track all your linked credit cards effortlessly. Achieve financial goals and stay organized with ease.' />
          <div className='flex justify-center'>
            <Link href={'#'} className='rounded-full text-gray-500 border-gray-500 border px-4 py-2'> Learn More</Link>
          </div>
      </section> */}
     <ContactForm />
    </div>
  )
}

export default page






