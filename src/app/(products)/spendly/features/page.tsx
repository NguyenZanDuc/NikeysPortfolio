import Image from 'next/image'
import React from 'react'
import HeadSection from '../components/HeadSection'
import { Button } from '@/app/components/UI/Button'
import TransactionCard from '../components/TransactionCard'
import { Tabs, TabsList, TabsTrigger } from '@/app/components/UI/Tabs'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen sm:px-32 px-4 sm:space-y-32 sm:py-32 py-10 space-y-10'>
        {/* My card */}
      <section id="Mycards" className="sm:space-y-10 space-y-4">
        <HeadSection center={true} title={'Simplified Financial Control'} subtitle={'My Cards'} description={'Spendly simplifies your financial control. Manage budgets and track all your linked credit cards effortlessly. Achieve financial goals and stay organized with ease.'} />
        <div className='flex justify-center'>
          <Button className='bg-white border border-gray-500 text-gray-500 rounded-full'>Learn More</Button>
        </div>
        <div className='w-full sm:h-[600px] h-[400px]  relative overflow-hidden'>
          <div className='h-[300px] absolute bottom-0 shadow-inner  shadow-black left-0 w-full rounded-3xl bg-black  overflow-hidden sm:overflow-visible'>
            <div className='absolute bottom-0 rotate-90 left-1/2 -translate-x-1/2 -translate-y-4 z-40 w-[320px]  sm:w-[550px] '>
              <Image src="https://framerusercontent.com/images/Ec3wuCe0kTZpaLUVFQ4kXobNHEs.svg" alt={''} width={1187} height={1000} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className='absolute bottom-0 rotate-[100deg] left-2/3  -translate-x-1/3 translate-y-4 w-[320px]  sm:w-[550px]'>
              <Image src="https://framerusercontent.com/images/qhpud93IFFbuRa7meEcftJmtcH8.svg" alt={''} width={1187} height={1000} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className='absolute bottom-0 -rotate-[100deg] left-1/3 -translate-x-2/3 translate-y-4 w-[320px]  sm:w-[550px]'>
              <Image src="https://framerusercontent.com/images/2hozmVL0Np1F60CMgx8O5ur1eI.svg" alt={''} width={1187} height={1000} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className='absolute sm:w-[90%] w-full left-0 h-5 bg-gradient-to-t from-black to-transparent rounded-full bottom-0 sm:left-10 z-50 bg-opacity-50'></div>
          </div>
        </div>

      </section>
      {/* Transaction */}
      <section id="Transaction" className="flex gap-10 flex-col sm:flex-row">
        <div className="flex-1">
          <HeadSection center={false} title={'Effortless Transaction Monitoring'} subtitle={'Transaction Tracking'} description={'Track all your credit card transactions effortlessly with Spendly. Stay organized, spot irregularities, and take control of your finances.'} />
        </div>
        <div className="flex-1 sm:p-10 p-4  rounded-3xl bg-gray-100">
          <TransactionCard title={'Panda Market Ltd.'} subtitle={new Date('2023-09-26').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} number={-85} />
          <TransactionCard title={'Panda Market Ltd.'} subtitle={new Date('2023-09-26').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} number={-25} />
          <TransactionCard title={'Panda Market Ltd.'} subtitle={new Date('2023-09-26').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} number={2900} />
        </div>
      </section>
 {/* Customized Alerts */}
      <section id="Aleart" className='flex flex-col-reverse sm:flex-row gap-10'>
        <div className="flex-1">
          <Image src="/SpendlyAlert.png" alt={''} width={1187} height={1000} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
        </div>
        <div className="flex-1">
          <HeadSection center={false} title={'Stay Informed, Your Way'} subtitle={'Customized Alerts'} description={'Stay in control with Spendly is Customized Alerts. Get personalized notifications for payments and spending patterns, empowering your financial decisions.'} />
        </div>
      </section>
      {/* Secure */}
      <section id="Secure" className='flex flex-col sm:flex-row gap-10'>
        <div className="flex-1">
          <HeadSection center={false} title={'Bank-Grade Protection'} subtitle={'Secure Data Encryption'} description={'Your financial data is safe with Spendly. We use bank-grade encryption to protect your sensitive information, ensuring the utmost security and peace of mind.'} />
        </div>
        <div className="flex-1">
          <div className='sm:w-2/3 w-full bg-slate-100 rounded-2xl p-6'>
            <Image src="https://framerusercontent.com/images/w6ARwiySoJzuXnSv0ajnLod4CU.svg" alt={''} width={1187} height={1000} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </div>
        </div>
      </section>
      {/* Expend */}
      <section id='expend'>
        <HeadSection center={true} title={'Simplify Expense Reporting'} subtitle={'Expense Reports'} description={'Spendly is Expense Reports feature simplifies expense tracking, tax preparation, and business reimbursements.'} />
        <div className='w-full rounded-2xl sm:h-[600px] h-auto overflow-hidden bg-black sm:space-y-10 space-y-4 pt-10 sm:px-40 px-4'>
          <Tabs defaultValue="account" className="w-full flex justify-center cursor-pointer">
            <TabsList>
              <TabsTrigger value="account">Tracking</TabsTrigger>
              <TabsTrigger value="password">Scaning</TabsTrigger>
              <TabsTrigger value="notifications">Report</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-10'>
            <div className='flex-1 text-white sm:space-y-10 space-y-4 '>
              <HeadSection center={false} title={'Stay on Top of Spending'} subtitle={''} description={'Effortlessly track your expenses, categorize transactions, and gain insights into your spending habits. Take control of your financial health with Spendly is Expense Tracking.'} />
              <div className='flex sm:justify-start px-4 justify-center'>
                <Button variant={'outline'} className='rounded-full  text-gray-400 border-gray-400' >Learn More</Button>
              </div>
            </div>
            <div className='flex-1 sm:w-2/3 flex justify-center w-full'>
              <Image src="https://framerusercontent.com/images/zYegbbtmYS63MiMAOFbNFQUtEM.svg" alt={''} width={1187} height={1000} className='' style={{ width: "75%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
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


