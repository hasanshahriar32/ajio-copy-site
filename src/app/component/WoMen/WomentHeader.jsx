"use client"

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


// const DemoCarousel 

class WomenHeader extends Component {
    render() {
        return (
            <div className='sm:mt-2 lg:-mt-8 lg:h-[650px] h-36' >
                <Carousel>
                    <div >
                        <Image width={800} height={800} className='lg:h-[640px]  object-contain ' src="https://assets.ajio.com/cms/AJIO/WEB/01062023-WHP-D-mainbanner-p1-bbs-50to901111.gif" alt='' />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <Image width={800} height={900} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/10062023-WHP-D-mainbanner-p3-giva-shaya-upto80.jpg" alt='' />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <Image width={800} height={800} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/10062023-WHP-D-mainbanner-p4-bitterlime-misschase-starting299-extra30.jpg" alt='' />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(<WomenHeader />, document.querySelector('.demo-carousel'));
});


export default WomenHeader;