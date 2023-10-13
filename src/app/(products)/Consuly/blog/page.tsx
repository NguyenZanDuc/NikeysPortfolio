import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Hero />
            <Content />
        </div>
    )
}

export default page

const Hero = () => {
    return (
        <div className='w-screen bg-consulyText relative z-10 text-white flex justify-center flex-col gap-5 items-center p-4 md:p-32'>
            <p className='text-6xl font-semibold'>Blogs</p>
            <p className='md:w-1/2 text-center'>Righteous indignation and dislike men who are so beguiled and demoralized by the charms of we denounce with righteous indignation and dislike men who are so beguiled and demoralized </p>
        </div>
    )
}

const Content = () => {
    const blogs = [{
        title: "Boosting Business Success: The Power of Strategic Consultancy",
        date: "Mar 24, 2023",
        description: "In a competitive business landscape, strategic consultancy has become indispensable.",
        image: "https://framerusercontent.com/images/r954eJffhaYpoYFKoiTeOq27AdI.jpg?scale-down-to=1024"
    }, {
        title: "How Consultancy Firms Foster Creativity",
        date: "",
        description: "Discover how a consultancy firm can propel your business forward.",
        image: "https://framerusercontent.com/images/b99BIwk7wdXDertEW1ahEnuQz0.jpg?scale-down-to=512"
    }, {
        title: "Streamlining Operations with Consultancy",
        date: "",
        description: "Optimize your processes, boost productivity, and reduce costs with the expertise of a consultancy.",
        image: "https://framerusercontent.com/images/U0eqq0xMDsL0Nf8CDuUahbEAR9E.jpg?scale-down-to=2048"
    }, {
        title: "Charting a Path to Success with Consultancy",
        date: "",
        description: " Leverage the strategic prowess of a consultancy firm to develop actionable plans.",
        image: "https://framerusercontent.com/images/iwHZntXPxelX1edy5gO9SJ1UPM.jpg?scale-down-to=512"
    }]
    return (

        <div className=' md:gap-14 gap-4 grid md:grid-cols-2 p-4  md:p-32'>
            {blogs.map((blog, index) => {
                return (
                    <CardBlog key={index} className='shadow-md rounded-xl' title={blog.title} date={blog.date} description={blog.description} image={blog.image} />
                )
            }
            )}
        </div>
    )
}
type CardBlogProps = {
    className?: string,
    title: string
    date: string
    description: string
    image: string
}
const CardBlog = ({ className, title, date, description, image }: CardBlogProps) => {
    return (
        <div className={className}>
            <div className='basis-1/3'>
                <Image src={image} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} className='rounded-t-lg shadow-md' ></Image>
            </div>
            <div className=' p-2 flex flex-col gap-4 w-2/3 justify-start flex-1'>
                <p className='text-gray-600'>{date}</p>
                <p className='font-semibold'>{title}</p>
                <p className='text-gray-500 text-sm'>{description}</p>
                <Link className='text-sm text-consulyText' href={'#'}>Read more</Link>
            </div>
        </div>
    )
}