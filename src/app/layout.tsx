import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Muzaffar Hossain - Software Engineer",
  description:
    "Portfolio of Muzaffar Hossain, a Software Engineer specializing in React, NextJS, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
