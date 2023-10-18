
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


 
export const metadata: Metadata = {
  title: 'CalmHome',
  description: 'Services',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className='text-black'>
        <Navbar />
        {children}
        <Footer />
   </div>
  )
}
