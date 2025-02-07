'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import github from '@/api/github';

function page() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!search) return;

    github(`/search/users?q=${search}`)
      .then((res) => {
        console.log(res);
        setUsers(res?.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [search]);

  return (
    <>
      <h1 className="text-5xl mb-3 text-center font-serif font-bold">GitHub User Search</h1>
      <div className="text-center">
        <input
          type="text"
          placeholder="Enter github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        {users.length > 0 && users.map((user, index) => {
          return (
            <li key={index} className="list-none">
              <Link href={`/search/${user.login}`} className="btn btn-active- btn-link">
                {user.login}
              </Link>
            </li>
          )
        })}
      </div>

    </>
  );
}

export default page;
