export default function About() {
  return (
    <main className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About InspireMe Daily
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl ">
                Learn more about our mission and values.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                Our mission is to inspire people every day with motivational
                quotes and messages.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 ">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3 bg-white  p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Our Values
              </h2>
              <p className="text-gray-500 md:text-lg dark:text-gray-400">
                We believe in the power of positivity and strive to spread it
                around the world.
              </p>
            </div>
            <div className="space-y-3 bg-white  p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Join Us
              </h2>
              <p className="text-gray-500 md:text-lg ">
                Be a part of our journey and help us inspire more people every
                day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
