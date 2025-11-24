"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  servico: z.string().min(1, "Selecione um serviço"),
  descricao: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"success" | "error" | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const servico = watch("servico")

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Número do WhatsApp (mesmo do botão verde)
      const phoneNumber = "5518997037393"
      
      // Capturar arquivos anexados
      const fileInput = fileInputRef.current
      const files = fileInput?.files
      let arquivosInfo = ""
      
      if (files && files.length > 0) {
        const fileNames = Array.from(files).map(file => file.name).join(", ")
        arquivosInfo = `\n*Arquivos anexados:* ${files.length} arquivo(s)\n${fileNames}\n\n*Nota:* Os arquivos podem ser enviados após abrir esta conversa no WhatsApp.`
      }
      
      // Formatar mensagem com os dados do formulário
      const mensagem = `Olá! Gostaria de solicitar um orçamento.\n\n` +
        `*Nome:* ${data.nome}\n` +
        `*Email:* ${data.email}\n` +
        `*WhatsApp:* ${data.whatsapp}\n` +
        `*Serviço:* ${data.servico}\n` +
        `*Descrição:*\n${data.descricao}${arquivosInfo}`

      // Criar URL do WhatsApp
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`
      
      // Abrir WhatsApp em nova aba
      window.open(whatsappUrl, '_blank')
      
      setSubmitStatus("success")
      reset()
      // Limpar arquivos
      if (fileInput) {
        fileInput.value = ""
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba um orçamento personalizado para seu projeto
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Formulário de Contato</CardTitle>
              <CardDescription>
                Preencha todos os campos para receber um orçamento detalhado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      {...register("nome")}
                      placeholder="Seu nome completo"
                    />
                    {errors.nome && (
                      <p className="text-sm text-destructive">{errors.nome.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      {...register("whatsapp")}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.whatsapp && (
                      <p className="text-sm text-destructive">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servico">Tipo de Serviço *</Label>
                    <Select value={servico} onValueChange={(value) => setValue("servico", value)}>
                      <SelectTrigger id="servico">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="logos">Logos</SelectItem>
                        <SelectItem value="banners">Banners & Social Media</SelectItem>
                        <SelectItem value="tccs">TCCs</SelectItem>
                        <SelectItem value="videos">Edição de Vídeos</SelectItem>
                        <SelectItem value="sites">Sites & Landing Pages</SelectItem>
                        <SelectItem value="plr">Pacotes PLR</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.servico && (
                      <p className="text-sm text-destructive">{errors.servico.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição do Projeto *</Label>
                  <Textarea
                    id="descricao"
                    {...register("descricao")}
                    placeholder="Descreva seu projeto em detalhes..."
                    rows={6}
                  />
                  {errors.descricao && (
                    <p className="text-sm text-destructive">{errors.descricao.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arquivo">Anexar Arquivos (Opcional)</Label>
                  <Input
                    id="arquivo"
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground">
                    Formatos aceitos: JPG, PNG, PDF, DOC, DOCX (máx. 10MB). Os arquivos serão mencionados na mensagem do WhatsApp e você poderá enviá-los após abrir a conversa.
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Redirecionando para o WhatsApp... A mensagem já está formatada e pronta para enviar!
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
                    </p>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Abrindo WhatsApp..."
                  ) : (
                    <>
                      Enviar via WhatsApp
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

