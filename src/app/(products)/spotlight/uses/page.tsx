import React from 'react'
import CardContent from '../components/Card/CardContent'

type Props = {}

function page({}: Props) {
    const uses = [
        {
            detail:'Workstation',
            title: '16” MacBook Pro, M1 Max, 64GB RAM (2021)',
            description: 'I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I have never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.'
        },
        {
            title:'Apple Pro Display XDR (Standard Glass)',
            description: 'The only display on the market if you want something HiDPI and bigger than 27”. When you are working at planetary scale, every pixel you can get counts.'
        },
        {
            title:'IBM Model M SSK Industrial Keyboard',
            description: 'They don not make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.'
        },
        {
            title:'Apple Magic Trackpad',
            description: 'Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.'
        },
        {
            title:'Herman Miller Aeron Chair',
            description: 'If I am going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.'
        },
        {
            detail:'Development tools',
            title:'Sublime Text 4',
            description: 'I don not care if it is missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.'
        },
        {
            detail:'Design',
            title:'iTerm2',
            description: 'I am honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it is what I use.'
        },
        {
            detail:'Productivity',
            title:'TablePlus',
            description: 'Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.'
        },
        {
            title:'Figma',
            description: 'We started using Figma as just a design tool but now it is become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.'
        },
        {
            title:'Reflect',
            description: 'It is not the newest kid on the block but it is still the fastest. The Sublime Text of the application launcher world.'
        },
        {
            title:'SavvyCal',
            description: 'Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it is still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.'
        },{
            title:'Focus',
            description: 'Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.'
        }
    ]
  return (
    <div className=' md:p-28 p-4 md:space-y-10 space-y-4 '>
        <p className='md:text-4xl text-2xl font-bold'> I have spoken at events all around the world and been interviewed for many podcasts.</p>
        <p className='text-gray-500'>One of my favorite ways to share my ideas is live on stage, where there is so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.</p>
        <div className='w-full'>
            {uses.map((article, index) => (
                <CardContent key={index} {...article} />
            ))}
        </div>
    </div>
  )
}

export default page







