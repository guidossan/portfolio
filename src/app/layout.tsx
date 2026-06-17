import type { Metadata } from "next"
import { Geist_Mono, Space_Grotesk } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lorenzinitech.com"),
  title: {
    default: "Guilherme Lorenzini | Frontend Engineer",
    template: "%s | Guilherme Lorenzini",
  },
  description:
    "Frontend Engineer specialized in React, TypeScript and modern web applications.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  applicationName: "Guilherme Lorenzini Portfolio",
  authors: [{ name: "Guilherme Lorenzini", url: "https://lorenzinitech.com" }],
  creator: "Guilherme Lorenzini",
  publisher: "Guilherme Lorenzini",
  category: "Technology",
  keywords: [
    "Frontend Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
  ],
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}
