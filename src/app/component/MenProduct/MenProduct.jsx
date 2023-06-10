'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenProduct = () => {
    const data = [
        {
            id: 1,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-jompers-min60.jpg'
        },
        {
            id: 2,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-ausk-upto70.jpg'
        },
        {
            id: 3,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/09062023-D-MHP-TopNotchStyles-rarerabbit-upto50.jpg'
        },
        {
            id: 4,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-blackberrys-upto50.jpg'
        },
        {
            id: 5,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-campus-upto50.jpg'
        },
        {
            id: 6,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-doctororthosoft-starting249.jpg'
        },
        {
            id: 7,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-hangup-upto80.jpg'
        },
        {
            id: 8,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-thehollander-min60.jpg'
        },
        {
            id: 9,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-uspa-min50.jpg'
        },
        {
            id: 10,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-gas-3060%201.jpg'
        },
        {
            id: 10,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-tommyhilfiger-3060.jpg'
        },
        {
            id: 10,
            url: 'https://assets.ajio.com/cms/AJIO/WEB/01062023-D-MHP-TopNotchStyles-pepejeans-Flat60.jpg'
        },
    ]
    return (
        <div className='grid lg:grid-cols-4  mb-10'>
            {data.map(item => (
                <Link href='/pages/men/productdetails' key={item.id} class="relative block group mb-1">
                    <Image width={500} height={500}
                        src={item.url}
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
                    />


                </Link>
            ))}

        </div>
    );
};

export default MenProduct;