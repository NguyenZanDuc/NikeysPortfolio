
import type { Metadata } from 'next'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
 
export const metadata: Metadata = {
  title: 'Consuly',
  description: 'Business',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className='w-screen overflow-hidden'>
        <Navbar />
        {children}
        <Footer />
   </div>
  )
}
