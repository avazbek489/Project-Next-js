'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { blog } from '@/api/blog';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    blog.get('/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleRedirect(id) {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5 text-center font-serif font-bold">Blog Posts</h1>
      <div className="flex mb-5 justify-center flex-wrap items-center gap-5 w-[1200px]">
        {posts.map((post, index) => (
          <div key={index} onClick={() => handleRedirect(post.id)} className="cursor-pointer flex flex-col gap-4 items-center justify-center  w-[30%] h-[200px] border-2 p-5 rounded-lg">
            <h2 className="text-xl text-center font-bold font-mono border-b-2">Title: {post.title}</h2>
            <p className="w-[300px] font-serif text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
