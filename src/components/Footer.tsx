import Link from "next/link";
import { Github, Twitter, Linkedin, Coffee, Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-8 bg-gray-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm">Built with</span>
            <Heart size={16} className="text-red-500" />
            <span className="text-sm">,</span>
            <Coffee size={20} />
            <span className="text-sm">and</span>
            <Link
              href="https://github.com/muzaffar640/commitpress"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              CommitPress
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/muzaffar640"
              className="hover-lift"
              target="_blank"
            >
              <Github
                size={24}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              />
            </Link>
            <Link
              href="https://x.com/iammuzaffar640"
              className="hover-lift"
              target="_blank"
            >
              <Twitter
                size={24}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muzaffarhossain"
              className="hover-lift"
              target="_blank"
            >
              <Linkedin
                size={24}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              />
            </Link>
            <Link
              href="mailto:muzaffar640@gmail.com"
              className="hover-lift"
              target="_blank"
              aria-label="Email"
            >
              <Mail
                size={24}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              />
            </Link>
          </div>

          <div className="text-gray-500 text-sm text-center">
            <p className=" text-xs opacity-60 hover:opacity-100 transition-opacity">
              No cookies 🍪 were harmed in the making of this website
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
