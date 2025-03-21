import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Magus Academy - Minds in Motion",
  description: "Magus Academy offers expert tuition for Plus One, Plus Two, B.Arch, B.Tech, and M.Tech students.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/magus-icon.png", type: "image/png", sizes: "192x192" }],
    apple: { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'