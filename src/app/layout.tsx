import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutsProvider from "@/context/WorkoutsProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Log",
  description: "A simple gym app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {/* Context API provider */}
        <WorkoutsProvider>
          {/* Nav bar */}
          <Navbar />

          <div> {children}</div>
          {/* Footer */}
          <Footer />

          {/* For react toasters */}
          <ToastContainer />
        </WorkoutsProvider>
      </body>
    </html>
  );
}
