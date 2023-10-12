
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
   <div className='bg-black text-white'>
        <Navbar />
        {children}
        <Footer />
   </div>
  )
}
