"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Edit, Plus, Save, X } from "lucide-react"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  url?: string
  description?: string
}

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export default function AdminPage() {
  const [portfolio, setPortfolio] = React.useState<PortfolioItem[]>([])
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([])
  const [loading, setLoading] = React.useState(true)
  const [editingPortfolio, setEditingPortfolio] = React.useState<number | null>(null)
  const [editingTestimonial, setEditingTestimonial] = React.useState<number | null>(null)

  // Form states
  const [portfolioForm, setPortfolioForm] = React.useState({ title: "", category: "", image: "", url: "", description: "" })
  const [testimonialForm, setTestimonialForm] = React.useState({ name: "", role: "", content: "", rating: "5" })
  const [uploading, setUploading] = React.useState(false)
  const [imagePreview, setImagePreview] = React.useState<string>("")

  React.useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [portfolioRes, testimonialsRes] = await Promise.all([
        fetch("/api/portfolio"),
        fetch("/api/testimonials"),
      ])
      const portfolioData = await portfolioRes.json()
      const testimonialsData = await testimonialsRes.json()
      setPortfolio(portfolioData)
      setTestimonials(testimonialsData)
    } catch (error) {
      console.error("Erro ao carregar dados:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        const data = await res.json()
        setPortfolioForm({ ...portfolioForm, image: data.url })
        setImagePreview(data.url)
      } else {
        alert("Erro ao fazer upload da imagem")
      }
    } catch (error) {
      console.error("Erro ao fazer upload:", error)
      alert("Erro ao fazer upload da imagem")
    } finally {
      setUploading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Preview local
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      
      // Upload
      handleImageUpload(file)
    }
  }

  const handleAddPortfolio = async () => {
    if (!portfolioForm.image) {
      alert("Por favor, faça upload de uma imagem")
      return
    }
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(portfolioForm),
      })
      if (res.ok) {
        await loadData()
        setPortfolioForm({ title: "", category: "", image: "", url: "", description: "" })
        setImagePreview("")
      }
    } catch (error) {
      console.error("Erro ao adicionar projeto:", error)
    }
  }

  const handleUpdatePortfolio = async (id: number) => {
    try {
      const res = await fetch("/api/portfolio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...portfolioForm }),
      })
      if (res.ok) {
        await loadData()
        setEditingPortfolio(null)
        setPortfolioForm({ title: "", category: "", image: "", url: "", description: "" })
      }
    } catch (error) {
      console.error("Erro ao atualizar projeto:", error)
    }
  }

  const handleDeletePortfolio = async (id: number) => {
    if (!confirm("Tem certeza que deseja remover este projeto?")) return
    try {
      const res = await fetch(`/api/portfolio?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        await loadData()
      }
    } catch (error) {
      console.error("Erro ao remover projeto:", error)
    }
  }

  const handleAddTestimonial = async () => {
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...testimonialForm, rating: parseInt(testimonialForm.rating) }),
      })
      if (res.ok) {
        await loadData()
        setTestimonialForm({ name: "", role: "", content: "", rating: "5" })
      }
    } catch (error) {
      console.error("Erro ao adicionar depoimento:", error)
    }
  }

  const handleUpdateTestimonial = async (id: number) => {
    try {
      const res = await fetch("/api/testimonials", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...testimonialForm, rating: parseInt(testimonialForm.rating) }),
      })
      if (res.ok) {
        await loadData()
        setEditingTestimonial(null)
        setTestimonialForm({ name: "", role: "", content: "", rating: "5" })
      }
    } catch (error) {
      console.error("Erro ao atualizar depoimento:", error)
    }
  }

  const handleDeleteTestimonial = async (id: number) => {
    if (!confirm("Tem certeza que deseja remover este depoimento?")) return
    try {
      const res = await fetch(`/api/testimonials?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        await loadData()
      }
    } catch (error) {
      console.error("Erro ao remover depoimento:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-light py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-dark">Painel de Administração</h1>

        {/* Portfolio Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Gerenciar Projetos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  value={portfolioForm.title}
                  onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                  placeholder="Nome do projeto"
                />
              </div>
              <div>
                <Label htmlFor="category">Categoria</Label>
                <Select
                  value={portfolioForm.category}
                  onValueChange={(value) => setPortfolioForm({ ...portfolioForm, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lojas-virtuais">Lojas virtuais</SelectItem>
                    <SelectItem value="sites-institucionais">Sites institucionais</SelectItem>
                    <SelectItem value="aplicativos">Aplicativos</SelectItem>
                    <SelectItem value="identidade-visual">Identidade visual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="image">Imagem do Projeto</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={uploading}
                  className="cursor-pointer"
                />
                {uploading && <p className="text-sm text-dark/70 mt-1">Fazendo upload...</p>}
                {imagePreview && (
                  <div className="mt-2">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-32 h-20 object-cover rounded border"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="url">Link do Site (URL)</Label>
                <Input
                  id="url"
                  type="url"
                  value={portfolioForm.url}
                  onChange={(e) => setPortfolioForm({ ...portfolioForm, url: e.target.value })}
                  placeholder="https://exemplo.com"
                />
              </div>
              <div>
                <Label htmlFor="description">Descrição Breve</Label>
                <Textarea
                  id="description"
                  value={portfolioForm.description}
                  onChange={(e) => setPortfolioForm({ ...portfolioForm, description: e.target.value })}
                  placeholder="Breve descrição do projeto..."
                  rows={2}
                />
              </div>
            </div>
            <Button onClick={editingPortfolio ? () => handleUpdatePortfolio(editingPortfolio) : handleAddPortfolio}>
              {editingPortfolio ? <><Save className="mr-2 h-4 w-4" /> Salvar</> : <><Plus className="mr-2 h-4 w-4" /> Adicionar Projeto</>}
            </Button>
            {editingPortfolio && (
              <Button variant="outline" className="ml-2" onClick={() => {
                setEditingPortfolio(null)
                setPortfolioForm({ title: "", category: "", image: "", url: "", description: "" })
                setImagePreview("")
              }}>
                <X className="mr-2 h-4 w-4" /> Cancelar
              </Button>
            )}

            <div className="mt-6 space-y-4">
              {portfolio.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-dark/70">{item.category}</p>
                    {item.url && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        Ver site →
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setEditingPortfolio(item.id)
                        setPortfolioForm({ 
                          title: item.title, 
                          category: item.category, 
                          image: item.image,
                          url: item.url || "",
                          description: item.description || ""
                        })
                        setImagePreview(item.image)
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeletePortfolio(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Section */}
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Depoimentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={testimonialForm.name}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                  placeholder="Nome do cliente"
                />
              </div>
              <div>
                <Label htmlFor="role">Cargo/Empresa</Label>
                <Input
                  id="role"
                  value={testimonialForm.role}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                  placeholder="CEO, Empresa XYZ"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="content">Depoimento</Label>
                <Textarea
                  id="content"
                  value={testimonialForm.content}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                  placeholder="Texto do depoimento..."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="rating">Avaliação (1-5)</Label>
                <Select
                  value={testimonialForm.rating}
                  onValueChange={(value) => setTestimonialForm({ ...testimonialForm, rating: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 estrela</SelectItem>
                    <SelectItem value="2">2 estrelas</SelectItem>
                    <SelectItem value="3">3 estrelas</SelectItem>
                    <SelectItem value="4">4 estrelas</SelectItem>
                    <SelectItem value="5">5 estrelas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={editingTestimonial ? () => handleUpdateTestimonial(editingTestimonial) : handleAddTestimonial}>
              {editingTestimonial ? <><Save className="mr-2 h-4 w-4" /> Salvar</> : <><Plus className="mr-2 h-4 w-4" /> Adicionar Depoimento</>}
            </Button>
            {editingTestimonial && (
              <Button variant="outline" className="ml-2" onClick={() => {
                setEditingTestimonial(null)
                setTestimonialForm({ name: "", role: "", content: "", rating: "5" })
              }}>
                <X className="mr-2 h-4 w-4" /> Cancelar
              </Button>
            )}

            <div className="mt-6 space-y-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-dark/70">{testimonial.role}</p>
                      <p className="mt-2">{testimonial.content}</p>
                      <p className="text-sm text-dark/70 mt-2">⭐ {testimonial.rating}/5</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingTestimonial(testimonial.id)
                          setTestimonialForm({
                            name: testimonial.name,
                            role: testimonial.role,
                            content: testimonial.content,
                            rating: testimonial.rating.toString(),
                          })
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteTestimonial(testimonial.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

