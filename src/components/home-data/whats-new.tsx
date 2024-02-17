'use client';

import React, { useEffect } from 'react'
import Image from 'next/image';
import Whatsnew from "@/assets/images/cgbhome/whatsnew.png"
import bg_image from "@/assets/images/background/backgroundnew.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const backImg = {
    backgroundImage: `url('${bg_image.src}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
}

const WhatsNew = () => {
    useEffect(()=>{
        AOS.init();
    },[])


  return (
    <>
        <div className="full" style={backImg}>
            <div className="container">
                <div className="counter-wrapper pt-80 pb-80">
                <div className="row">
                    <div className="title-one">
                        {/* <div className="upper-title"></div> */}
                        <h2>What's New</h2>
                    </div>
                    <div
                     data-aos="fade-up"
                     data-aos-duration="3000"
                    className="col-md-3 mb-35 mt-35  wow " data-wow-delay="0.0s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                    <div
                     data-aos="fade-up"
                     data-aos-duration="3000"
                    className="col-md-3 mb-35 mt-35  wow " data-wow-delay="0.1s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                    <div
                     data-aos="fade-up"
                     data-aos-duration="3000"
                    className="col-md-3 mb-35 mt-35  wow " data-wow-delay="0.2s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                    <div 
                     data-aos="fade-up"
                     data-aos-duration="3000"
                    className="col-md-3 mb-35 mt-35  wow " data-wow-delay="0.3s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhatsNew;