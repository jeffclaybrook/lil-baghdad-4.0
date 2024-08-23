import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lil Baghdad Iraqi Cuisine",
  description: "Lil Baghdad food truck online menu for authentic Iraqi cuisine"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}