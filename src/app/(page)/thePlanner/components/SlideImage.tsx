"use client"
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const SlideImage = () => {

   
    
    const properties = {
        prevArrow: <GrFormPrevious className="w-14 h-14  rounded-full bg-slate-200 bg-opacity-20" />,
        nextArrow: <GrFormNext className="w-14 h-14  rounded-full bg-slate-200 bg-opacity-20"/>,
        indicators: true,
    }
    const images = [
       "https://theplannersvn.com/wp-content/uploads/elementor/thumbs/banner-4-q7au44myxprgfhq229k4oojo5taj7lv75vazrdq974.jpg",
       "https://theplannersvn.com/wp-content/uploads/elementor/thumbs/banner-6-q7au48ebp1wlpxklgb6mynlijcs02ea4idwxohkoi8.jpg",
       "https://theplannersvn.com/wp-content/uploads/elementor/thumbs/TQ127-q7au3yzxspjqhty8z74d9pywli2bxf8t53e2vpym8g.jpeg",
       "https://theplannersvn.com/wp-content/uploads/elementor/thumbs/ZNb-Wedding-day-142-scaled-q7atfmycv48hx9ar2og2pv1aye08nimz4ndjlu1jbk.jpg",
       "https://theplannersvn.com/wp-content/uploads/elementor/thumbs/banner-1-q7au41tgd7nlgnu5iqc8z79adnofkik05hcjbjufps.jpg"
    ];
    return (
        <div className='h-full w-screen text-white'>
             <Slide {...properties} duration={4000} transitionDuration={2000} easing={"ease-out"}  >
            <div className="flex justify-center items-center   h-full" >
                <Image src={images[0]} style={{objectFit:"cover", width:"100%"}} width={1000} height={1000} alt={''} />
            </div>
            <div className="flex justify-center items-center h-full">
                <Image src={images[1]} style={{objectFit:"cover", width:"100%"}} width={1000} height={1000} alt={''} />
            </div>
            <div className="flex justify-center items-center h-full">
                <Image src={images[2]} style={{objectFit:"cover", width:"100%"}} width={1000} height={1000} alt={''} />
            </div>
        </Slide>
        </div>
       
    );
};

export default SlideImage;