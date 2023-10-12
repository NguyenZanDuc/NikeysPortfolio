import Image from 'next/image'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/UI/Table"
import Link from 'next/link'
import { cn } from '@/app/lib/utils'
import InView from '@/app/components/Animation/InView'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='p-6 space-y-6'>
      <div className='md:p-32 p-6 space-y-4 md:space-y-8'>
        <InView className='md:text-6xl text-2xl text-center font-bold'>Our Prices</InView>
        <InView delay={0.2} className='text-xl md:w-1/2 mx-auto text-center text-gray-400'>Explore our transparent pricing for top-notch hair services. Affordable luxury awaits at our salon, where beauty meets your budget with exceptional value.</InView>
      </div>
      {/* haircut table */}
      <InView className='bg-[#1D1D1D] flex flex-col justify-center items-center rounded-3xl md:p-20 p-4 gap-4 md:gap-8'>
        <p className='md:text-4xl text-2xl font-bold'>Haircuts</p>
        <p className='text-gray-400 md:w-2/3 text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
        <div className='md:w-[80%] '>
          <HaircutTable />
        </div>
      </InView>
      <div className='flex flex-col md:flex-row gap-6'>
        {/* dry */}
        <InView className='bg-[#1D1D1D] flex-1 flex flex-col justify-center items-center rounded-3xl md:p-12 p-4 gap-4 md:gap-8'>
          <p className='md:text-4xl text-2xl font-bold'>Dry Styling</p>
          <p className='text-gray-400 md:w-2/3 text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
          <div className='w-[80%]'>
            <DryStylingTable />
          </div>
        </InView>
        {/* hair treatments */}
        <InView className='bg-[#1D1D1D] flex-1 flex flex-col justify-center items-center rounded-3xl p-12 gap-8'>
          <p className='md:text-4xl text-2xl font-bold'>Hair Treatments</p>
          <p className='text-gray-400 md:w-2/3 text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
          <div className='w-[80%]'>
            <HairTreatmentsTable />
          </div>
        </InView>
      </div>
      {/* hair colour table */}
      <InView className='bg-[#1D1D1D] flex flex-col justify-center items-center rounded-3xl md:p-20 md:gap-8 p-4 gap-4'>
        <p className='md:text-4xl text-2xl font-bold'>Hair Colour</p>
        <p className='text-gray-400 md:w-2/3 text-center'>Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.</p>
        <div className='w-[80%]'>
          <HaircutTable />
        </div>
      </InView>
      <CardContent className='md:flex-row-reverse'
        image={'https://framerusercontent.com/images/CVXpSPpSbauiMhTcJFg44h7ZUw.jpg'}
        title={'Book an appointment'}
        description={'Ready for a transformation? Book your appointment with us today and step into a world of personalized beauty and exceptional haircare. Your journey begins here.'}
        href={'#'}
        linkText={'BOOK NOW'} />

    </div>
  )
}

export default page



const haircuts = [
  {
    type: "",
    stylist: "from",
    seniorStylist: "from",
    styleDirector: "from",
    artDirector: "from",
  },
  {
    type: "Cut & Finish",
    stylist: "£55.00",
    seniorStylist: "£60.00",
    styleDirector: "£70.00",
    artDirector: "£80.00",
  },
  {
    type: "Longer Cut & Finish",
    stylist: "£55.00",
    seniorStylist: "£60.00",
    styleDirector: "£70.00",
    artDirector: "£80.00",
  },
  {
    type: "Bespoke Barbering",
    stylist: "£45.00",
    seniorStylist: "£50.00",
    styleDirector: "£60.00",
    artDirector: "£70.00",
  }
]
 function HaircutTable() {
  return (
    <Table className='text-gray-300 '>
      <TableHeader >
        <TableRow  >
          <TableHead ></TableHead>
          <TableHead className='text-white text-xs md:text-base' >Stylist</TableHead>
          <TableHead className='text-white text-xs md:text-base'>Senior Stylist</TableHead>
          <TableHead className='text-white text-xs md:text-base'>Style Director</TableHead>
          <TableHead className='text-white text-xs md:text-base ' >Art Director & Manager</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {haircuts.map((item, i) => (
          <TableRow key={i}>
            <TableCell className='text-xs md:text-base'>{item.type}</TableCell>
            <TableCell className='text-xs md:text-base' >{item.stylist}</TableCell>
            <TableCell className='text-xs md:text-base'>{item.seniorStylist}</TableCell>
            <TableCell className='text-xs md:text-base'>{item.styleDirector}</TableCell>
            <TableCell className='text-xs md:text-base'>{item.artDirector}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
const dryStyling = [
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  },
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  },
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  },
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  }
]
 function DryStylingTable() {
  return (
    <Table className='text-gray-300 '>
      <TableHeader >
        <TableRow  >
          <TableHead ></TableHead>
          <TableHead className='text-white text-xs md:text-base' >From</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dryStyling.map((item, i) => (
          <TableRow key={i}>
            <TableCell className='text-xs md:text-base'>{item.type}</TableCell>
            <TableCell className='text-xs md:text-base' >{item.from}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
const hairTreatments = [
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  },
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  },
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  },
  {
    type: "Blow Dry",
    from: "£40.00-£45.00",
  }
]
 function HairTreatmentsTable() {
  return (
    <Table className='text-gray-300 '>
      <TableHeader >
        <TableRow  >
          <TableHead ></TableHead>
          <TableHead className='text-white text-xs md:text-base' >From</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {hairTreatments.map((item, i) => (
          <TableRow key={i}>
            <TableCell className='text-xs md:text-base'>{item.type}</TableCell>
            <TableCell  className='text-xs md:text-base'>{item.from}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
const hairColour = [
  {
    type: "",
    stylist: "from",
    seniorStylist: "from",
    styleDirector: "from",
    artDirector: "from",
  },
  {
    type: "Cut & Finish",
    stylist: "£55.00",
    seniorStylist: "£60.00",
    styleDirector: "£70.00",
    artDirector: "£80.00",
  },
  {
    type: "Longer Cut & Finish",
    stylist: "£55.00",
    seniorStylist: "£60.00",
    styleDirector: "£70.00",
    artDirector: "£80.00",
  },
  {
    type: "Bespoke Barbering",
    stylist: "£45.00",
    seniorStylist: "£50.00",
    styleDirector: "£60.00",
    artDirector: "£70.00",
  }
]
 function HairColourTable() {
  return (
    <Table className='text-gray-300 '>
      <TableHeader >
        <TableRow  >
          <TableHead ></TableHead>
          <TableHead className='text-white text-xs md:text-base' >Stylist</TableHead>
          <TableHead className='text-white text-xs md:text-base'>Senior Stylist</TableHead>
          <TableHead className='text-white text-xs md:text-base'>Style Director</TableHead>
          <TableHead className='text-white text-xs md:text-base' >Art Director & Manager</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {haircuts.map((item, i) => (
          <TableRow key={i}>
            <TableCell className='text-xs md:text-base'>{item.type}</TableCell>
            <TableCell className='text-xs md:text-base' >{item.stylist}</TableCell>
            <TableCell className='text-xs md:text-base'>{item.seniorStylist}</TableCell>
            <TableCell className='text-xs md:text-base'>{item.styleDirector}</TableCell>
            <TableCell className='text-xs md:text-base'>{item.artDirector}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

type CardContentProps = {
  image: string
  title: string
  description: string
  href: string
  linkText: string,
  className?: string
}
const CardContent = ({ image, title, description, href, linkText, className }: CardContentProps) => {
  return (
    <div className={cn("flex md:flex-row flex-col gap-5 md:h-[600px]", className)}>
      <InView className="rounded-2xl flex-1 overflow-hidden">
        <Image
          src={image}
          alt={''}
          width={1000}
          height={1000}
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </InView>
      <InView delay={0.2} className="rounded-2xl bg-[#1D1D1D] flex  flex-col flex-1 justify-center p-4 items-center gap-6">
        <div className='md:text-5xl text-2xl font-semibold'>{title}</div>
        <div className='text-sm text-center md:w-1/2 text-gray-300'>{description}</div>
        <Link href={href} className='font-semibold p-2 md:text-base text-xs inline-block bg-white text-black rounded-md border'>{linkText}</Link>
      </InView>
    </div>
  )
}