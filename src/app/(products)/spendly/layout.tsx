import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


 
export const metadata: Metadata = {
  title: 'Vible',
  description: 'Services',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className='w-screen overflow-hidden pt-20'>
        <Navbar />
        {children}
        <Footer />
   </div>
  )
}
