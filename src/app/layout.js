import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "André Dev | Fullstack",
  description: "Meu portfólio moderno.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}
      >
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
