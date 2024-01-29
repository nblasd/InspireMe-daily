import { Button } from "./ui/button";
import React from "react";
import axios from "axios";

async function getData() {
  const res = await axios("https://api.api-ninjas.com/v1/quotes", {
    headers: { "X-Api-Key": process.env.API_KEY },
  });

  if (!res.data) {
    throw new Error(`failed to fetch`);
  }

  return res.data;
}

interface dataType {
  quote: string;
  author: string;
  category: string;
}
export default async function Hero() {
  const data: dataType[] = await getData();

  return (
    <main className="bg-gradient-to-r from-pink-500 to-purple-500">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                InspireMe Daily
              </h1>

              {data.map((item, index) => (
                <p
                  key={index}
                  className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400"
                >
                  {item.quote}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
