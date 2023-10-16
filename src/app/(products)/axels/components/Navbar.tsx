import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineShareAlt, } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
type Props = {}

const Navbar = (props: Props) => {
    return (
        <div>
            <div className='flex justify-between items-center pb-3 text-axels '>
                <p className='sm:flex hidden gap-2 items-center basis-1/4'>
                    <AiOutlineShareAlt />
                    Join the social Club for exclusive
                </p>
                <p className='text-3xl text-black'>AXELS</p>
                <div className='sm:flex hidden  gap-2 basis-1/4 justify-end '>
                    <FaTwitter />
                    <AiFillFacebook />
                    <AiFillInstagram />
                </div>
                <div className='block sm:hidden'>
                    <BiMenu className="w-8 h-8" />
                </div>
            </div>
            <div className='sm:flex hidden  font-semibold py-3 border-t-[0.1px] border-gray-500 justify-between items-center'>
                <p className='basis-1/6'>(+123) 456 789</p>
                <div className='gap-10 flex '>
                    <Link href={'/axels'}>HOME</Link>
                    <div className='group cursor-pointer relative'>
                        CATEGORY
                        <CategoryHover />
                    </div>
                    <Link href={'/axels'}>ABOUT</Link>
                    <Link href={'/axels'}>CONTACT</Link>
                </div>
                <p className='font-normal basis-1/6 justify-end flex'>Customer Support</p>
            </div>
        </div>
    )
}

export default Navbar

const CategoryHover = () => {
    return (
        <div className='p-10 flex absolute top-full z-0 opacity-0 group-hover:opacity-100 duration-300 group-hover:z-50 left-1/2 -translate-x-1/2 bg-white shadow-md justify-center gap-10'>
            <CategoryCard image={'https://framerusercontent.com/images/DdMSTOefO0YEho190OisMkszb8.png?scale-down-to=512'} title={'BRACELETS'} href={''} />
            <CategoryCard image={'https://framerusercontent.com/images/DdMSTOefO0YEho190OisMkszb8.png?scale-down-to=512'} title={'BRACELETS'} href={''} />
            <CategoryCard image={'https://framerusercontent.com/images/DdMSTOefO0YEho190OisMkszb8.png?scale-down-to=512'} title={'BRACELETS'} href={''} />
            <CategoryCard image={'https://framerusercontent.com/images/DdMSTOefO0YEho190OisMkszb8.png?scale-down-to=512'} title={'BRACELETS'} href={''} />
            <CategoryCard image={'https://framerusercontent.com/images/DdMSTOefO0YEho190OisMkszb8.png?scale-down-to=512'} title={'BRACELETS'} href={''} />
        </div>
    )
}
type CategoryCardProps = {
    image: string
    title: string
    href: string
}
const CategoryCard = (props: CategoryCardProps) => {
    return (
        <div className='w-[240px] group/category'>
            <div className='h-[400px] group-hover/category:-translate-y-2 duration-300 relative'>
                <Image src={props.image} alt="Picture of the author" fill />
            </div>
            <p className='text-center uppercase'>{props.title}</p>
            <Link  href={'#'} className=' opacity-0 translate-x-10 duration-300 block group-hover/category:opacity-100 group-hover/category:translate-x-0 text-center overflow-hidden '>view collections</Link>

        </div>
    )
}
