import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillFacebook, AiOutlineTwitter, AiTwotoneStar } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import {BsMenuApp, BsMenuButtonWide, BsPinterest} from 'react-icons/bs'
import SlideTest from './components/SlideTest'
import MenberSlide from './components/MemberSlide'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-white overflow-hidden'>
      <Navbar />
      <Hero />
      <MenberSlide />
      <Content />
      <InfoJob />
      <WhyBrand />
      <TopWork />
      <Work />
      <Start />
      <Footer />
    </div>
  )
}
export default page

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="30" viewBox="0 0 210 59" fill="none" >
      <title>Dribbble: the community for graphic design</title>
      <path fillRule="evenodd" clipRule="evenodd" d="M206.622 31.928C207.065 31.4116 207.85 31.4352 208.253 31.986H208.25L209.784 34.0834C210.075 34.4864 210.073 35.0425 209.769 35.4349C207.106 38.8893 202.44 42.2143 196.81 42.5359C192.366 42.7887 188.701 41.1051 186.706 37.9221C186.311 37.2925 185.44 37.2557 184.997 37.8511C182.63 41.0286 179.766 43.5134 176.782 43.6845C171.467 43.9876 169.966 40.4228 171.28 32.563C171.412 31.7805 170.726 31.1192 169.987 31.3141C168.885 31.6065 167.715 31.7356 166.528 31.633C166.034 31.5907 165.571 31.8912 165.422 32.3811C163.455 38.8418 158.774 44.8518 152.715 45.1997C148.847 45.421 143.069 43.205 143.647 33.9462C143.695 33.1927 143.019 32.5999 142.323 32.8106C141.11 33.1795 139.804 33.3534 138.474 33.2401C137.981 33.1979 137.52 33.4983 137.371 33.9885C135.404 40.449 130.723 46.4592 124.664 46.8068C120.796 47.0282 115.018 44.8124 115.596 35.5536C115.644 34.7998 114.968 34.207 114.272 34.418C113.059 34.7869 111.753 34.9634 110.423 34.8473C109.93 34.8053 109.469 35.1057 109.32 35.5956C107.352 42.0564 102.672 48.0664 96.6132 48.4142C93.8613 48.5723 90.1398 47.4945 88.4308 43.5264C88.1016 42.7599 87.1144 42.6438 86.6257 43.3105C84.2334 46.5751 81.3193 49.152 78.2762 49.3259C75.1571 49.505 73.4509 48.2535 72.7091 46.0216C72.4458 45.2339 71.4609 45.0467 70.9293 45.6712C68.8002 48.1744 66.3749 50.0082 63.9216 50.1479C60.1393 50.3666 57.9619 47.563 57.7823 44.1667C57.5747 40.204 59.2887 35.564 61.2025 30.4999C61.4684 29.7964 60.9873 29.0348 60.2608 29.0032C59.157 28.956 57.8963 28.8399 56.7113 28.6185C56.1771 28.5159 55.6583 28.8479 55.5063 29.3907C53.243 37.4716 49.7771 45.392 46.8529 50.074C46.5263 50.5984 45.8505 50.7381 45.3593 50.377L43.1264 48.7331C42.6682 48.393 42.5441 47.7397 42.8504 47.247C47.0759 40.478 50.8278 29.8807 52.1215 22.0421C52.2025 21.5415 52.61 21.17 53.0986 21.141L56.0683 20.9697C56.7493 20.9302 57.2861 21.5652 57.162 22.2634L57.1493 22.3372C57.0379 22.959 57.4532 23.5439 58.0532 23.6257C60.7164 23.992 64.6963 24.0366 67.3975 23.9313C68.157 23.9023 68.6938 24.6875 68.4178 25.4226C66.2507 31.1876 63.3469 39.1765 63.5139 42.3382C63.5899 43.7662 64.2204 44.5462 65.3291 44.4829C67.4508 44.3619 70.7141 40.0959 73.1876 35.3455C73.2331 35.261 73.2659 35.169 73.2862 35.0741C74.1196 31.3543 75.3565 27.2068 76.6061 23.0163L76.6837 22.7561C76.8128 22.3188 77.1901 22.0131 77.6306 21.9868L81.1876 21.7839C81.9219 21.7417 82.4712 22.4795 82.2485 23.2093C82.0654 23.8112 81.883 24.409 81.7023 25.0014C78.5723 35.2603 75.9438 43.8759 79.4838 43.6742C81.7978 43.5422 85.0764 39.6164 87.8966 34.0279C87.9421 33.9356 87.9751 33.8381 87.9954 33.7355C88.1372 33.0055 88.3092 32.2416 88.5195 31.4432C90.1639 24.8753 92.0286 18.3691 93.8955 11.855C94.4717 9.8446 95.0481 7.83341 95.6182 5.81945C95.7449 5.37417 96.1245 5.06062 96.57 5.03426L100.221 4.82611C100.963 4.78396 101.512 5.52962 101.279 6.26474C99.8208 10.8388 98.2967 15.7106 96.8487 20.4006C96.5448 21.3887 97.603 22.2107 98.4386 21.6416C99.8791 20.6562 101.545 20.0027 103.158 19.9105C107.267 19.676 110.064 23.0565 110.332 28.1496C110.347 28.4184 110.363 28.7082 110.37 29.0032C110.385 29.5673 110.808 30.023 111.348 30.0704C113.282 30.2417 115.259 29.6673 116.786 28.3051C116.943 28.1654 117.049 27.9757 117.102 27.7701C118.616 21.8916 120.287 16.0568 121.959 10.2147C122.532 8.21455 123.105 6.21353 123.672 4.20956C123.798 3.76427 124.178 3.45072 124.624 3.42438L128.274 3.21623C129.016 3.17408 129.566 3.91972 129.333 4.65484C127.874 9.22892 126.35 14.1007 124.902 18.7907C124.598 19.7788 125.657 20.6008 126.492 20.0317C127.933 19.0463 129.599 18.3929 131.211 18.3006C135.32 18.0662 138.117 21.4466 138.386 26.5399C138.401 26.8084 138.416 27.0985 138.424 27.3935C138.436 27.9573 138.862 28.4132 139.401 28.4607C141.335 28.6318 143.312 28.0573 144.839 26.6951C144.996 26.5557 145.102 26.3659 145.156 26.1604C146.67 20.2818 148.34 14.4471 150.013 8.6051C150.586 6.60484 151.158 4.60372 151.725 2.59968C151.852 2.15439 152.232 1.84085 152.677 1.8145L156.328 1.60635C157.07 1.56419 157.619 2.30985 157.386 3.04497C155.928 7.61902 154.404 12.4908 152.956 17.1808C152.652 18.1689 153.71 18.991 154.546 18.4219C155.986 17.4364 157.652 16.783 159.265 16.6908C163.374 16.4563 166.171 19.8367 166.44 24.9299C166.455 25.2013 166.47 25.4885 166.477 25.7835C166.493 26.3447 166.913 26.8032 167.452 26.8507C169.323 27.0166 171.237 26.4844 172.741 25.2171C172.908 25.0774 173.024 24.8798 173.08 24.6637C174.804 18.0187 177.336 9.31324 179.777 0.981894C179.906 0.541877 180.285 0.236236 180.726 0.209888L184.344 0.0017367C185.078 -0.0404207 185.627 0.692063 185.407 1.42191C182.047 12.5778 179.308 22.3372 177.797 28.0944C175.789 35.9039 175.711 38.1567 177.994 38.025C179.911 37.9143 182.493 35.1952 184.928 31.0847C185.025 30.924 185.075 30.7397 185.083 30.5526C185.402 22.324 190.447 14.8385 197.946 14.409C202.969 14.1218 205.721 17.916 205.918 21.6495C206.293 28.7767 199.248 33.3324 192.42 32.9107C191.625 32.8606 191.047 33.7145 191.397 34.4574C192.351 36.4967 194.359 37.6352 197.787 37.4374C201.048 37.2531 204.468 34.439 206.622 31.928ZM93.7548 33.9278C92.1345 40.4228 94.1017 42.9652 96.646 42.8203C100.823 42.5805 104.864 34.9263 104.553 29.019C104.416 26.4396 102.907 25.0958 101.145 25.1961C98.2106 25.3646 95.0512 28.745 93.7548 33.9278ZM121.808 32.3207C120.188 38.8154 122.155 41.3581 124.7 41.2131H124.697C128.874 40.9734 132.917 33.3192 132.606 27.4119C132.472 24.8324 130.96 23.4886 129.198 23.5887C126.264 23.7574 123.105 27.1379 121.808 32.3207ZM149.862 30.7133C148.242 37.2082 150.209 39.7509 152.753 39.606H152.751C156.925 39.3662 160.971 31.712 160.66 25.8047C160.525 23.2251 159.014 21.8814 157.252 21.9815C154.318 22.1501 151.158 25.5307 149.862 30.7133ZM200.584 22.2239C200.559 20.5218 199.513 19.2887 197.817 19.3862H197.815C194.483 19.5785 191.875 23.1856 191.045 27.562C190.913 28.2577 191.422 28.9058 192.103 28.8899C196.407 28.7821 200.721 25.9416 200.584 22.2239ZM44.3525 25.3837C43.9171 12.1962 35.3423 3.49339 22.6712 3.94658C17.2307 4.19426 11.0052 6.25733 6.32164 9.9461C5.88113 10.2939 5.76719 10.9315 6.06593 11.4163L8.05331 14.6519C8.39254 15.2052 9.11407 15.3185 9.60776 14.9075C13.1724 11.9459 18.0383 10.0041 22.7193 9.79855C31.403 9.43757 37.7828 14.9971 38.1551 25.7367C38.6209 38.2417 30.2157 52.5461 16.7091 53.3207C16.2382 53.3471 15.7471 53.3577 15.2559 53.3577C14.5673 53.3577 14.0585 52.6858 14.2306 51.9901C16.8357 41.4744 19.8763 30.1974 22.9776 19.7029C23.1928 18.973 22.6459 18.2458 21.9143 18.288L17.9648 18.5146C17.5218 18.5409 17.142 18.8492 17.0129 19.2918C14.0331 29.6045 11.0508 40.7895 8.36723 51.284C8.21279 51.89 7.59761 52.2379 7.02544 52.0427C5.62543 51.566 4.34693 51.0232 3.2583 50.3881C2.73677 50.0825 2.07601 50.2987 1.80765 50.8571L0.11142 54.4037C-0.139216 54.9281 0.0455967 55.5709 0.539275 55.8527C4.38489 58.0345 10.223 59.2806 16.0914 58.9462C35.4032 57.8393 44.864 40.0015 44.3525 25.3889V25.3837ZM82.3044 9.18082C79.955 9.31518 77.8713 11.9553 78.0183 14.7377C78.1143 16.5715 79.2917 17.7967 81.1195 17.694C83.4689 17.5596 85.6106 14.7798 85.4714 12.1318C85.3754 10.298 84.0005 9.08333 82.3044 9.18082Z" fill="currentColor"></path>
    </svg>
  )
}
const Navbar = () => {
  return (
    <div className='flex border-b-2  md:px-10 justify-between px-4 items-center gap-4 bg-dribbbleBackground'>
      <div className=''>
        <Logo />
      </div>
      <div className='md:flex hidden gap-6 font-medium p-6 flex-1 items-center justify-start'>
        <Link href='/'>Find talent</Link>
        <Link href='/'>Inspiration</Link>
        <Link href='/'>Learn design</Link>
        <Link href='/'>Jobs</Link>
        <Link href='/'>Go Pro</Link>
      </div>
      <div className='md:flex hidden items-center font-medium gap-4 '>
        <button className='px-4 py-2 rounded-full border hover:bg-gray-300'>Log in</button>
        <button className='px-4 py-2 rounded-full text-white bg-black hover:bg-opacity-50'>Sign up</button>
      </div>
      <div className='md:hidden inline'>
        <BsMenuButtonWide />
      </div>
    </div>
  )
}
const Hero = () => {
  return (
    <div className='py-10 w-screen flex flex-col justify-center items-center space-y-4 md:space-y-10 bg-dribbbleBackground'>
      <p className='px-3 py-1 shadow-sm md:text-xl text-center text-sm rounded-full bg-dribbbleContent font-medium md:w-auto w-2/3 '>Over 3 million ready-to-work creatives in our community!</p>
      <p className='md:text-7xl text-2xl font-medium w-2/3 mx-auto text-center font-serif'>Hire the world is top creative talent.</p>
      <p className='md:text-xl text-sm font-medium font-sans w-2/3 text-center'>Connect with a community of millions of top-rated designers & agencies around the world.</p>
      <button className='md:p-3 p-1 md:font-bold rounded-full bg-black text-white hover:bg-opacity-60'>Start hiring today</button>
    </div>
  )
}
const Content = () => {
  return (
    <div className='md:bg-white bg-dribbbleBackground'>
      {/* First section */}
      <div className='flex md:px-20 md:h-[600px] shadow-black md:items-center  p-4 shadow-sm md:gap-10 gap-4 md:flex-row flex-col  '>
        <p className='md:px-10 flex-1 md:text-8xl font-thin text-xl font-serif'>When only the best talent will do</p>
        <div className='md:space-y-10 md:inline flex flex-col justify-center space-y-4 flex-1'>
          <p className='md:text-2xl '>From Ford to Airbnb to Capital One, see why over 60,000 leading brands and business builders use Dribbble to attract, engage, and hire their best design talent.</p>
          <button className='md:p-3  md:w-auto w-2/3 mx-auto md:mx-0  p-1 md:font-bold md:rounded-full rounded-lg bg-black text-white hover:bg-opacity-60'>Get started</button>
        </div>
      </div>
      {/* Secon section */}
      <div className='w-full md:px-20  p-4 bg-white  flex flex-col justify-center items-center space-y-4 md:space-y-10'>
        <p className='px-3 py-1 shadow-sm md:text-xl text-center text-sm rounded-full bg-dribbbleContent font-medium md:w-auto w-2/3  '> Trusted by top brands & businesses</p>
        <p className='md:text-7xl font-medium w-2/3 mx-auto text-center font-serif'>Connecting brands and business builders with the world is top designers</p>
        <p className='md:text-xl text-sm font-medium font-sans w-2/3 text-center'>The world is leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.</p>
      </div>
      {/* three section */}
      <div className='flex  md:flex-row flex-col md:px-20 '>
        <div className='flex p-4 flex-1 flex-col justify-center items-start gap-2 md:gap-8'>
          <p className='md:text-6xl text-xl font-light'>Find your perfect creative match</p>
          <p className='font-sans text-sm md:text-base w-[80%]'>As the world is largest and most far-reaching network of exceptional creative professionals, we are fully equipped to handle your most critical projects with ease.</p>
          <div className='flex gap-4 p-4'>
            <button className='md:px-6 md:py-4 md:text-base p-2 text-sm md:rounded-full rounded-lg text-white bg-black hover:bg-opacity-50'>Find a designer</button>
            <button className='md:px-6 md:py-4 md:text-base p-2  md:rounded-full rounded-lg border hover:bg-gray-300'>Learn about hiring</button>
          </div>
        </div>
        <div className='flex-1 md:p-10 relative'>
          <Image
            src={'https://cdn.dribbble.com/uploads/47237/original/3bc3456ae9196b404c58c6792b7f800e.jpg?1685987898&resize=1200x1330&vertical=center'}
            alt={''}
            width={1000}
            height={1000}
            className='bg-transparent'
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }} />
          <div className='absolute md:bottom-0 -bottom-28  md:right-0 right-2 '>
            <CardContent />
          </div>
        </div>
      </div>
    </div>
  )
}
const CardContent = () => {
  const skills = ['UX', 'UI', 'Illustration', 'Research', 'Branding']
  return (
    <div className='h-[250px] w-[240px] rounded-3xl bg-opacity-90 font-sans space-y-3 shadow-md p-4 bg-white'>
      <div className='flex items-center gap-2'>
        <Image src={'https://cdn.dribbble.com/uploads/47269/original/c826ca8ddc2198fb5030ef09c0ac1b05.jpg?1685989454&resize=112x112&vertical=center'} alt={''} width={50} height={50} className='rounded-full' />
        <div >
          <p className='text-xl font-medium'>Maya Ealey</p>
          <p className='font-medium bg-[#DDFDE7] rounded-sm px-1'>Creative Lead</p>
        </div>
      </div>
      <div>
        <p className='font-bold'>Skills</p>
        <div className='flex flex-wrap p-2 gap-2 justify-center'>
          {skills.map((skill, index) => (
            <SkillItem key={index} title={skill} />
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>$180/hr</p>
        <div className='flex items-center gap-1'>
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </div>
      </div>
    </div>
  )
}
type SkillItemProps = {
  title: string
}
const SkillItem = ({ title }: SkillItemProps) => {
  return (
    <p className='px-2 py-1 text-sm rounded-full font-medium border border-gray-300'>{title}</p>
  )
}
const InfoJob = () => {
  return (
    <div className='md:p-24 p-4 space-y-2 md:mt-0 mt-32 md:space-y-16  bg-dribbbleBackground ' >
      <p className='md:text-5xl md:w-1/3 text-xl font-bold'>A better way to hire designers</p>
      <div className='grid md:grid-cols-3 md:gap-10 gap-2 px-4'>
        <div>
          <p className='font-bold md:pb-4'>The #1 job board for design talent</p>
          <p className='px-2'>Get your job listings in front of millions of top-rated designers looking for their next role with an average of 1.1K targeted clicks per month.</p>
        </div>
        <div>
          <p className='font-bold md:pb-4'>Seamless designer search filters</p>
          <p className='px-2'>No more sifting through piles of resumes. Our advanced search & filtering options make it easy to find the right designer in just a few clicks.</p>
        </div>
        <div>
          <p className='font-bold md:pb-4'>Top-quality candidates</p>
          <p className='px-2'>Your brand deserves only the best. Engage with leading designers and save your favorite candidates for future projects all in one place.</p>
        </div>
      </div>
      {/*  */}
      <div className='md:p-14 flex flex-col md:flex-row gap-5 group'>
        <div className='flex-1 md:p-10 p-4 space-y-5 rounded-xl border-[0.5px] border-gray-300'>
          <p className='md:text-3xl font-medium'>“Dribbble is my go-to for hiring designers. It always provides a wealth of quality candidates and instantly builds my pipeline.”</p>
          <div className='flex items-center gap-2 md:gap-4'>
            <Image src={'https://cdn.dribbble.com/uploads/47401/original/0bbab93269310c5391b5da608c718a40.jpg?1686152330&resize=80x80&vertical=center'} alt={''} width={36} height={36} />
            <p className='md:text-xl text-sm'>Lee Munroe - <span className='text-gray-500 font-thin'>Head of design, OneSignal</span></p>
          </div>
        </div>
        <div className='md:flex hidden justify-center items-center rounded-xl w-[270px] bg-gradient-to-tr from-pink-400 to-rose-100'>
          <svg className='group-hover:scale-110 duration-200 group-hover:rotate-3' xmlns="http://www.w3.org/2000/svg" width="118" height="107" viewBox="0 0 118 107" fill="none" role="img" >
            <path fillRule="evenodd" clipRule="evenodd" d="M79.4324 35.9118C79.4324 44.7635 73.7328 52.2875 65.8109 55.0925V57.1618C74.8361 54.2868 81.3784 45.868 81.3784 35.9118C81.3784 23.5833 71.3588 13.5882 59 13.5882C46.6414 13.5882 36.6216 23.5833 36.6216 35.9118C36.6216 46.5708 44.1194 55.4613 54.1351 57.6781V55.6788C45.2149 53.4948 38.5676 45.4758 38.5676 35.9118C38.5676 24.6723 47.733 15.5294 59 15.5294C70.267 15.5294 79.4324 24.6723 79.4324 35.9118ZM48.2974 35.9118C48.2974 30.0242 53.098 25.2354 59.0002 25.2354C64.9022 25.2354 69.7028 30.0242 69.7028 35.9118C69.7028 39.2118 68.1772 42.143 65.8109 44.1017V46.5165C69.3137 44.2745 71.6488 40.3727 71.6488 35.9118C71.6488 28.943 65.986 23.2942 59.0002 23.2942C52.0142 23.2942 46.3514 28.943 46.3514 35.9118C46.3514 41.1569 49.5682 45.641 54.1353 47.5415V45.3828C50.6812 43.6125 48.2974 40.0465 48.2974 35.9118ZM39.3829 66C29.5267 59.5922 23 48.5216 23 35.9118C23 16.0788 39.1183 0 59 0C78.8817 0 95 16.0788 95 35.9118C95 48.5216 88.4734 59.5922 78.6131 65.998C74.2581 63.1658 69.2512 61.2693 63.8649 60.518V57.6898V55.6865V47.5588V45.41V34.9412H61.9189H56.0811H54.1351V38.8235H56.0811V46.1748V48.178V56.0612V58.0237V60.324C55.6276 60.3603 55.1797 60.4086 54.7329 60.4567C54.5335 60.4782 54.3344 60.4997 54.1351 60.52C53.5591 60.5997 52.989 60.6986 52.4208 60.8035C51.8856 60.9025 51.3583 61.017 50.8329 61.1393C50.3134 61.2596 49.7995 61.3935 49.2897 61.5353C48.6106 61.7255 47.9411 61.9332 47.2815 62.1603C46.8086 62.3235 46.3416 62.4923 45.8785 62.6728C45.3084 62.896 44.7479 63.129 44.1934 63.3795C43.6368 63.6298 43.088 63.8938 42.547 64.1715C42.0936 64.4043 41.648 64.643 41.2063 64.8935C40.5894 65.2468 39.9784 65.6118 39.3829 66ZM9.03824 101.681C3.99034 101.681 0.556641 97.8883 0.556641 92.8404C0.556641 87.7924 3.99034 84 9.03824 84C14.0862 84 17.5454 87.7924 17.5454 92.8404C17.5454 97.8883 14.0862 101.681 9.03824 101.681ZM9.03834 99.7844C12.8563 99.7844 15.3418 96.812 15.3418 92.8403C15.3418 88.8429 12.8563 85.8961 9.03834 85.8961C5.19464 85.8961 2.76034 88.8429 2.76034 92.8403C2.76034 96.812 5.19464 99.7844 9.03834 99.7844ZM30.467 101.373V92.6867C30.467 89.9962 29.1089 88.6894 26.5465 88.6894C24.6759 88.6894 22.9847 89.7399 22.1135 90.7905V88.9968H20.1917V101.373H22.1135V92.328C22.8566 91.3286 24.2659 90.4062 25.7778 90.4062C27.4433 90.4062 28.5708 91.0724 28.5708 93.2761V101.373H30.467ZM39.3656 101.681C35.6757 101.681 33.0364 99.0415 33.0364 95.1723C33.0364 91.5849 35.5988 88.6894 39.1349 88.6894C42.8761 88.6894 45.0797 91.6105 45.0797 95.326V95.8129H35.0863C35.2401 98.1447 36.8544 100.092 39.5193 100.092C40.9543 100.092 42.3636 99.5284 43.3629 98.5034L44.2854 99.759C43.0298 100.989 41.3642 101.681 39.3656 101.681ZM43.1836 94.3778C43.1579 92.5585 41.928 90.2779 39.1093 90.2779C36.47 90.2779 35.1632 92.5072 35.0607 94.3778H43.1836ZM56.0989 101.681C60.6859 101.681 62.7099 99.2208 62.7099 96.3765C62.7099 92.6602 59.3097 91.792 56.4863 91.071C54.4817 90.5592 52.7679 90.1216 52.7679 88.7917C52.7679 87.5362 53.8959 86.6649 55.6379 86.6649C57.4319 86.6649 59.2509 87.2799 60.6089 88.638L62.2999 86.4087C60.7369 84.8712 58.5589 84 55.9199 84C52.1529 84 49.6929 86.1781 49.6929 89.0224C49.6929 92.5977 52.9174 93.4138 55.6937 94.1165C57.7923 94.6477 59.6349 95.114 59.6349 96.6584C59.6349 97.8114 58.6869 99.0158 56.2269 99.0158C53.8439 99.0158 51.9739 97.8883 50.8209 96.6327L49.1289 98.9645C50.6669 100.553 52.9469 101.681 56.0989 101.681ZM66.7329 87.485C67.6559 87.485 68.3989 86.7419 68.3989 85.8194C68.3989 84.8969 67.6559 84.1538 66.7329 84.1538C65.8109 84.1538 65.0679 84.8969 65.0679 85.8194C65.0679 86.7419 65.8109 87.485 66.7329 87.485ZM68.0659 101.373V88.9967H65.3749V101.373H68.0659ZM76.5979 106.396C74.4969 106.396 72.9339 105.934 71.3969 104.551L72.6519 102.603C73.6769 103.756 74.9589 104.192 76.5979 104.192C78.3669 104.192 80.2629 103.372 80.2629 100.733V99.3234C79.3149 100.579 77.9049 101.399 76.2909 101.399C73.1389 101.399 70.8069 99.1184 70.8069 95.0441C70.8069 91.0212 73.0879 88.6894 76.2909 88.6894C77.8539 88.6894 79.2629 89.3812 80.2629 90.7137V88.9968H82.9529V100.733C82.9529 105.191 79.6219 106.396 76.5979 106.396ZM77.0849 98.9902C78.3409 98.9902 79.6479 98.2471 80.2629 97.3502V92.7123C79.6479 91.8154 78.3409 91.0723 77.0849 91.0723C74.9329 91.0723 73.5749 92.661 73.5749 95.0441C73.5749 97.4271 74.9329 98.9902 77.0849 98.9902ZM97.5079 101.373V92.6611C97.5079 90.1243 96.1749 88.6894 93.5099 88.6894C91.5629 88.6894 89.9489 89.6887 89.1289 90.6624V88.9968H86.4379V101.373H89.1289V92.7123C89.7689 91.8924 90.9479 91.0724 92.3059 91.0724C93.8179 91.0724 94.8169 91.6874 94.8169 93.6348V101.373H97.5079ZM111.268 101.373H108.577V100.015C107.655 101.091 106.194 101.681 104.554 101.681C102.556 101.681 100.275 100.297 100.275 97.5809C100.275 94.711 102.53 93.5323 104.554 93.5323C106.246 93.5323 107.655 94.0704 108.577 95.121V93.2761C108.577 91.8411 107.373 90.9699 105.682 90.9699C104.298 90.9699 103.068 91.4824 102.018 92.5586L100.89 90.688C102.325 89.3043 104.119 88.6894 106.092 88.6894C108.859 88.6894 111.268 89.8424 111.268 93.148V101.373ZM105.631 99.8357C106.784 99.8357 107.937 99.4001 108.577 98.5545V96.6583C107.937 95.8127 106.784 95.3771 105.631 95.3771C104.119 95.3771 102.966 96.2739 102.966 97.6064C102.966 98.9645 104.119 99.8357 105.631 99.8357ZM117.443 101.373V84.2818H114.753V101.373H117.443Z" fill="#fff"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
const WhyBrand = () => {
  return (
    <div className='w-screen'>
      <p className='text-center text-xl md:pt-0 font-bold md:font-medium pt-5 w-2/3 mx-auto md:text-6xl font-sans'>Why brands choose Dribbble to hire design talent</p>
      <div className='flex md:flex-row flex-col gap-10 p-4 md:p-24'>
        <div className='flex-1 md:space-y-10 space-y-4 text-lg'>
          {/* items */}
          <div >
            {/* icon */}
            <p className='md:font-semibold font-medium rounded-md p-1 mb-3 inline bg-[#E6FAFD]'>World-class talent</p>
            <p className='w-3/4 text-sm md:text-base'>From graphic design to UX/UI, our community is home to the world is leading designers and creative agencies.</p>
          </div>
          <div>
            {/* icon */}
            <p className='md:font-semibold font-medium rounded-md p-1 mb-3  inline bg-[#E2EBFC]'>$0 placement fees</p>
            <p className='w-3/4 text-sm md:text-base'>We make the hiring process as seamless and cost-effective as possible, so you can focus on building your business.</p>
          </div>
          <div>
            {/* icon */}
            <p className='md:font-semibold font-medium rounded-md p-1 mb-3  inline bg-[#ECDDFB]'>Global reach</p>
            <p className='w-3/4 text-sm md:text-base'>With a network of designers spanning over 170 countries, we make it easy to find world-class talent, wherever you are in the world.</p>
          </div>
        </div>
        <div className='flex-1'>
          <Image src={'https://cdn.dribbble.com/uploads/47302/original/11a557ca1a5c49c9bcd89a22f781d953.jpg?1686080350&resize=1254x1002&vertical=center'} alt={''} width={630} height={500} style={{ width: "100%", height: "auto", borderRadius: 20 }} />
        </div>
      </div>
    </div>
  )
}
const TopWork = () => {
  return (
    <div className='flex w-screen flex-col items-center overflow-hidden'>
      <p className='md:p-16 p-4 md:text-5xl text-3xl font-serif w-full'>Plus, top quality work</p>
      <div className='flex flex-wrap justify-center md:w-[2000px] w-[500px] md:gap-6 gap-1'>
        <CardTopWork image={'https://cdn.dribbble.com/uploads/47373/original/0634279dac13fff2153e022355de7cf1.jpg?1686148239&resize=720x540&vertical=center'} />
        <CardTopWork video={'https://cdn.dribbble.com/uploads/47369/original/36860a753e16c024895745abaf6c158a.mp4?1686147978'} />
        <CardTopWork image={'https://cdn.dribbble.com/uploads/47376/original/43ade6e2ebb22a827b28f8954b4482ed.jpg?1686148450&resize=720x540&vertical=center'} />
        <CardTopWork video={'https://cdn.dribbble.com/uploads/47368/original/356aa0635642ba835e6c9a5266609f06.mp4?1686147933'} />
        <CardTopWork image={'https://cdn.dribbble.com/uploads/47374/original/54fbc96badf2dd56aeff1d055d1d3479.jpg?1686148303&resize=720x540&vertical=center'} />
        <CardTopWork video={'https://cdn.dribbble.com/uploads/47371/original/6e3ff9324887e3d134065d73d77539f1.mp4?1686148028'} />
        <CardTopWork image={'https://cdn.dribbble.com/uploads/47377/original/4aa6c2bb1ce8297cb649afcd4a532e34.jpg?1686148479&resize=720x540&vertical=center'} />
        <CardTopWork video={'https://cdn.dribbble.com/userupload/10349461/file/large-1bf077f2d77bc0a505d6ace3a88db823.mp4'} />
        <CardTopWork image={'https://cdn.dribbble.com/uploads/47372/original/cd929a56af76f436c8759841407a6e48.jpg?1686148209&resize=720x540&vertical=center'} />
      </div>
    </div>
  )
}
const CardTopWork = ({ image, video }: { image?: string, video?: string }) => {
  return (
    <div className='md:w-[360px] w-[90px] md:h-[270px] h-[64px] md:rounded-xl rounded-sm overflow-hidden'>
      {image && <Image src={image} alt={''} width={360} height={270} />}
      {video && <video src={video} autoPlay loop muted className='w-full h-full object-cover' />}
    </div>
  )
}
const Work = () => {
  return (
    <div className='w-screen md:h-[600px] md:p-24 p-4 flex md:flex-row flex-col justify-center  gap-10'>
      <div className='flex-1 h-full rounded-3xl md:p-10 p-4 bg-dribbbleBackground space-y-5 md:space-y-10 shadow-md'>
        <p className='md:p-3 p-2 md:rounded-full rounded-full inline font-semibold bg-[#B2FBE3]'>Looking for work?</p>
        <p className='md:text-5xl text-3xl font-serif'>Find your next opportunity</p>
        <p className='text-lg'>Browse new design jobs or boost your portfolio to get discovered.</p>
        <div className='space-x-4  '>
          <button className='md:p-4 p-2 rounded-full shadow-sm text-sm font-bold text-white bg-black hover:bg-opacity-70'>Find work</button>
          <button className='md:p-4 p-2 rounded-full shadow-sm text-sm font-bold text-black bg-white hover:bg-gray-300'>Get discovered</button>
        </div>
      </div>
      <div className='flex-1 h-full rounded-3xl md:p-10 p-4 bg-dribbbleBackground space-y-5 md:space-y-10 shadow-md'>
        <p className='md:p-3 p-2 md:rounded-full rounded-full inline font-semibold bg-[#FFABE7]'>Here for inspiration?</p>
        <p className='md:text-5xl text-3xl font-serif'>Discover trending designs</p>
        <p className='text-lg'>Browse and save your favorite design projects for endless inspiration..</p>
        <div className='space-x-4'>
          <button className='md:p-4 p-2 rounded-full shadow-sm text-sm font-bold text-white bg-black hover:bg-opacity-70'>Create my profile</button>
          <button className='md:p-4 p-2 rounded-full shadow-sm text-sm font-bold text-black bg-white hover:bg-gray-300'>Browse designs</button>
        </div>
      </div>
    </div>
  )
}
const Start = () => {
  return (
    <div className='w-screen md:p-24 p-4 shadow-lg flex flex-col bg-dribbbleContent justify-center md:items-center gap-2 md:gap-10'>
      <p className='md:text-6xl text-3xl font-serif '>Start hiring today</p>
      <p className='md:text-xl'>Browse portfolios and engage with top creative talent today.</p>
      <div className='flex justify-center gap-6'>
        <button className='md:p-4 p-2 rounded-full shadow-sm text-sm font-bold text-white bg-black hover:bg-opacity-70'>Get started now</button>
        <button className='md:p-4 p-2 rounded-full shadow-sm text-sm font-bold  text-black bg-white hover:bg-gray-300'>Learn about hiring</button>
      </div>
      <p className='md:text-xl text-center'>
        Are you a designer ?
        <span className='underline'> Join Dribbble</span>
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div className='md:px-24 p-4 md:py-10 md:space-y-10 space-y-4'>
      <div className='flex justify-between items-center gap-10 font-semibold '>
        <Logo />
        <div className='md:flex  hidden flex-1 justify-around  items-center'>
          <Link href={"#"} >For designers</Link>
          <Link href={"#"} >Hire talent</Link>
          <Link href={"#"} >Inspiration</Link>
          <Link href={"#"} >Advertising</Link>
          <Link href={"#"} >Blog</Link>
          <Link href={"#"} >About</Link>
          <Link href={"#"} >Careers</Link>
          <Link href={"#"} >Support</Link>
        </div>
        <div className='flex justify-center items-center gap-2 '>
          <AiFillFacebook/>
          <FaInstagramSquare/>
          <AiOutlineTwitter />
          <BsPinterest />
        </div>
      </div>
      <div className='flex md:flex-row flex-col justify-between md:text-base text-xs  text-gray-500'>
        <div className='flex md:gap-4 gap-2'>
          <p className='md:inline hidden'>© 2023 Dribbble</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div className='flex md:gap-4 gap-2'>
          <p>Jobs</p>
          <p>Designers</p>
          <p>Freelancers</p>
          <p>Tags</p>
          <p>Places</p>
          <p>Resources</p>
        </div>
      </div>
    </div>
  )
} 

