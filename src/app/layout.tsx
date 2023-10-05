import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata  } from 'next/font/google'
// import styles from './global.css'
 

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
    <html lang="en"  className={`${inconsolata_Regular.variable}`}>
      <body >{children}</body>
    </html>
  )
}
