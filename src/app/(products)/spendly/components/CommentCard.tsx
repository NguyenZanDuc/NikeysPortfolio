import { Avatar, AvatarImage } from '@/app/components/UI/Avatar'
import React from 'react'
import { BiStar } from 'react-icons/bi'
import { BsStarFill, BsTwitter } from 'react-icons/bs'

type Props = {
    star: number
    content: string
    author: {
        name: string
        avatar: string
        job: string
        link: string
    }
}

const CommentCard = (props: Props) => {

    return (
        <div className='min-[360px] h-[340px] space-y-6 rounded-xl shadow-lg p-10 flex flex-col'>
            <div className='flex gap-1'>
                {new Array(5).fill(0).map((_, i) => (
                    <BsStarFill key={i} className={i < props.star ? "text-spendlyText" : "text-gray-300"} />
                ))}
            </div>
            <p className='text-gray-500 flex-1'>{props.content}</p>
            <Author {...props.author} />
        </div>
    )
}

export default CommentCard

type AuthorProps = {
    name: string
    avatar: string
    job: string
    link: string
}

const Author = (props: AuthorProps) => {
    return (
        <div className='flex items-center gap-2'>
            <Avatar className='w-10 h-10' >
                <AvatarImage src={props.avatar} />
            </Avatar>
            <div className='flex-1 flex flex-col justify-around'>
                <p className="font-bold">{props.name}</p>
                <p className="text-sm  text-gray-400">{props.job}</p>
            </div>
            <div>
                <BsTwitter className="w-6 h-6 text-gray-600" />
            </div>
        </div>
    )
}