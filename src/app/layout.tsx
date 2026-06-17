import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    "Frontend Engineer specialized in React, TypeScript and modern web applications. Building scalable interfaces, performant user experiences and production-ready software.",

  applicationName: "Guilherme Lorenzini Portfolio",

  authors: [
    {
      name: "Guilherme Lorenzini",
      url: "https://lorenzinitech.com",
    },
  ],

  creator: "Guilherme Lorenzini",

  publisher: "Guilherme Lorenzini",

  category: "Technology",

  keywords: [
    "Frontend Engineer",
    "Software Engineer",
    "React Developer",
    "TypeScript Developer",
    "Next.js",
    "React",
    "Java",
    "Spring Boot",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Development",
    "Software Development",
    "Remote Developer",
    "Brazilian Developer",
    "Freelance Developer",
    "SaaS Development",
    "UI Development",
    "Web Applications",
    "JavaScript",
    "TailwindCSS",
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      "pt-BR": "/pt",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lorenzinitech.vercel.app.com",
    siteName: "Lorenzini Portfolio",

    title: "Guilherme Lorenzini | Frontend Engineer",

    description:
      "Frontend Engineer focused on React, TypeScript and scalable web applications.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Lorenzini Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Guilherme Lorenzini | Frontend Engineer",

    description:
      "Frontend Engineer focused on React, TypeScript and scalable web applications.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
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
