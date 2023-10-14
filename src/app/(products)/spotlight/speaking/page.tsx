import React from 'react'
import CardContent from '../components/Card/CardContent'

type Props = {}







const page = (props: Props) => {
    const events = [
        {
            detail:'Conferences',
            head: 'SysConf 2021',
            title: 'In space, no one can watch you stream — until now',
            description: 'A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.',
            href: '#',
            textLink: 'Watch video >'
        },
        {
            head: 'Business of Startups 2020',
            title: 'Lessons learned from our first product recall',
            description: 'They say that if you are not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated than that.',
            href: '#',
            textLink: 'Watch video >'
        },
        {
            detail:'Podcasts',
            head: 'Encoding Design, July 2022',
            title: 'Using design as a competitive advantage',
            description: 'How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.',
            href: '#',
            textLink: 'Watch video >'
        },
        {
            head: 'Business of Startups 2020',
            title: 'Lessons learned from our first product recall',
            description: 'They say that if you are not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated than that.',
            href: '#',
            textLink: 'Watch video >'
        },
        {
            head: 'Encoding Design, July 2022',
            title: 'Using design as a competitive advantage',
            description: 'How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.',
            href: '#',
            textLink: 'Watch video >'
        },
    ]
  return (
    <div className=' md:p-28 p-4 md:space-y-10 space-y-4 '>
        <p className='md:text-4xl text-2xl font-bold'> I’ve spoken at events all around the world and been interviewed for many podcasts.</p>
        <p className='text-gray-500'>One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.</p>
        <div className='w-full'>
            {events.map((article, index) => (
                <CardContent key={index} {...article} />
            ))}
        </div>
    </div>
  )
}

export default page