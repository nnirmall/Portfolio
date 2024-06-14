import { Inter } from "next/font/google";
import './globals.css';
import { Metadata } from "next";
import { StickyNavbar } from "./components/StickyNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title : 'Nirmal dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StickyNavbar/>
        {children}
       </body>

    </html>
  );
}
