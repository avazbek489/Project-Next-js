"use client";
import { useState, useEffect } from "react";
import { weather } from "@/api/weather";

function Page() {
  const [city, setCity] = useState("");
  const [weathers, setWeathers] = useState("");
  const apiKey = "c7996f79fd27fe425648cb75bc39f985";

  useEffect(() => {
    if (city) {

      weather.get(`?q=${city}&appid=${apiKey}&units=metric`)

        .then((res) => {
          if (res.status == 200) {
            console.log(res);
            setWeathers(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [city]);

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5 text-center font-serif font-bold">Weather App</h1>
      <div className="w-[700px] mx-auto p-6 flex flex-col items-center shadow-lg">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input w-full max-w-xs"
          placeholder="Enter the city name..."
        />
        {weathers && (
          <div className="flex flex-col mt-5 items-center gap-4">
            <h2 className="text-2xl font-bold font-serif">{weathers.name}</h2>
            <p className="">{weathers.weather[0].description}</p>
            <p className="">Temperature: {weathers.main.temp}°C</p>
            <p className="">Humidity: {weathers.main.humidity}%</p>
            <p className="">Wind speed: {weathers.wind.speed} m/s</p>
          </div>
        )}
      </div>



    </div >
  );
}

export default Page;
