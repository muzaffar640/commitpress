import Link from "next/link";
import { Github } from "lucide-react";

const Watermark = () => {
  return (
    <Link
      href="https://github.com/muzaffar640/commitpress"
      target="_blank"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-gray-800 p-2 text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="View source on GitHub"
    >
      <Github className="h-5 w-5" />
    </Link>
  );
};

export default Watermark;
