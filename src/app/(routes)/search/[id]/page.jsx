'use client'
import { useState, useEffect } from 'react';
import github from '@/api/github';

function page({ params }) {
    const id = params.id
    const [user, setUser] = useState('');

    useEffect(() => {
        github(`/users/${id}`)
            .then((res) => {
                console.log(res?.data);
                setUser(res?.data);
            })
            .catch((err) => {
                console.log(err);
            });


    }, [id]);

    return (
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-5xl font-serif font-bold">{user?.login}</h1>
            <img src={user?.avatar_url} alt="" className="rounded-full w-[200px]" />
            <p className="mb-4">{user?.bio}</p>
            <a href={user?.html_url} className="btn btn-active btn-link">Github Profile</a>
        </div>
    );
}

export default page;