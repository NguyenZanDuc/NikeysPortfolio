import React from 'react'
import HeadSection from '../components/HeadSection'
import { Tabs, TabsList, TabsTrigger } from '@/app/components/UI/Tabs'
import PricingCard from '../components/PricingCard'
import PricingTable, { Features } from '../components/PricingTable'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/UI/Accordion'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen sm:space-y-32 sm:p-32  space-y-10 py-10'>
        {/* Pricing */}
      <section id="Pricing" className='sm:space-y-10 space-y-4'>
        <HeadSection center={true} title={'Choose the Plan That Fits Your Needs'} subtitle={'Pricing Plans'} description={'Discover the perfect plan for your financial needs with Spendly is flexible pricing options.'} />
        <div className='flex justify-center'>
          <Tabs defaultValue="account" className="w-full flex justify-center cursor-pointer">
            <TabsList>
              <TabsTrigger value="account">Monthly</TabsTrigger>
              <TabsTrigger value="password">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className='flex justify-center gap-5 flex-wrap'>
          <PricingCard type={"FREE"} price={0} features={[
            'Expense Tracking',
            'Transaction Categorization',
            'Basic Budget Management',
            'Limited Customized Alerts',
            'Transaction History',
            'Basic Security Measures',
          ]} />
          <PricingCard type={'Pro-Most Popular'} price={10} features={[
            'All FREE Features',
            'Enhanced Budget Management',
            'Advanced Customized Alerts',
            'Comprehensive Transaction Reports',
            'Multi-Device Access',
            'Secure Data Encryption',
            'Priority Customer Support'
          ]} />
          <PricingCard type={"PREMIUM"} price={20} features={[
            'All PRO Features',
            'Expense Reports',
            'Receipt Scanning',
            'Investment Tracking',
            'Tax Preparation Assistance',
            'Premium Security Suite',
            '24/7 VIP Customer Support'
          ]} />
        </div>
      </section>
      {/* Compare */}
      <section id='compare' className='sm:space-y-10 space-y-4'>
        <HeadSection center={true} title={'Compare Price Tiers'} subtitle={'Compare'} description={'Find the perfect plan that matches your financial goals.'} />
        <div className='w-full rounded-2xl shadow-xl sm:p-10 p-4'>
            <PricingTable data={[
                {
                    title: 'Expense Tracking',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Transaction Categorization',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Basic Budget Management',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Limited Customized Alerts',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Transaction History',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Basic Security Measures',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Enhanced Budget Management',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Advanced Customized Alerts',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Comprehensive Transaction Reports',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Multi-Device Access',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Secure Data Encryption',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Priority Customer Support',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Expense Reports',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Receipt Scanning',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Investment Tracking',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Tax Preparation Assistance',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: 'Premium Security Suite',
                    features: [Features.free, Features.premium, Features.pro]
                },
                {
                    title: '24/7 VIP Customer Support',
                    features: [Features.free, Features.premium, Features.pro]
                },
            ]} />
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