import { Inter, JetBrains_Mono } from "next/font/google";
import { HighlightInit } from "@highlight-run/next/client";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const isDevelopment = process.env.NODE_ENV === "development";
export const metadata = {
  title: "Muzaffar Hossain - Software Engineer | CommitPress",
  description:
    "Portfolio of Muzaffar Hossain, a Software Engineer specializing in React, NextJS, and more. Built with CommitPress - the database-free blog system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {!isDevelopment && (
        <HighlightInit
          projectId={process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
          serviceName="portfolio"
          tracingOrigins={true}
          networkRecording={{
            enabled: true,
            recordHeadersAndBody: true,
            urlBlocklist: [],
          }}
        />
      )}
      <html lang="en" className="dark">
        <body
          className={`${inter.variable} ${jetBrainsMono.variable} font-sans bg-gray-900 text-gray-100`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
