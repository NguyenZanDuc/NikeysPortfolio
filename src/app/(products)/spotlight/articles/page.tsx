import React from 'react'
import CardContent from '../components/Card/CardContent'

type Props = {}

function page({}: Props) {
    const articles = [
        {
            detail: 'September 5, 2022',
            title: 'Crafting a design system for a multiplanetary future',
            description: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
            href: '#',
            textLink: 'Read article'
        },
        {
            detail: 'September 2, 2022',
            title: 'Introducing Animaginary: High performance web animations',
            description: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
            href: '#',
            textLink: 'Read article'
        },
        {
            detail: 'July 14, 2022',
            title: 'Rewriting the cosmOS kernel in Rust',
            description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
            href: '#',
            textLink: 'Read article'
        }
    ]
  return (
    <div className=' md:p-28 p-4 md:space-y-10 space-y-4 '>
        <p className='md:text-4xl text-2xl font-bold'> Writing on software design, company building, and the aerospace industry.</p>
        <p className='text-gray-500'>All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>
        <div className='w-full'>
            {articles.map((article, index) => (
                <CardContent key={index} {...article} />
            ))}
        </div>
    </div>
  )
}

export default page







