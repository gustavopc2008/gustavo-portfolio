import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gustavo - Designer & Desenvolvedor Freelancer",
  description: "Designer e desenvolvedor freelancer especializado em design gráfico, desenvolvimento web, logos, banners, social media, TCCs, edição de vídeos, sites e pacotes PLR.",
  keywords: ["designer", "desenvolvedor", "freelancer", "design gráfico", "desenvolvimento web", "logos", "banners", "social media"],
  authors: [{ name: "Gustavo" }],
  icons: {
    icon: [
      { url: "/LogoV4.png", sizes: "32x32", type: "image/png" },
      { url: "/LogoV4.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/LogoV4.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/LogoV4.png",
  },
  openGraph: {
    title: "Gustavo - Designer & Desenvolvedor Freelancer",
    description: "Transformo ideias em realidade digital. Especializado em design gráfico, desenvolvimento web e soluções criativas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo - Designer & Desenvolvedor Freelancer",
    description: "Transformo ideias em realidade digital. Especializado em design gráfico, desenvolvimento web e soluções criativas.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/LogoV4.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/LogoV4.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/LogoV4.png" />
        <link rel="shortcut icon" href="/LogoV4.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

