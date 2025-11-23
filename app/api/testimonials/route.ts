import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "data")
const testimonialsFile = path.join(dataDir, "testimonials.json")

// GET - Buscar todos os depoimentos
export async function GET() {
  try {
    const fileContents = fs.readFileSync(testimonialsFile, "utf8")
    const testimonials = JSON.parse(fileContents)
    return NextResponse.json(testimonials, { status: 200 })
  } catch (error) {
    console.error("Erro ao ler depoimentos:", error)
    return NextResponse.json(
      { error: "Erro ao buscar depoimentos" },
      { status: 500 }
    )
  }
}

// POST - Adicionar novo depoimento
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, role, content, rating } = body

    if (!name || !role || !content || !rating) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    const fileContents = fs.readFileSync(testimonialsFile, "utf8")
    const testimonials = JSON.parse(fileContents)

    const newId = Math.max(...testimonials.map((t: any) => t.id), 0) + 1
    const newTestimonial = {
      id: newId,
      name,
      role,
      content,
      rating: parseInt(rating),
    }

    testimonials.push(newTestimonial)
    fs.writeFileSync(testimonialsFile, JSON.stringify(testimonials, null, 2))

    return NextResponse.json(newTestimonial, { status: 201 })
  } catch (error) {
    console.error("Erro ao adicionar depoimento:", error)
    return NextResponse.json(
      { error: "Erro ao adicionar depoimento" },
      { status: 500 }
    )
  }
}

// PUT - Atualizar depoimento
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, name, role, content, rating } = body

    if (!id) {
      return NextResponse.json(
        { error: "ID do depoimento é obrigatório" },
        { status: 400 }
      )
    }

    const fileContents = fs.readFileSync(testimonialsFile, "utf8")
    const testimonials = JSON.parse(fileContents)

    const index = testimonials.findIndex((t: any) => t.id === id)
    if (index === -1) {
      return NextResponse.json(
        { error: "Depoimento não encontrado" },
        { status: 404 }
      )
    }

    if (name) testimonials[index].name = name
    if (role) testimonials[index].role = role
    if (content) testimonials[index].content = content
    if (rating) testimonials[index].rating = parseInt(rating)

    fs.writeFileSync(testimonialsFile, JSON.stringify(testimonials, null, 2))

    return NextResponse.json(testimonials[index], { status: 200 })
  } catch (error) {
    console.error("Erro ao atualizar depoimento:", error)
    return NextResponse.json(
      { error: "Erro ao atualizar depoimento" },
      { status: 500 }
    )
  }
}

// DELETE - Remover depoimento
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get("id") || "0")

    if (!id) {
      return NextResponse.json(
        { error: "ID do depoimento é obrigatório" },
        { status: 400 }
      )
    }

    const fileContents = fs.readFileSync(testimonialsFile, "utf8")
    const testimonials = JSON.parse(fileContents)

    const filtered = testimonials.filter((t: any) => t.id !== id)
    
    if (filtered.length === testimonials.length) {
      return NextResponse.json(
        { error: "Depoimento não encontrado" },
        { status: 404 }
      )
    }

    fs.writeFileSync(testimonialsFile, JSON.stringify(filtered, null, 2))

    return NextResponse.json(
      { message: "Depoimento removido com sucesso" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao remover depoimento:", error)
    return NextResponse.json(
      { error: "Erro ao remover depoimento" },
      { status: 500 }
    )
  }
}

