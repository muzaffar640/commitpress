import { Terminal, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <Terminal className="w-20 h-20 mx-auto mb-6 text-cyan-400 animate-float" />
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-400 rounded-full filter blur-xl opacity-20 animate-pulse"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-500">
            Muzaffar Hossain
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Engineer | Front End Expert
          </p>
        </div>

        <div className="text-center mb-12 animate-fade-in animation-delay-300">
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Hey there! 🚀 Founding Frontend Engineer at{" "}
            <a
              href="https://www.transilience.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Transilience AI
            </a>
            , where I&#39;m turning cybersecurity headaches into high-fives.
            Nearly 6 years of making web apps that spark joy!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in animation-delay-600">
          <Link
            href="/Muzaffar.pdf"
            download
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-block mb-4 sm:mb-0"
          >
            Download Resume
          </Link>
          <div className="flex gap-6">
            <a
              href="https://github.com/muzaffar640"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/muzaffarhossain"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/iammuzaffar640"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              aria-label="Twitter"
            >
              <Twitter className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
