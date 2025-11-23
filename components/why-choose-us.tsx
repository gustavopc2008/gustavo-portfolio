"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { User, TrendingUp, Clock, Globe, Smartphone, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: User,
    title: "PROFISSIONAL ESPECIALIZADO",
    description: "Experiência, dedicação e comprometimento total em cada projeto. Trabalho personalizado e focado em entregar excelência.",
    colors: "from-[#5A6CFF] to-[#8A4DFF]",
  },
  {
    icon: TrendingUp,
    title: "FOCO EM RESULTADO",
    description: "Desenvolvemos soluções pensadas para gerar retorno real, performance e crescimento para sua empresa.",
    colors: "from-[#5A6CFF] to-[#8A4DFF]",
  },
  {
    icon: Clock,
    title: "CUMPRIMOS PRAZOS",
    description: "Pontualidade é parte do nosso padrão. Se foi combinado, será entregue — com qualidade e responsabilidade.",
    colors: "from-[#5A6CFF] to-[#8A4DFF]",
  },
]

const techElements = [
  { icon: Globe, label: "Sites", delay: 0 },
  { icon: Smartphone, label: "Apps", delay: 0.1 },
  { icon: Share2, label: "Social Media", delay: 0.2 },
]

export function WhyChooseUs() {
  return (
    <section id="porque-escolher" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 via-light/70 to-purple-50/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight"
            >
              Por que escolher nossa agência?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark/70 leading-relaxed font-medium"
            >
              Entregamos soluções digitais com qualidade, estratégia e foco total em resultados. Acompanhamos cada etapa do projeto para garantir evolução real e crescimento para o seu negócio.
            </motion.p>

            <div className="space-y-6 mt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ x: 8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="border-2 border-primary/30 bg-white hover:shadow-xl transition-all duration-300 rounded-2xl cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <motion.div 
                                className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center bg-purple-50/50"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <motion.div 
                                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.colors} flex items-center justify-center shadow-lg`}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Icon className="h-6 w-6 text-white" />
                                </motion.div>
                              </motion.div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-dark mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-dark/70 leading-relaxed font-medium">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                  {techElements.map((element, index) => {
                    const Icon = element.icon
                    return (
                      <motion.div
                        key={element.label}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + element.delay }}
                        className="relative aspect-square"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30 shadow-lg"></div>
                        <div className="relative h-full flex flex-col items-center justify-center p-6">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5A6CFF] to-[#8A4DFF] flex items-center justify-center mb-4 shadow-lg">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-dark">{element.label}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
