
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'STYLZ| A premium Hair Salon',
  description: 'Style Hair Salon',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-[#FAFAFA] md:px-20 text-white w-screen overflow-hidden'>
      <div className=' border-x-[0.1px] md:p-10 p-4 border-gray-300 text-black bg-white'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
