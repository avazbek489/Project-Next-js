'use client';
import { useEffect, useState } from 'react';
import { products } from '@/api/product';
import { useParams } from 'next/navigation';
import Link from 'next/link';

function ProductDetails() {
    const [product, setProduct] = useState('');
    const { id } = useParams();

    useEffect(() => {
        products.get(`/products/${id}`)
            .then(res => {
                if (res.status == 200) {
                    setProduct(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container mx-auto px-6">
            <Link href="/product" className='btn btn-link text-2xl'>Back</Link>
            <div className="flex text-center pl-[150px] gap-10 w-[1000px] h-[403px]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-1/2 h-[90%] rounded-lg"
                />
                <div className="w-full flex flex-col gap-5">
                    <h1 className="text-2xl capitalize font-serif font-bold">{product.category}</h1>
                    <h2 className="text-4xl font-semibold font-sans">{product.title}</h2>
                    <p className="text-lg font-serif">{product.description}</p>
                    <p className="text-2xl font-bold text-purple-700">Price: <span className='font-mono'>${product.price}</span></p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
