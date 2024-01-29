import Alert from "./Alert";

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
export default async function Todaysquote() {
  const data: dataType[] = await getData();
  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Today&apos;s Inspiration
              </h2>
              {data.map((item, index) => (
                <div key={index}>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    &quot;{item.quote}&quot;
                  </p>
                  <p>- {item.author}.</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <div className="border p-2 rounded-lg hover:border-gray-400">
                <Alert
                  dailog="Share on Twitter"
                  title="Never Mind!! 🙄"
                  description=" This action cannot be accomplished.Because money is required to
              complete this operation, which I do not currently have.😢"
                />
              </div>
              <div className="border p-2 rounded-lg hover:border-gray-400">
                <Alert
                  dailog="Share on Facebook"
                  title="Never Mind!! 🙄"
                  description=" This action cannot be accomplished.Because money is required to
              complete this operation, which I do not currently have.😢"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
