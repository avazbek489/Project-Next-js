"use client";
import Link from "next/link";

function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Project Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Mahsulot Katalogi
          </h2>
          <p className="text-gray-700 mb-4">
            Mahsulotlar ro'yxatini olish va har bir mahsulotga batafsil ko'rib
            chiqish uchun
            <Link
              href="/product"
              className="text-purple-600 hover:text-purple-800"
            >
              bu yerni
            </Link>
            bosing.
          </p>
          <div className="text-purple-600 font-bold break-words">
            API: https://fakestoreapi.com/products
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Blog Platformasi
          </h2>
          <p className="text-gray-700 mb-4">
            Blog postlarini ko'rish va ularning batafsil sahifasiga o'tish uchun
            <Link
              href="/blog"
              className="text-purple-600 hover:text-purple-800"
            >
              bu yerni
            </Link>
            bosing.
          </p>
          <div className="text-purple-600 font-bold break-words">
            API: https://jsonplaceholder.typicode.com/posts
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Ob-havo Ilovasi
          </h2>
          <p className="text-gray-700 mb-4">
            Ob-havo ma'lumotlarini olish va shaharga tegishli ma'lumotlarni
            ko'rish uchun
            <Link
              href="/weather"
              className="text-purple-600 hover:text-purple-800"
            >
              bu yerni
            </Link>
            bosing.
          </p>
          <div className="text-purple-600 font-bold break-words">
            API: https://api.openweathermap.org/data/2.5/weather
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            To'lov Qo'llanmasi
          </h2>
          <p className="text-gray-700 mb-4">
            Mahsulotlar ro'yxati va to'lovlarni amalga oshirish uchun
            <Link
              href="/payment"
              className="text-purple-600 hover:text-purple-800"
            >
              bu yerni
            </Link>
            bosing.
          </p>
          <div className="text-purple-600 font-bold break-words">
            Stripe Checkout
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Qidiruv Funktsiyasi
          </h2>
          <p className="text-gray-700 mb-4">
            GitHub foydalanuvchilari haqida ma'lumotlarni qidirish va ko'rish
            uchun
            <Link
              href="/search"
              className="text-purple-600 hover:text-purple-800"
            >
              bu yerni
            </Link>
            bosing.
          </p>
          <div className="text-purple-600 font-bold break-words">
            API: https://api.github.com/users
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
