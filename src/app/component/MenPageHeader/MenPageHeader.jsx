"use client"

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


// const DemoCarousel 

class MenPageHeader extends Component {
    render() {
        return (
            <div className='sm:mt-2 lg:-mt-8' >
                <Carousel>
                    <div >
                        <Image width={800} height={800} className='lg:h-[640px]  object-contain ' src="https://assets.ajio.com/cms/AJIO/WEB/09062023-d-mhp-main-p4-differenceofopinion-benekleed-flat60extraupto35.jpg" alt='' />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <Image width={800} height={900} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/09062023-d-mhp-daily-p4-andamen-upto40extra10.jpg" alt='' />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <Image width={800} height={900} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/09062023-d-mhp-daily-p7-bewakoof-upto60.jpg" alt='' />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(<MenPageHeader />, document.querySelector('.demo-carousel'));
});


export default MenPageHeader;