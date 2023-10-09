import Link from "next/link"
import { Logo } from "./Navbar"

 const Footer = () => {
    return (
      <div>
        <div className='bg-consulyText text-white rounded-md p-24'>
          <div className='w-1/2 mx-auto items-center flex flex-col gap-10'>
            <p className='text-5xl font-semibold text-center'>We are ready to assist you! connect with us today.</p>
            <p className='text-lg text-center'>The mockups will be used to visually communicate to features and functionality of the software.</p>
            <div>
              <Link className='px-4 py-2 rounded-md text-black bg-white' href={'#'} >Get Free Consultation</Link>
            </div>
          </div>
        </div>
        <div className='container mx-auto p-10 flex'>
          <div className=' px-10 space-y-4'>
            <Logo />
            <p className='text-sm text-gray-500 w-3/4'>We denounce with righteous indignation and dislike  and demoralized.</p>
            <input type="text" className='outline-none w-2/3 p-2 rounded-md border-gray-300 border-[0.4px]' placeholder='name@email.com' />
            <Link className='px-4 py-2 block w-2/3 rounded-md text-white bg-consulyText' href={'#'} >Learn More</Link>
          </div>
          <div className='flex flex-1 justify-between'>
            <div className='space-y-3'>
              <p className='font-semibold'>Essential Links</p>
              <p>Home</p>
              <p>About us</p>
              <p>Case Study</p>
              <p>Service</p>
              <p>Blog</p>
            </div>
            <div className='space-y-3'>
              <p className='font-semibold'>Pages</p>
              <p>Career</p>
              <p>Team</p>
              <p>Contact</p>
            </div>
            <div className='space-y-3'>
              <p className='font-semibold'>Utility Pages</p>
              <p>Privacy Policy</p>
              <p>Terms & Condition</p>
              <p>404</p>
              <p>Website</p>
            </div>
            <div className='space-y-3'>
              <p className='font-semibold'>Other Products</p>
              <p>Magneto</p>
              <p>Saasco</p>
              <p>Hirer</p>
              <p>Offtech</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer