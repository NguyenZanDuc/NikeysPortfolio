
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AiOutlineShareAlt } from 'react-icons/ai'


 
export const metadata: Metadata = {
  title: 'Axels',
  description: 'Services'
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className='sm:p-10 p-4 w-screen overflow-hidden'>
        <Navbar />
        {children}
        <Footer />
   </div>
  )
}
