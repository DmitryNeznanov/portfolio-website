import type { Metadata } from "next"
import "./globals.css"

import { Ubuntu, IBM_Plex_Mono } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500"],
})
const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-IBM-plex-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Web-portfolio",
  description: "Web-portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${ubuntu.className} ${IBMPlexMono.className} bg-black-light`}
      lang="en"
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
