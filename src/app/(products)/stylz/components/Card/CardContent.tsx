import React from 'react'
import Image from 'next/image'
import InView from "@/app/components/Animation/InView"
import Link from 'next/link'
import { cn } from '@/app/lib/utils'

type CardContentProps = {
    image: string
    title: string
    description?: string
    href?: string
    linkText?: string,
    className?: string,
    children?: React.ReactNode
    details?: Detail[]
}
type Detail ={
    icon: React.ReactNode
    name: string
}
const CardContent = ({ image, title, description, href, linkText, className, children,details }: CardContentProps) => {
    return (
        <div className={cn("flex md:flex-row flex-col gap-5 h-[600px]", className)}>
            <InView delay={0.2} className="rounded-2xl flex-1 overflow-hidden">
                <Image
                    src={image}
                    alt={''}
                    width={1000}
                    height={1000}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </InView>
            <InView delay={0.4} className="rounded-2xl bg-[#1D1D1D] flex  flex-col flex-1 justify-center items-center gap-6">
                <div className='md:text-5xl text-2xl font-semibold'>{title}</div>
                <div className='text-sm text-center md:w-1/2 text-gray-300'>{description}</div>
                <div className='text-sm text-center md:w-2/3 text-gray-300'>{children}</div>
                <div className='flex justify-center gap-5'>
                    {details&&details.map((detail, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-2 items-center'>
                                <div className=''>{detail.icon}</div>
                                <div className='md:text-sm text-center text-xs'>{detail.name}</div>
                            </div>
                        )
                    }
                    )}
                </div>
                {linkText&&<Link href={href??'#'} className='font-semibold md:text-base text-xs p-2 inline-block rounded-md border'>{linkText}</Link>}
            </InView>
        </div>
    )
}
export default CardContent