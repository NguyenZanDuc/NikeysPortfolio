import { cn } from '@/app/lib/utils'
import Image from 'next/image'
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
            <p className='md:text-6xl text-2xl font-semibold'>Service Details</p>
            <p className='md:w-1/2 text-center'>Our collaborative approach fosters strong partnerships with our clients, ensuring that we truly understand your business and its potential.</p>
        </div>
    )
}
const Content = () => {
    return (
        <div className='md:p-32 p-4  space-y-10'>
            <CardContent image='https://framerusercontent.com/images/SQsoJi4hQP5isz9p3GJbM9YzY6o.png' title='The best team for marketing  management' content='Vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores molestias excepturi sint occaecati cupiditate similique sunt in culpa.' />
            <CardContent className='md:flex-row-reverse' title={'The best quality services for my creative team'} image={'https://framerusercontent.com/images/STTQ6ETFPERy2jpLLTfqzsfu1c.png?scale-down-to=512'} content={'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate culpa.We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who quos dolores et quas molestias their duty.'}  />
            <CardContent title={'Easy to marketing for your business and grow'} image={'https://framerusercontent.com/images/qShb8XHWc8Q6CVBKT1h4JMB8uY.png?scale-down-to=512'} content={'At vero eos et accusamus et iusto odio dignissimos an ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.'} />
        </div>
    )
}
type CardDataProps = {
    className?: string
    title: string
    image: string
    content: string
}
const CardContent = ({className, title, image, content}:CardDataProps) => {
    return (
        <div className={cn("flex flex-col md:flex-row gap-4 md:gap-10",className)}>
            <div className='flex-1'>
                <Image src={image} width={1000} height={1000} style={{ width: "100%", height: "auto" }} className='rounded-md' alt={''} />
            </div>
            <div className='flex-1'>
                <p className='text-3xl font-semibold'>{title}</p>
                <p className='text-gray-400'>{content}</p>
            </div>
        </div>
    )
}