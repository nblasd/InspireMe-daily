import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="bg-gradient-to-r from-pink-500 to-purple-500">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src={"/logo/logo.png"}
            alt="logo"
            width={70}
            height={70}
          ></Image>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/About"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/Contact"
          >
            Contact
          </Link>
        </nav>
      </header>
    </main>
  );
}
