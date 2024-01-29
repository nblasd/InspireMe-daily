"use client";
import useStore from "@/store/store";

export default function Previousquotes() {
  const quotes = useStore((state) => state.quotes);

  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            {quotes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-3 bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 min-h-96"
              >
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Previous Inspirations
                </h2>
                <p className="text-gray-500 md:text-lg dark:text-gray-400">
                  &quot;{item.quote}&quot;
                </p>
                <p>- {item.author}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
