"use client"

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';


// const DemoCarousel 

class MenPageHeader extends Component {
    render() {
        return (
            <div className='sm:mt-2 lg:-mt-8 lg:h-[650px] h-36' >
                <Marquee
                    speed={250}
                    pauseOnHover={true}
                    gradient={false}
                    className="flex my-20 cursor-pointer"
                >
                    <div>
                        <Image width={800} height={900} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/12062023-d-mhp-main-p2-netplay-dnmx-under299.jpg" alt='' />
                    </div>
                    <div>
                        <Image width={800} height={900} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/09062023-d-mhp-daily-p4-andamen-upto40extra10.jpg" alt='' />
                    </div>
                    <div>
                        <Image width={800} height={900} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/09062023-d-mhp-daily-p7-bewakoof-upto60.jpg" alt='' />
                    </div>
                </Marquee>

            </div>
        );
    }
}


export default MenPageHeader;