"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/15 via-transparent to-secondary/15"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/Sobre mimV2.png"
                  alt="Sobre Mim"
                  width={450}
                  height={450}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Sobre Mim</h2>
            <p className="text-dark/70 text-lg leading-relaxed">
              Sou um designer e desenvolvedor freelancer apaixonado por criar soluções que unem
              estética e funcionalidade. Com anos de experiência em design gráfico, desenvolvimento
              web e criação de conteúdo, transformo ideias em projetos digitais de alta qualidade.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed">
              Especializo-me em criar identidades visuais únicas, desenvolver websites modernos e
              responsivos, e produzir conteúdo visual impactante para redes sociais. Cada projeto
              é uma oportunidade de superar expectativas e entregar resultados excepcionais.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-primary/20 bg-purple-50/40 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <motion.div 
                      className="text-2xl font-bold bg-gradient-to-r from-[#5A6CFF] to-[#8A4DFF] bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                    >
                      2
                    </motion.div>
                    <div className="text-sm text-dark/70">Projetos Concluídos</div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-primary/20 bg-purple-50/40 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <motion.div 
                      className="text-2xl font-bold bg-gradient-to-r from-[#5A6CFF] to-[#8A4DFF] bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                    >
                      1
                    </motion.div>
                    <div className="text-sm text-dark/70">Anos de Experiência</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

