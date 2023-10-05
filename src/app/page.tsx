import Image from 'next/image'

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
    </div>
  )
}