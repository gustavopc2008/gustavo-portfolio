"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("inicio")
  const [currentPath, setCurrentPath] = React.useState("")

  const navItems = [
    { href: "/#inicio", label: "Início", id: "inicio" },
    { href: "/#sobre", label: "Sobre nós", id: "sobre" },
    { href: "/#servicos", label: "Serviços", id: "servicos" },
    { href: "/#portfolio", label: "Portfólio", id: "portfolio" },
    { href: "/orcamento", label: "Contato", id: "contato" },
  ]

  React.useEffect(() => {
    // Verificar pathname inicial
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname)
      
      // Se estiver na página de orçamento, destacar Contato
      if (window.location.pathname === "/orcamento") {
        setActiveSection("contato")
      }
    }

    const handleScroll = () => {
      // Se estiver na página de orçamento, não fazer scroll detection
      if (window.location.pathname === "/orcamento") {
        return
      }

      const offset = 150 // Offset para considerar a seção ativa
      const scrollPosition = window.scrollY + offset

      const sections = navItems
        .filter(item => item.id !== "contato")
        .map(item => {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = window.scrollY + rect.top
            return {
              id: item.id,
              top: elementTop,
              bottom: elementTop + rect.height,
            }
          }
          return null
        })
        .filter(Boolean) as Array<{ id: string; top: number; bottom: number }>

      // Encontrar a seção atual baseada na posição do scroll
      let activeId = "inicio"
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (scrollPosition >= section.top) {
          activeId = section.id
          break
        }
      }

      setActiveSection(activeId)
    }

    // Verificar seção inicial baseada no hash
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash && window.location.pathname === "/") {
        setActiveSection(hash)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Verificar na montagem inicial

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0F1424] backdrop-blur-md border-b border-[#0F1424]/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/#inicio" className="flex-shrink-0">
            <Image
              src="/logoV2.png"
              alt="Logo"
              width={145}
              height={38}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id || (item.id === "contato" && currentPath === "/orcamento")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group py-2",
                    isActive
                      ? "text-[#5A6CFF]"
                      : "text-[#E4E8F7] hover:text-[#5A6CFF]"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#5A6CFF] to-[#8A4DFF] transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#E4E8F7] hover:text-[#5A6CFF] hover:bg-[#0F1424]/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.id === "contato" && currentPath === "/orcamento")
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive
                        ? "text-[#5A6CFF]"
                        : "text-[#E4E8F7] hover:text-[#5A6CFF]"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

