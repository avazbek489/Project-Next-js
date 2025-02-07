"use client";
import React from "react";
import data from '@/api/data.json'
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  function handleNavigate(id) {
    router.push(`/payment/${id}`)
  }
  return (
    <>
      <div className="flex container mb-5 mt-5 mx-auto flex-wrap items-center gap-5 justify-center w-[1000px]">
        {
          data.length > 0 && data.map((value, index) => {
            return (
              <div className="w-[32%] shadow-xl rounded-xl p-5 flex flex-col items-center gap-4" key={index}>
                <img src={value.image} alt={value.name} className="object-cover w-full h-[200px] rounded-md" />
                <div className="flex flex-col gap-3 items-center">

                  <h2 className="text-lg font-semibold font-serif">{value.name}</h2>
                  <h3 className="text-purple-900 text-lg font-mono font-bold">{value.price}</h3>
                  <button onClick={() => handleNavigate(value.id)} className="bg-green-500 px-4 p-2 text-white font-serif font-medium shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl">Buy</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Page;