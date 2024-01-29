"use client";
import Alert from "@/components/Alert";
import React from "react";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const [userName, setUserName] = React.useState<string>("");
  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
              <div className="flex flex-col space-y-4 md:space-y-6">
                <Input
                  className="w-full"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.currentTarget.value)}
                />
                <Input className="w-full" placeholder="Your Email" />
                <Input className="w-full h-24" placeholder="Your Message" />
                <div className="bg-black text-white py-2 rounded-lg hover:bg-gray-900">
                  <Alert
                    dailog="Send Message"
                    title={`Hello ${userName} 🙂`}
                    description="Thank you very much for visiting my website and attempting to get in touch with me. Unfortunately, this functionality isn't working properly because it requires backend integeration, which I'm still learning"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
