import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Navbar from "@/components/global/Navbar";
import ReduxProvider from "@/components/global/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Maganlal Chikki",
    template: "%s | Maganlal Chikki",
  },
  description: "Authentic handmade chikki from Maganlal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Header />
          <Navbar />
          {children}
          <ToastContainer />
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
