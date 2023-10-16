"use client"
import GroupLink from './components/GroupLink'
import { Button } from './components/UI/Button'

export default function Home() {
  return (
    <main>
        <Nikey  />
    </main>
  )
}
const Nikey = () => {
  return (
    <div className='w-screen bg-gradient-to-tr from-gray-50 to-slate-500 h-screen flex justify-center items-center'>
      <p className='text-9xl font-inconsolata font-bold bg-gradient-to-tr to-gray-50 from-slate-500 bg-clip-text text-transparent'>NikeyS</p>
      <GroupLink />
      <Button onClick={()=>{console.log('hello')}} variant='outline' size='sm' className='absolute bottom-0 right-0 m-4'>Contact</Button>
    </div>
  )
}