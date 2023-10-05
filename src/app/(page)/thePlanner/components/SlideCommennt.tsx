"use client"
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const SlideCommnet = () => {

   
    
    const properties = {
        prevArrow: <GrFormPrevious className="w-10 h-10  rounded-full bg-slate-200 bg-opacity-20" />,
        nextArrow: <GrFormNext className="w-10 h-10  rounded-full bg-slate-200 bg-opacity-20"/>,
        indicators: true,
    }
    const comments = [{
        avatar: "",
        content: "Tasteful, distinctive and unforgettable wedding and events",
        name: "The Planners",
    }]
    return (
        <div className='h-full w-screen text-white'>
             <Slide {...properties} duration={4000} transitionDuration={2000} easing={"ease-out"}  >
            <div className="flex flex-col justify-center text-black w-2/3 mx-auto items-center gap-3" >
                <Image src={"https://theplannersvn.com/wp-content/uploads/2023/09/R02_4140.jpg"} className=' rounded-full' style={{objectFit:"cover", width:"90px", height:"90px"}} width={90} height={90} alt={''} />
                <p className='py-4 text-center text-xl'>Planning my wedding was so much less stressful, thanks to The Planners. For 7 months of the planning process, Van was my bridal stylist and sister. She always took care of me, my health and beauty, even when she was</p>
                <p className='text-xl text-center font-thin'>- Eliza & Jason -</p>
            </div>
            <div className="flex flex-col justify-center text-black w-2/3 mx-auto items-center gap-3" >
                <Image src={"https://theplannersvn.com/wp-content/uploads/2023/09/R02_4140.jpg"} className=' rounded-full' style={{objectFit:"cover", width:"90px", height:"90px"}} width={90} height={90} alt={''} />
                <p className='py-4 text-center text-xl'>Planning my wedding was so much less stressful, thanks to The Planners. For 7 months of the planning process, Van was my bridal stylist and sister. She always took care of me, my health and beauty, even when she was</p>
                <p className='text-xl text-center font-thin'>- Eliza & Jason -</p>
            </div>
            <div className="flex flex-col justify-center text-black w-2/3 mx-auto items-center gap-3" >
                <Image src={"https://theplannersvn.com/wp-content/uploads/2023/09/R02_4140.jpg"} className=' rounded-full' style={{objectFit:"cover", width:"90px", height:"90px"}} width={90} height={90} alt={''} />
                <p className='py-4 text-center text-xl'>Planning my wedding was so much less stressful, thanks to The Planners. For 7 months of the planning process, Van was my bridal stylist and sister. She always took care of me, my health and beauty, even when she was</p>
                <p className='text-xl text-center font-thin'>- Eliza & Jason -</p>
            </div>
            <div className="flex flex-col justify-center text-black w-2/3 mx-auto items-center gap-3" >
                <Image src={"https://theplannersvn.com/wp-content/uploads/2023/09/R02_4140.jpg"} className=' rounded-full' style={{objectFit:"cover", width:"90px", height:"90px"}} width={90} height={90} alt={''} />
                <p className='py-4 text-center text-xl'>Planning my wedding was so much less stressful, thanks to The Planners. For 7 months of the planning process, Van was my bridal stylist and sister. She always took care of me, my health and beauty, even when she was</p>
                <p className='text-xl text-center font-thin'>- Eliza & Jason -</p>
            </div>
        </Slide>
        </div>
       
    );
};

export default SlideCommnet;