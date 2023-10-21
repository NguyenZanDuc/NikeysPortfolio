import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='sm:px-32 text-gray-500 text-sm sm:py-20 px-10 py-8 flex flex-col sm:gap-20 gap-8 sm:flex-row'>
      <div className="space-y-6 flex-1">
        <div className='space-y-6'>
          <p className='font-bold'>spendly</p>
          <p>42 Market Avenue Westminster London W1B 4DE United Kingdom</p>
          <p>contactspendly@email.com</p>
          <p>+44 111 333 555</p>
        </div>
      </div>
      <div className="flex flex-1 justify-between gap-20">
          <div className="space-y-6">
            <p className='text-spendly'>Menu</p>
            <p>Home</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="space-y-6">
            <p className='text-spendly'>Useful Links</p>
            <p>Testimonials</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Licensing</p>
            <p>404</p>
          </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between bg-gray-100 rounded-xl">
        <p className='text-spendly'>Download App</p>
        <p>Manage your finances on the go with the Spendly mobile app. Download it today for easy expense tracking and customized alerts.</p>
        <div className='flex justify-center gap-10'>
          <button className='px-4 py-2 bg-spendly text-white font-bold rounded-full'>App Store</button>
          <button className='px-4 py-2 bg-spendly text-white font-bold rounded-full'>Google play</button>
        </div>
      </div>
    </div>
  )
}

export default Footer


