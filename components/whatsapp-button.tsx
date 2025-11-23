"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  const phoneNumber = "5518997037393"
  const message = "Olá! Gostaria de solicitar um orçamento."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center cursor-pointer"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Fale comigo no WhatsApp
        </motion.div>
      </Link>
    </motion.div>
  )
}

