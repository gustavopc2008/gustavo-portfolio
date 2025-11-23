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

