"use client"
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import data from './WomenSliderData.json';
import Image from 'next/image';
import Link from 'next/link';
import '@splidejs/react-splide/css';

const WomenSlider = () => {
    return (
        <div className='font-serif'>
            <Image width={900} height={400} className='w-full -mt-8 motion-safe:hover:scale-110' src="https://assets.ajio.com/cms/AJIO/WEB/01062023-WHP-D-sponsoredbrands-sectionheader.jpg" alt='' />
            <section >
                <Splide options={{
                    perPage: 4,
                    arrows: true,
                    pagination: true,
                    drag: "free",
                    breakpoints: {
                        1200: { perPage: 3 },
                        640: { perPage: 1 },
                    },
                }}>


                    {data.slice(1, 7).map(item => {
                        return (
                            <div key={item.id}>
                                <SplideSlide  >
                                    <Link href="/pages/men/productdetails" className="block ml-1 group motion-safe:hover:scale-110">
                                        <Image width={500} height={500}
                                            src={item.url}
                                            alt=""
                                            className="h-[350px] w-full object-contain sm:h-[450px]"
                                        />
                                    </Link>
                                </SplideSlide>
                            </div>



                        )
                    })}



                </Splide>
                <br />
                <div>
                    <Image width={900} height={400} className='w-full ' src="https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-HotBrandsPremiumStyles-header.jpg" alt='' />

                </div>
                <Splide options={{
                    perPage: 4,
                    arrows: true,
                    pagination: true,
                    drag: "free",
                    breakpoints: {
                        1200: { perPage: 3 },
                        640: { perPage: 1 },
                    },
                }}>


                    {data.slice(7, 13).map(item => {
                        return (
                            <div key={item.id}>
                                <SplideSlide  >
                                    <Link href="/pages/men/productdetails" className="block group motion-safe:hover:scale-110">
                                        <Image width={500} height={500}
                                            src={item.url}
                                            alt=""
                                            className="h-[350px] w-full object-contain sm:h-[450px]"
                                        />
                                    </Link>
                                </SplideSlide>
                            </div>
                        )
                    })}
                </Splide>
            </section>
        </div >
    );
};

export default WomenSlider;