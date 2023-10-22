import React from 'react'
import HeadSection from '../components/HeadSection'
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import ContactForm from '../components/ContactForm'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/UI/Accordion'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen sm:p-32 py-10 space-y-10 sm:space-y-32  px-4'>
      {/* contact */}
      <section id="contact" className="space-y-10">
        <HeadSection center={true} title={'Get in Touch'} subtitle={'Contact Us'} description={'We are here to help! If you have any questions, suggestions, or just want to say hello, please feel free to reach out to us.'} />
        <div className="flex gap-10 flex-col sm:flex-row">
          <div className="flex-1 text-center sm:text-start space-y-2 sm:space-y-5">
            <p className='text-spendly'>Address</p>
            <p>42 Market Avenue Westminster London W1B 4DE United Kingdom</p>
            <p className='text-spendly'>Email</p>
            <p>contactspendly@email.com</p>
            <p className='text-spendly'>Phone</p>
            <p>+44 111 333 555</p>
            <p className='text-spendly'>Social Links</p>
            <div className='flex justify-center sm:justify-start gap-10 text-gray-500'>
              <BsTwitter />
              <BsLinkedin />
              <BsInstagram />
              <BsYoutube />
            </div>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </section>
       {/* Question */}
       <section id="Question" className="sm:space-y-10 space-y-4">
        <HeadSection center={true} title={'Got Questions? We Have Answers!'} subtitle={'FAQ'} description={'Find answers to commonly asked questions about Spendly and its features below. If you have more specific inquiries, feel free to reach out to our support team for assistance.'} />
        <div className='sm:w-1/3 px-5 mx-auto'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Spendly?</AccordionTrigger>
              <AccordionContent className='text-xs text-gray-400'>
                Spendly is a user-friendly financial management SAAS platform designed to help individuals and businesses track expenses, create budgets, receive customized alerts, and secure their financial data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Spendly?</AccordionTrigger>
              <AccordionContent className='text-xs text-gray-400'>
                Spendly is a user-friendly financial management SAAS platform designed to help individuals and businesses track expenses, create budgets, receive customized alerts, and secure their financial data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Spendly?</AccordionTrigger>
              <AccordionContent className='text-xs text-gray-400'>
                Spendly is a user-friendly financial management SAAS platform designed to help individuals and businesses track expenses, create budgets, receive customized alerts, and secure their financial data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Spendly?</AccordionTrigger>
              <AccordionContent className='text-xs text-gray-400'>
                Spendly is a user-friendly financial management SAAS platform designed to help individuals and businesses track expenses, create budgets, receive customized alerts, and secure their financial data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Spendly?</AccordionTrigger>
              <AccordionContent className='text-xs text-gray-400'>
                Spendly is a user-friendly financial management SAAS platform designed to help individuals and businesses track expenses, create budgets, receive customized alerts, and secure their financial data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

export default page


