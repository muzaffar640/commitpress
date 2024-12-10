import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/profile.png"
            alt="Muzaffar"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-xl font-bold font-mono">Muzaffar</span>
        </Link>
        <div className="flex space-x-4">
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
