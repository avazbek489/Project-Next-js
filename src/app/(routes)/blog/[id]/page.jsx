'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blog } from '@/api/blog';

function BlogDetails() {
    const [blogs, setBlog] = useState('');
    const { id } = useParams();

    useEffect(() => {
        blog.get(`/posts/${id}`)
            .then((res) => {
                if (res.status == 200) {
                    setBlog(res.data)
                }
            })
            .catch((err) => console.log(err));
    }, [id]);


    return (
        <div className="container mx-auto">
            <Link href="/blog" className='btn btn-link text-2xl'>Back</Link>
            <div className="flex flex-col gap-5 mx-auto items-center justify-center text-center w-[900px] h-[200px]">
                <h1 className="text-3xl font-bold font-mono">{blogs.title}</h1>
                <p className="text-xl font-bold font-serif">{blogs.body}</p>
                <div className="mt-6">
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
