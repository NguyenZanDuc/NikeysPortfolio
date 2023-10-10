import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InView from './components/Animation/InView'


type Props = {}
const page = (props: Props) => {
  return (
    <div className='w-screen scroll-smooth '>
      <Hero />
      <Service />
      <More />
      <CaseStudies />
      <Blog />
    </div>
  )
}
export default page

const Hero = () => {
  return (

    <div className='container z-10 px-24 relative flex items-center gap-10 mx-auto '>
      <div className='space-y-10 flex-1 '>
        <InView>
          <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg '>Customer Focus Solution</p>
        </InView>
        <InView delay={0.3}>
          <p className='text-6xl font-semibold '>Guidance Extends Past Advice</p>
        </InView>
        <InView delay={0.6}>
          <p className=' text-gray-600 '>Elevate Your Business with Expert Guidance. Unlock Growth Potential. Your Success, Our Mission.</p>
        </InView>
        <InView delay={0.9}>
          <div >
            <Link className='px-4 py-2 rounded-md text-white  bg-consulyText' href={'#'} >Discover More</Link>
          </div>
        </InView>
      </div>
      <div className='flex-1'>
        <Image src={'https://framerusercontent.com/images/SfnBSeZbf961m7XNpw06oyn0I.png?scale-down-to=1024'} width={1000} height={100} alt={''} />
      </div>
    </div>

  )
}
type OurService = {
  title: string
  description: string
  image: string
}
const Service = () => {
  const services: OurService[] = [
    {
      title: "Market Research and Analysis",
      description: "Our experts will gather comprehensive data and provide in-depth analysis to help you understand market trends, customer preferences, and competitive landscapes, enabling informed decision-making.",
      image: "https://framerusercontent.com/images/ihP6FBW6R8koV3cTjBhtCulwQ.svg"
    },
    {
      title: "Strategic Business Planning",
      description: "Our experts will gather comprehensive data and provide in-depth analysis to help you understand market trends, customer preferences, and competitive landscapes, enabling informed decision-making.",
      image: "https://framerusercontent.com/images/ZwdDODDmssWAsQO9vcdGZPBFsc.svg"
    },
    {
      title: "Financial Advisory Services",
      description: "Our financial consultants will help you optimize your financial strategy, manage risks, and maximize profitability through sound financial planning and management.",
      image: "https://framerusercontent.com/images/db11aCSy20zWJDwhO5yz2KGcFk.svg"
    },
    {
      title: "Supply Chain Optimization",
      description: "Streamline your supply chain operations, reduce costs, and improve efficiency with our supply chain experts, ensuring smoother processes and higher profitability.",
      image: "https://framerusercontent.com/images/PAEYO3RvWmzIGJ2wAnF8uhj7eU.svg"
    },
    {
      title: "CSR Consulting",
      description: "Take a proactive approach to sustainability and corporate social responsibility (CSR) with our guidance, helping your organization make a positive impact while achieving business goals.",
      image: "https://framerusercontent.com/images/mLvcKCEAj4UjW5ftt7qmEuU1jU.svg"
    },
    {
      title: "Risk Assessment and Mitigation",
      description: "Identify and mitigate potential risks that could impact your business with our risk management consultants, safeguarding your organization's stability and reputation.",
      image: "https://framerusercontent.com/images/HQF9eRKGnCgoP9LSSsddset1o7g.svg"
    }
  ]
  return (
    <div className='px-24 bg-consulyBackground p-10 flex flex-col items-center gap-10'>
      <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Our Services</p>
      <p className='w-1/3 font-semibold text-5xl text-center'>Unlocking Your Business Potential</p>
      <div className='w-full flex gap-10 justify-center flex-wrap'>
        {services.map((service, index) => (
          <InView delay={0.1 * index}  key={index}>
            <CardService {...service} />
          </InView>
        ))}
      </div>
    </div>
  )
}
type CardServiceProps = {
  title: string
  description: string
  image: string
}
const CardService = ({ title, description, image }: CardServiceProps) => {
  return (
    <div className='w-[410px] px-10 h-[360px]  rounded-lg p-6 space-y-6 bg-white shadow-xl hover:-translate-y-2 duration-300 '>
      <div className='w-14 h-14 rounded-full overflow-hidden shadow-lg'>
        <Image src={image} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} ></Image>
      </div>
      <p className='font-bold text-lg'>{title}</p>
      <p className='text-gray-500 '>{description}</p>
      <div>
        <Link className=' font-semibold' href={'#'}>Learn More</Link>
      </div>
    </div>

  )

}
const More = () => {
  return (
    <div className='container mx-auto flex p-10  items-center'>
      <div className='flex-1 p-24 overflow-hidden relative'>
        <p className='p-2 bg-white rounded-md text-sm absolute bottom-1/4 right-14 shadow-lg'>
          <span className=' text-consulyText text-xl font-semibold'>12+ </span>
          Years Of Experience
        </p>
        <Image src={'https://framerusercontent.com/images/6OWYXmqlhilNhnikr8Al2FhYUA.png?scale-down-to=1024'} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} ></Image>
      </div>
      <div className='flex-1 space-y-10'>
        <InView delay={0.1}>
          <p className='text-6xl font-semibold'>Reliable & <span className='text-consulyText'>cost efficient</span> consultancy </p>
        </InView>
        <InView delay={0.2}>
          <p className='text-xm text-gray-500'>Consuly is your trusted advisors in business excellence. With a passion for innovation and a commitment to results, we provide tailored solutions to help businesses thrive. Our experienced team is dedicated to your success, guiding you through challenges and opportunities in today is dynamic landscape.</p>
        </InView>
        <InView delay={0.3}>
          <div>
            <Link className='px-4 py-2 rounded-md text-white bg-consulyText' href={'#'} >Learn More</Link>
          </div>
        </InView>
      </div>
    </div>
  )
}
const CaseStudies = () => {
  const caseStudies = [{
    title: "Market Entry Strategy for Global Expansion",
    description: "Discover how we assisted Company X in entering new international markets and achieving rapid growth with a data-driven market entry strategy.",
    image: "https://framerusercontent.com/images/HjeqWu2XMNekRkuW9wNJOW0bUk.png"
  },
  {
    title: "Operational Efficiency Transformation",
    description: "How our consultancy team optimized Company Y, reducing costs and increasing profitability through a comprehensive operational overhaul.",
    image: "https://framerusercontent.com/images/d6oA9qrI19YNnbFAJqEO23aRgM.png"
  },
  {
    title: "Change Management in Merger Integration",
    description: "Discover our approach to managing organizational change during a merger, ensuring a smooth transition and minimized disruption for SpaceX",
    image: "https://framerusercontent.com/images/7pivUnQs3SpCtpGn0AtAcinFg.png"
  }
  ]
  return (
    <div className='bg-consulyBackground p-10 flex flex-col items-center gap-10 justify-center'>
      <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Case Studies</p>
      <p className='w-1/4 text-5xl text-center'>Discover our case history</p>
      <div className='w-full flex gap-6 justify-center flex-wrap'>
        {caseStudies.map((caseStudy, index) => (
          <InView delay={0.1 * index} key={index}>
            <CardCaseStudies  title={caseStudy.title} description={caseStudy.description} image={caseStudy.image} />
          </InView>
        ))}
      </div>
    </div>
  )
}
type CardCaseStudiesProps = {
  title: string
  description: string
  image: string
}
const CardCaseStudies = ({ title, description, image }: CardCaseStudiesProps) => {
  return (
    <div className='space-y-8 w-[280px] group'>
      <Image src={image} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} className='rounded-2xl shadow-md group-hover:scale-105 group-hover:rotate-2 duration-300' ></Image>
      <p className='text-3xl'>{title}</p>
      <p className=' text-gray-600'>{description}</p>
      <div>
        <Link className='px-4 py-2 rounded-md text-white bg-consulyText' href={'#'} >View Project</Link>
      </div>
    </div>
  )
}
const Blog = () => {
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
    <div className='container mx-auto flex flex-col items-center py-10 space-y-10'>
      <p className='p-2 rounded-full inline text-consulyText bg-consulyContent text-lg'>Case Studies</p>
      <p className='w-1/4 text-5xl text-center'>Lastest News</p>
      <div className=' gap-6 grid grid-cols-4 grid-rows-3 px-32'>
        <CardBlog delay={0.1}  className=' col-span-2 row-span-3 flex-col rounded-xl overflow-hidden  shadow-md' title={blogs[0].title} date={blogs[0].date} description={blogs[0].description} image={blogs[0].image} />
        <CardBlog delay={0.2} className='flex gap-3 col-span-2 row-span-1 first:basis-1/3 ' title={blogs[1].title} date={blogs[1].date} description={blogs[1].description} image={blogs[1].image} />
        <CardBlog delay={0.3} className='flex gap-3 col-span-2 row-span-1 first:basis-1/3 ' title={blogs[2].title} date={blogs[2].date} description={blogs[2].description} image={blogs[2].image} />
        <CardBlog delay={0.4} className='flex gap-3  col-span-2 row-span-1 first:basis-1/3 ' title={blogs[3].title} date={blogs[3].date} description={blogs[3].description} image={blogs[3].image} />
      </div>
    </div>
  )
}
type CardBlogProps = {
  className?: string,
  title: string
  date: string
  description: string
  image: string,
  delay?: number
}
const CardBlog = ({ className, title, date, description, image, delay }: CardBlogProps) => {
  return (
    <InView className={className} delay={delay}>
      <div className='basis-1/3'>
        <Image src={image} alt={''} width={1000} height={1000} style={{ width: "100%", height: "auto" }} className='rounded-lg shadow-md' ></Image>
      </div>
      <div className=' p-2 flex flex-col justify-start flex-1'>
        <p className='text-gray-600'>{date}</p>
        <p className='font-semibold'>{title}</p>
        <p className='text-gray-500 text-sm'>{description}</p>
        <Link className='text-sm text-consulyText' href={'#'}>Read more</Link>
      </div>
    </InView>
  )
}

