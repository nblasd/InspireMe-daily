import Link from "next/link";
export default function Footer() {
  return (
    <main className="bg-gradient-to-r from-pink-500 to-purple-500">
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-400 dark:text-gray-400">
          © 2024 InspireMe Daily. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-2" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-2" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </main>
  );
}
