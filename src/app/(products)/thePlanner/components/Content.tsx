import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import CardContentItem from './CardContentItem'

export const Content = () => {
    return (
        <div>
            {/* First content */}
            <div className='w-screen md:flex-row flex flex-col gap-4 md:p-[200px] p-4'>
                <div className='flex-1 space-y-4'>
                    <p className='text-5xl'>Đám</p>
                    <p className='px-16 text-5xl'>Cưới</p>
                    <p className='text-sm font-mono w-[90%]'>Chúng tôi đã đồng hành cùng hàng trăm cặp đôi trong hơn một thập kỷ qua. Hãy cùng chiêm ngưỡng những trang trí ấn tượng và những khoảnh khắc đẹp nhất trong mỗi đám cưới mà chúng tôi đã tạo nên.</p>
                    <ContentItem image={'https://theplannersvn.com/wp-content/uploads/2022/11/Cer-Duy-Tram-1007.jpg'} name={'Duy & Trâm |Sa Pa'} title={'A Magnificent Mountain Wedding In Sa Pa'} />
                </div>
                <div className='flex-1 space-y-4'>
                    <ContentItem position='TOP_RIGHT' image='https://theplannersvn.com/wp-content/uploads/2023/02/GT55.jpg' name='Thành & Gia |Hà Nội' title='The Palette Of Love' />
                    <ContentItem position='BOTTOM_RIGHT' image='https://theplannersvn.com/wp-content/uploads/2022/10/ZNb-Wedding-day-140.jpg' name='Nguyên & Dũng |Sai Gon' title='A Luxurious Outdoor Wedding In Saigon' />
                </div>
            </div>
            {/* Second content */}
            <div className='w-screen flex flex-col md:flex-row-reverse gap-4 md:p-[200px] p-4'>
                <div className='flex-1'>
                    <div className='p-10  space-y-4'>
                        <p className='text-5xl'>Styling &</p>
                        <p className='px-32 text-5xl'>Decor Works</p>
                        <p className='text-sm font-mono w-[90%]'>Chúng tôi luôn tìm thấy rất nhiều niềm vui khi được sáng tạo và mang tới những điều xinh đẹp. Từ một buổi cầu hôn đến những bữa tiệc theo chủ đề hay styling cho một buổi chụp ảnh, chúng tôi luôn hào hứng khi được tận dụng trí tưởng tượng và tạo nên những khoảnh khắc đáng nhớ.</p>
                        <button className='rounded-sm text-white hover:scale-105 px-3 py-2 relative bg-thePlanner group w-[190px]  hover:w-[210px] duration-300 overflow-hidden flex justify-start items-center '>
                            <p className='flex-1'> EXPLORE DECOR</p>
                            <AiOutlineArrowRight />
                            <div className='h-full z-10 w-[30px] absolute top-0 bg-thePlanner group-hover:w-0 duration-1000 right-0'></div>
                        </button>
                    </div>

                    <ContentItem
                        position='BOTTOM_RIGHT'
                        image={'https://theplannersvn.com/wp-content/uploads/2023/09/TIE_3931.jpg'}
                        name={'Eliza & Jason | Hà Nội'}
                        title={'Aqua Camellia'} />
                </div>
                <div className='flex-1 space-y-4'>
                    <ContentItem
                        position='TOP_LEFT'
                        image='https://theplannersvn.com/wp-content/uploads/2023/02/68.jpg'
                        name='Thành & Gia |Phú Thọ'
                        title='A Radiant Traditional Ceremony' />
                    <ContentItem
                        position='BOTTOM_LEFT'
                        image='https://theplannersvn.com/wp-content/uploads/2023/04/Cer-Quang-Trang-333.jpg'
                        name='Quang & Trang |Huế'
                        title='A Graceful Traditional Ceremony In Hue' />
                </div>
            </div>
        </div>
    )
}
type ContentItemProps = {
    image: string,
    name: string,
    title: string,
    position?: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT',
    backgroundColor?: string
}
const ContentItem = ({ image, name, title, position }: ContentItemProps) => {
   
    return (
        <div className='relative group'>
            <Image src={image} alt={name} width={300} height={650} style={{ width: "100%", height: 650, borderRadius: 10 }} />
            <CardContentItem name={name} title={title} position={position} />
            <div className={cn('rounded-sm w-[280px] bg-thePlannerBackground shadow-md p-4 space-y-2 absolute md:hidden bottom-2 right-2 opacity-80 ',)}>
                <p className='text-sm font-inconsolata'>{name}</p>
                <p className='text-lg font-serif'>{title}</p>
                <button> View More</button>
            </div>
        </div>
    )
}