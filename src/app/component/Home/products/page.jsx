"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import data from './data.json'


const ProductItem = () => {


    return (
        <div className='font-serif'>
            <Image width={900} height={400} className='w-full -mt-8 motion-safe:hover:scale-110' src="https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-StealworthyDeals-header.jpg" alt='' />
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


                    {data.slice(0,7).map(item => {
                        return (
                            <SplideSlide  >
                                <Link href="/pages/men/productdetails" key={item.id} class="block ml-1 group motion-safe:hover:scale-110">
                                    <Image width={500} height={500}
                                        src={item.url}
                                        alt=""
                                        className="h-[350px] w-full object-contain sm:h-[450px]"
                                    />
                                </Link>
                            </SplideSlide>



                        )
                    })}
                   

                </Splide>
                <br />
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


                    {data.slice(7,14).map(item => {
                        return (
                            <SplideSlide  >
                                <Link href="/pages/men/productdetails" key={item.id} class="block group motion-safe:hover:scale-110 ">
                                    <Image width={500} height={500}
                                        src={item.url}
                                        alt=""
                                        className="h-[350px] w-full object-contain sm:h-[450px]"
                                    />
                                </Link>
                            </SplideSlide>



                        )
                    })}
                   

                    





                </Splide>




            </section>

        </div >
    );
};

export default ProductItem;