import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

 
export const metadata: Metadata = {
  title: 'TechPro',
  description: 'Services',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className='z-10 relative'>
        <Navbar />
        {children}
        <Footer />
   </div>
  )
}
