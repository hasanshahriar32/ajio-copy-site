"use client"

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

// const DemoCarousel 

class WomenHeader extends Component {
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
                        <Image width={800} height={900} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/12062023-WHP-D-mainbanner-50to90.gif" alt='' />
                    </div>
                    <div>
                        <Image width={800} height={800} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/10062023-WHP-D-mainbanner-p4-bitterlime-misschase-starting299-extra30.jpg" alt='' />
                    </div>
                    <div>
                        <Image width={800} height={800} className='lg:h-[625px] w-full object-contain' src="https://assets.ajio.com/cms/AJIO/WEB/12062023-WHP-D-mainbanner-p2-malabar-pcchandra-starting1999.jpg" alt='' />
                    </div>
                </Marquee>

            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(<WomenHeader />, document.querySelector('.demo-carousel'));
});


export default WomenHeader;