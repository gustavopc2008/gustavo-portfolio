"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Palette, 
  Image as ImageIcon, 
  Globe,
  User,
  TrendingUp,
  Clock,
  Smartphone,
  Share2
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Palette,
    title: "Logos",
    description: "Identidade visual única e memorável para sua marca com design profissional e moderno.",
    gradient: "from-[#5A6CFF] to-[#8A4DFF]",
  },
  {
    icon: ImageIcon,
    title: "Banners & Social Media",
    description: "Conteúdo visual impactante para redes sociais, banners promocionais e materiais gráficos.",
    gradient: "from-[#7B5FFF] to-[#A855F7]",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Desenvolvimento de websites modernos, responsivos e otimizados para conversão.",
    gradient: "from-[#6366F1] to-[#8A4DFF]",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 px-4 bg-gradient-to-b from-purple-50/40 via-light/80 to-purple-50/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-secondary/20"></div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Serviços</h2>
          <p className="text-dark/80 text-lg max-w-2xl mx-auto">
            Soluções completas em design e desenvolvimento para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center">
                    <motion.div 
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                    <p className="text-dark/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Por que escolher nossa agência? */}
        <div className="mt-20 pt-20 border-t border-primary/20">
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
                {[
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
                ].map((feature, index) => {
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
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/Agencia.png"
                  alt="Agência"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

