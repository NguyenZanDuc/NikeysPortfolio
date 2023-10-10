"use client"
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideCommnet = () => {
    const comments = [{
        avatar: "https://theplannersvn.com/wp-content/uploads/2023/09/R02_4140.jpg",
        content: "Planning my wedding was so much less stressful, thanks to The Planners. For 7 months of the planning process, Van was my bridal stylist and sister. She always took care of me, my health and beauty, even when she was",
        name: "- Eliza & Jason -",
    }, {
        avatar: "https://theplannersvn.com/wp-content/uploads/2023/09/365793457_697370315757143_999410349451155805_n.jpeg",
        content: "No matter how many times I could choose my wedding planner, I would go with The Planners every time. Once again, I thank the best wedding planner ever, Ms. Van Nguyen, for always finding solutions to all of our difficult",
        name: "- Trang & Steplen -",
    }, {
        avatar: "https://theplannersvn.com/wp-content/uploads/2023/08/TS104-1.jpg",
        content: "I’ve followed and been a fan of The Planners closely for years. I love how all of your weddings are elegant, classy, detail-oriented and unique in their own way. I truly admire and I’m grateful for the energy of The",
        name: "- Huong & Phong -",
    }, {
        avatar: "https://theplannersvn.com/wp-content/uploads/2023/09/R02_4140.jpg",
        content: "We want to send you our biggest, happiest and beachiest THANK YOU for making our wedding day an absolute dream come true. Seriously, from the moment we met you, we knew we were in for something special. Your infectious enthusiasm...",
        name: "- Thao & Bao -",
    }, {
        avatar: "https://theplannersvn.com/wp-content/uploads/2023/09/TIE_3962_websize-1.jpg",
        content: "Quynh Anh and her team at The Planners provided me with tremendous support and consulting throughout the planning process and wedding day. Quynh Anh was truly the best companion I could ask for! It almost felt like some sort of...",
        name: "- Quynh & Hung -",
    }, {
        avatar: "https://theplannersvn.com/wp-content/uploads/2023/09/361557580_683714420456066_8782850308229628398_n.jpeg",
        content: "A BIG thank to The Planners Team for our beautiful, festive and emotional Wedding! We got what we wanted in our wedding: everybody had their good and memorial time! A super special appreciation to Thành & Quỳnh Anh for being...-",
        name: "- Jack & Julia -",
    }]
    return (
        <div className='h-full w-screen text-white'>
            <Slide  duration={4000} transitionDuration={2000} easing={"ease-out"}  >
                {comments.map((comment, index) => (
                        <div className="flex flex-col  justify-center text-black w-1/2 mx-auto items-center gap-3" key={index}>
                            <Image src={comment.avatar} className=' rounded-full' style={{ objectFit: "cover", width: "90px", height: "90px" }} width={90} height={90} alt={''} />
                            <p className='py-4 text-center text-xl'>{comment.content}</p>
                            <p className='text-xl text-center font-thin'>{comment.name}</p>
                        </div>
                ))}
            </Slide>
        </div>

    );
};

export default SlideCommnet;