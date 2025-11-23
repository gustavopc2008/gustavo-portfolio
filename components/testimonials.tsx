"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export function Testimonials() {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Erro ao carregar depoimentos:", error)
        setLoading(false)
      })
  }, [])
  return (
    <section id="depoimentos" className="py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Depoimentos</h2>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            O que meus clientes dizem sobre o trabalho desenvolvido
          </p>
        </motion.div>

        {loading ? (
          <p className="text-center text-dark/70">Carregando depoimentos...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-primary/30 bg-white hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-light/50 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <motion.div 
                      className="flex gap-1 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.1 }}
                        >
                          <Star className="h-4 w-4 fill-secondary text-secondary" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <p className="text-dark/70">{testimonial.content}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-dark">{testimonial.name}</div>
                    <div className="text-sm text-dark/70">{testimonial.role}</div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

