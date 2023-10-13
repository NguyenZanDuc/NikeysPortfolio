import Image from "next/image"
import Link from "next/link"
import { BiMenu } from "react-icons/bi"

export const Navbar = () => {
    return (
      <div className='container mx-auto flex justify-between items-center md:px-24 px-4 py-4'>
        <Logo className=' ' />
        <div className='md:flex hidden h-full flex-1 font-semibold justify-center gap-8 items-center'>
          <Link href={'#'} >Home</Link>
          <div  className='relative group' >
            Page
            <PageHoverContent />
          </div>
          <Link href={'/Consuly/about'} >About</Link>
          <Link href={'#'} >Contact</Link>
        </div>
        <div className='md:flex hidden basis-1/6 justify-center items-center '>
          <Link className='px-4 py-2 rounded-md text-white bg-consulyText' href={'#'} >Get Started</Link>
        </div>
        <div>
          <BiMenu />
        </div>
      </div>
    )
  }

   const PageHoverContent = () => {
    return (
      <div className=' border-8 w-[800px] border-transparent duration-500  bg-white absolute rounded-lg p-10 flex gap-10 shadow-lg z-0 opacity-0 top-full translate-y-20 left-1/2 -translate-x-1/2 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-50'>
        <div className="basis-1/3 ">
            <Image src={'https://framerusercontent.com/images/S1H6wfsrRHrwcspexxeBJ2byGaY.png'} width={1000} height={1000} style={{width:"100%", height:"auto"}} alt={''} />
        </div>
        <div className=" flex justify-between flex-1 p-4 text-base ">
            <div className="flex flex-col gap-4">
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Home</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">About</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Contact</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Blog</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Blog Details</Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Team</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Team Details</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Career</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500"> Career Details</Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Case Study</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Case Study Details</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Service</Link>
                <Link href={"#"} className="hover:text-consulyText text-gray-500">Service Details</Link>
            </div>
        </div>
      </div>
    )
  }
 export const Logo = ({ className }: { className?: string }) => {
    return (
      <div className={className}>
        <Image src={'/ConsulyLogo.png'} width={120} height={120} alt={''} />
      </div>
    )
  }
  
