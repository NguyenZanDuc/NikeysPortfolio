import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex sm:p-20 border-t-[0.1px] border-gray-400 flex-col sm:flex-row  justify-between gap-10'>
      <div className="space-y-3 sm:basis-1/3">
        <p>CalmHome</p>
        <p>We are dedicated to creating tranquil, harmonious living spaces that offer peace and comfort to everyone</p>
      </div>
      <div className="space-y-3">
        <p>Company</p>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Article & News</p>
      </div>
      <div className="space-y-3">
        <p>Services</p>
        <p>Kitchan</p>
        <p>Living Area</p>
        <p>Bathroom</p>
      </div>
      <div className="space-y-3">
        <p>Contact Us</p>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201 contact@calmhome.com (123) 456 - 7890</p>
      </div>
    </div>
  )
}

export default Footer


