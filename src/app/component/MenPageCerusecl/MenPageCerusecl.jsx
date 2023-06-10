"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import React from 'react';
import data from './MenProductData.json'
import Link from 'next/link';

const MenPageCerusecl = () => {
    return (
        <div className='font-serif'>
            <Image width={900} height={400} className='w-full -mt-8 motion-safe:hover:scale-110' src="https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-LitSponsorBrands-header.jpg" alt='' />
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
                            <SplideSlide  >
                                <Link href="/pages/men/productdetails" key={item.id} className="block ml-1 group motion-safe:hover:scale-110">
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
                            <SplideSlide  >
                                <Link href="/pages/men/productdetails" key={item.id} className="block group motion-safe:hover:scale-110">
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

export default MenPageCerusecl;