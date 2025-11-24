"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  url?: string
  description?: string
}

const categories = [
  { id: "todos", label: "Todos" },
  { id: "lojas-virtuais", label: "Lojas virtuais" },
  { id: "sites-institucionais", label: "Sites institucionais" },
  { id: "aplicativos", label: "Aplicativos" },
  { id: "identidade-visual", label: "Identidade visual" },
]

// Mapeamento de categorias antigas para novas
const categoryMap: Record<string, string> = {
  "sites": "sites-institucionais",
  "logos": "identidade-visual",
  "banners": "identidade-visual",
  "social": "identidade-visual",
}

export function Portfolio() {
  const [portfolioItems, setPortfolioItems] = React.useState<PortfolioItem[]>([])
  const [selectedItem, setSelectedItem] = React.useState<PortfolioItem | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [activeFilter, setActiveFilter] = React.useState("todos")

  React.useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setPortfolioItems(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Erro ao carregar projetos:", error)
        setLoading(false)
      })
  }, [])

  const getCategoryLabel = (category: string) => {
    const mappedCategory = categoryMap[category] || category
    const categoryObj = categories.find(cat => cat.id === mappedCategory)
    return categoryObj?.label || category
  }

  const filteredItems = React.useMemo(() => {
    if (activeFilter === "todos") {
      return portfolioItems
    }
    return portfolioItems.filter(item => {
      const mappedCategory = categoryMap[item.category] || item.category
      return mappedCategory === activeFilter
    })
  }, [portfolioItems, activeFilter])

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark">Confira nosso portfólio</h2>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-[#5A6CFF] to-[#8A4DFF] text-white shadow-lg"
                    : "bg-white text-dark/70 hover:bg-light border border-primary/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {loading ? (
          <p className="text-center text-dark/70">Carregando projetos...</p>
        ) : filteredItems.length === 0 ? (
          <p className="text-center text-dark/70">Nenhum projeto encontrado nesta categoria.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer bg-transparent rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              onClick={() => setSelectedItem(item)}
            >
              <motion.div 
                className="relative aspect-[4/3] overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#5A6CFF]/0 group-hover:from-[#5A6CFF]/80 group-hover:to-[#8A4DFF]/80 transition-all duration-300 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span 
                    className="text-white font-semibold"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Ver Detalhes
                  </motion.span>
                </motion.div>
              </motion.div>
              <div className="p-4">
                <h3 className="font-semibold text-dark text-lg mb-2">{item.title}</h3>
                <motion.span 
                  className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {getCategoryLabel(item.category)}
                </motion.span>
              </div>
              {item.description && (
                <p className="mt-2 text-sm text-dark/70 line-clamp-2">{item.description}</p>
              )}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visitar site →
                </a>
              )}
            </motion.div>
          ))}
          </div>
        )}

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedItem?.title}</DialogTitle>
              <DialogDescription>
                {selectedItem?.description || "Visualização do projeto"}
              </DialogDescription>
            </DialogHeader>
            {selectedItem && (
              <>
                <div className="relative w-full rounded-lg overflow-hidden bg-black flex items-center justify-center" style={{ minHeight: '250px', maxHeight: '75vh', padding: '0.5rem' }}>
                  <div className="relative" style={{ width: '100%', height: '100%', maxHeight: '70vh' }}>
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      width={1200}
                      height={800}
                      className="object-contain rounded w-full h-auto"
                      style={{ maxHeight: '70vh' }}
                    />
                  </div>
                </div>
                {selectedItem.url && (
                  <div className="mt-4">
                    <a
                      href={selectedItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#5A6CFF] to-[#8A4DFF] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Visitar Site
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

