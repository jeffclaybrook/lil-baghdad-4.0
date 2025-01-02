import type { Metadata } from "next"
import { Host_Grotesk } from "next/font/google"
import { ReactNode } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import Footer from "@/components/footer"
import "./globals.css"

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Lil Baghdad",
  description: "Lil Baghdad Iraqi Cuisine"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable} antialiased`}>
        <GoogleAnalytics gaId="G-JDJYK3LM1M" />
        {children}
        <Footer />
      </body>
    </html>
  )
}