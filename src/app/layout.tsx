import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono,Inconsolata  } from 'next/font/google'
// import styles from './global.css'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})
const inconsolata_Regular = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata-regular',
  display: 'swap',
})
 

export const metadata: Metadata = {
  title: 'NikeyS',
  description: 'Developer, Designer, and Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${inter.variable} ${roboto_mono.variable} ${inconsolata_Regular.variable}`}>
      <body >{children}</body>
    </html>
  )
}
