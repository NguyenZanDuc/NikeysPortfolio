import { Button } from '@/app/components/UI/Button'
import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='py-20 space-y-10'>
        <p className='text-center text-axels'>ABOUT US</p>
        <p className='text-6xl w-1/2 mx-auto text-center'>Creaftsmanship Meets Timeless Elegancs</p>
        <p className=' text-center w-1/2 mx-auto text-gray-700'>We are not just a jewelry brand; we are the storytellers of your most cherished moments, the keepers of your milestones, and the creators of enduring beauty. Welcome to Axels, where exquisite craftsmanship meets timeless elegance.</p>
        <div className='h-[700px] relative w-full'>
          <Image src={'https://framerusercontent.com/images/kbOrsOMF8pMkMH6SntJTPO88bQ.png'} fill className=' ' alt="Picture of the author" />
        </div>
        <div className='flex flex-col sm:flex-row text-sm py-10'>
            <p className='flex-1 text-4xl'>Our Journey</p>
            <div className=' flex-1 space-y-5'>
                <p>The journey of Axels is a tale of relentless passion and unwavering dedication. It began with a vision—a vision to redefine luxury, to make it more than just a material possession, but a tangible expression of the heart is deepest emotions.</p>
                <p>Founded by a team of artisans, designers, and dreamers, Axels came to life as a response to the impersonal nature of mass-produced jewelry. We recognized the need for jewelry that tells a story, jewelry that becomes a part of your life is narrative, jewelry that carries your memories and milestones.</p>
                <p>From our humble beginnings, we embarked on a path of discovery, craftsmanship, and creativity. Our ateliers became the canvas where ideas turned into reality, where raw materials transformed into treasures, and where every piece was imbued with a touch of artistry.</p>
                <p>As we grew, so did our commitment to the art of fine jewelry. Each creation that left our workshop was a testament to our dedication to excellence. We knew that our pieces were not mere adornments but symbols of love, commitment, and personal identity.</p>
                <p>Over the years, Axels has become a name synonymous with grace and sophistication. Our jewelry has graced the most intimate moments in people is lives—engagements, weddings, anniversaries, and more. We have celebrated with you as you marked achievements, milestones, and personal victories.</p>
                <p>Our journey has been a constant evolution, fueled by the stories you have shared with us. Your trust and loyalty have been our guiding stars, inspiring us to continually push the boundaries of creativity and craftsmanship.</p>
                <p>Today, as we look back on our journey, we remain humbled by the love and support we have received from our valued customers. But we also look forward with boundless enthusiasm, as we continue to explore new horizons and create jewelry that is not just beautiful but meaningful.</p>
                <p>As Axels continues to evolve, we invite you to be a part of our journey. Explore our collections, share in our passion for artistry, and let us be a part of your life is most beautiful moments. With Axels, your journey meets our craftsmanship, and together, we create stories that last a lifetime.</p>
                <p>Thank you for being a part of the Axels story—a story that weaves together love, art, and timeless elegance.</p>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row py-10 border-t-[0.1px]'>
            <p className='flex-1 text-4xl'>Craftmanship</p>
            <div className='flex-1 space-y-5'>
                <p>At Axels, craftsmanship is not just a skill; it is an art form. We believe that every piece of jewelry should be a masterpiece, meticulously crafted to stand the test of time and capture the essence of its wearer. Our commitment to excellence in craftsmanship is at the heart of everything we do.</p>
                <div>
                    <p className='font-semibold'>The Artisans:</p>
                    <p>Our artisans are the true guardians of our craft. With years of experience and a profound passion for their work, they bring each design to life with precision and artistry. From the moment a concept takes shape to the final finishing touches, our artisans pour their heart and soul into every piece. Their attention to detail ensures that every facet of a diamond sparkles brilliantly, and every curve of a metal setting is flawless.</p>
                </div>
                <div>
                    <p className='font-semibold'>Uncompromising Quality:</p>
                    <p>We source only the finest materials to create our jewelry. From the ethically-sourced diamonds and gemstones to the high-quality metals, we spare no effort in ensuring that each component meets the highest standards of quality. Our commitment to ethical sourcing and sustainability extends to every facet of our creations, so you can wear our jewelry with pride, knowing it aligns with your values.</p>    
                </div>
                <div>
                    <p className='font-semibold'>Time-Honored Techniques:</p>
                    <p>While we embrace innovation and contemporary design, we also hold onto time-honored jewelry-making techniques. Our ateliers blend modern technology with traditional craftsmanship, resulting in pieces that marry the best of both worlds. It is this blend of old and new that gives our jewelry a timeless quality, making it relevant and cherished for generations.</p>
                </div>
                 <div>
                    <p className='font-semibold'>Customization and Personalization:</p>
                    <p>We understand that jewelry is an intimate form of self-expression. That is why we offer customization and personalization options, allowing you to create a piece that is uniquely yours. Whether it is engraving a special date, selecting your preferred metal, or choosing a specific gemstone, our artisans are here to bring your vision to life.</p>
                </div>
                <div>
                    <p className='font-semibold'>Quality Assurance:</p>
                    <p>Before each piece leaves our workshop, it undergoes rigorous quality control. We ensure that it not only meets our exacting standards but also exceeds your expectations. Our dedication to quality assurance means that when you wear Axels jewelry, you wear the mark of craftsmanship at its finest.</p>
                </div>
                <p>At Axels, we believe that craftsmanship is not just a process; it is a labor of love. We are proud to share our artistry with you, to be a part of your life is most significant moments, and to create jewelry that embodies the spirit of elegance and enduring beauty. Explore our collections, and experience the craftsmanship that defines Axels.</p>
            </div>
        </div>
        <div className='h-[500px] relative w-full'>
          <Image src={'https://framerusercontent.com/images/lwWSRpm9ihnLqpWiEKW3NXpyJU.png'} fill className=' ' alt="Picture of the author" />
        </div>
        <div className='flex flex-col sm:flex-row text-sm py-10'>
            <p className='flex-1 text-4xl'>Company Values</p>
            <div className=' flex-1 space-y-5'>
                <div>
                    <p className=' font-semibold'>Excellence</p>
                    <p>We are committed to the relentless pursuit of excellence in everything we do. From the craftsmanship of our jewelry to the service we provide, we strive for perfection, knowing that excellence is the foundation of enduring beauty.</p>
                </div>
                <div>
                    <p className=' font-semibold'>Integrity</p>
                    <p>Integrity is the cornerstone of our business. We operate with transparency, honesty, and fairness in all our interactions—with our customers, partners, and within our team. Trust is the bedrock of our relationships.</p>
                </div>
                <div>
                    <p className=' font-semibold'>Artistry</p>
                    <p>We celebrate the artistry of fine jewelry. Our creations are not just accessories; they are works of art that embody creativity and passion. We believe that every piece should tell a unique story.</p>
                </div>
                <div>
                    <p className=' font-semibold'>Customer-Centric</p>
                    <p>Our customers are at the heart of everything we do. We listen to your needs, understand your desires, and strive to exceed your expectations. Your satisfaction is our ultimate goal.</p>
                </div>
                <div>
                    <p className=' font-semibold'>Ethical Sourcing</p>
                    <p>We are committed to responsible and ethical sourcing of materials. Our dedication to sustainability and ethical practices ensures that our jewelry not only reflects beauty but also respect for our planet and its people.</p>
                </div>
                <div>
                    <p className=' font-semibold'>Personalization</p>
                    <p>We understand that jewelry is deeply personal. We embrace customization and personalization, allowing you to create pieces that reflect your individuality and commemorate your most cherished moments.</p>
                </div>
            </div>
        </div>
        <div className='border-y-[0.2px] p-20 flex justify-center items-center flex-col gap-10'>
                <p className='text-5xl'>Let is Work with Us!</p>
                <Button variant="outline" className='uppercase border-black bg-white '>Contact us now</Button>
        </div>
    </div>
  )
}

export default page

