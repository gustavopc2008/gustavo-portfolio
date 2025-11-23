"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Mail, Linkedin, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/gustavodesign_tech/", label: "Instagram" },
    
    { icon: Linkedin, href: "https://www.linkedin.com/in/gustavo-ferrari-da-silva-82a61b39a/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/gustavopc2008", label: "GitHub" },
  ]

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full" style={{ height: '60px', zIndex: 1, marginTop: '-60px' }}>
        <svg 
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none" 
          className="w-full h-full"
          style={{ display: 'block' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0F1424" />
              <stop offset="100%" stopColor="#1A1F37" />
            </linearGradient>
          </defs>
          <path 
            d="M0,60 L0,0 Q240,30 480,20 T960,30 T1440,20 L1440,60 Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
      <footer className="relative overflow-hidden" style={{
        background: 'linear-gradient(180deg, #0F1424 0%, #1A1F37 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 20px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        paddingTop: '60px',
        marginTop: '-60px'
      }}>
        <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5A6CFF' }}>
              Sobre mim
            </h3>
            <p className="leading-relaxed" style={{ color: '#CCD2E8' }}>
              Designer e desenvolvedor freelancer especializado em criar soluções digitais
              que transformam ideias em realidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: '#5A6CFF' }}>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/#inicio" 
                  className="inline-block transition-all duration-300 hover:underline"
                  style={{ color: '#CCD2E8' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#8A4DFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#CCD2E8'
                  }}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/#servicos" 
                  className="inline-block transition-all duration-300 hover:underline"
                  style={{ color: '#CCD2E8' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#8A4DFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#CCD2E8'
                  }}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  href="/#portfolio" 
                  className="inline-block transition-all duration-300 hover:underline"
                  style={{ color: '#CCD2E8' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#8A4DFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#CCD2E8'
                  }}
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link 
                  href="/#sobre" 
                  className="inline-block transition-all duration-300 hover:underline"
                  style={{ color: '#CCD2E8' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#8A4DFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#CCD2E8'
                  }}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  href="/orcamento" 
                  className="inline-block transition-all duration-300 hover:underline"
                  style={{ color: '#CCD2E8' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#8A4DFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#CCD2E8'
                  }}
                >
                  Orçamento
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: '#5A6CFF' }}>
              Redes Sociais
            </h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      border: '1px solid #5A6CFF',
                      backgroundColor: '#1A1F37'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15,
                      boxShadow: '0 0 20px rgba(90, 108, 255, 0.5), 0 0 40px rgba(138, 77, 255, 0.3)',
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" style={{ color: 'rgba(255, 255, 255, 0.9)' }} />
                  </motion.a>
                )
              })}
            </div>
            <motion.a
              href="mailto:gustavodesigntech@gmail.com"
              className="inline-block transition-all duration-300 hover:underline"
              style={{ color: '#CCD2E8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8A4DFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CCD2E8'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              
            </motion.a>
          </motion.div>
        </div>

        <div className="mt-16">
          <p 
            className="text-center text-sm"
            style={{ 
              color: '#AAB2CF',
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
          >
            &copy; {currentYear} Gustavo. Todos os direitos reservados.
          </p>
          <div 
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              marginTop: '2rem'
            }}
          />
        </div>
      </div>
    </footer>
    </div>
  )
}

