'use client';

import React, { useEffect, useState } from 'react';
import { products } from '@/api/product';
import { useRouter } from 'next/navigation';

function page() {
    const [product, setProduct] = useState([]);
    const router = useRouter();

    useEffect(() => {
        products.get("/products")
            .then(res => {
                if (res.status === 200) {
                    setProduct(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function handleRedirect(id) {
        router.push(`/product/${id}`);
    }

    return (
        <>
            <h1 className='text-5xl mb-3 text-center font-serif font-bold'>Products</h1>
            <ul className='flex flex-wrap container w-[1000px] mx-auto items-center justify-center gap-5'>
                {product.length > 0 &&
                    product.map((item, index) => {
                        return (
                            <li
                                onClick={() => handleRedirect(item.id)}
                                className='w-[30%] h-[370px] flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-2xl cursor-pointer p-5 rounded-xl shadow-xl'
                                key={index}
                            >
                                <img
                                    className='object-cover h-[200px] rounded-lg w-full'
                                    src={item.image}
                                    alt={item.title}
                                />
                                <h2 className='text-center font-serif font-medium'>{item.title}</h2>
                                <p className='text-xl text-purple-950'>Price: ${item.price}</p>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}

export default page;
