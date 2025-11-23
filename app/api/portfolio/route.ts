import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "data")
const portfolioFile = path.join(dataDir, "portfolio.json")

// GET - Buscar todos os projetos
export async function GET() {
  try {
    const fileContents = fs.readFileSync(portfolioFile, "utf8")
    const portfolio = JSON.parse(fileContents)
    return NextResponse.json(portfolio, { status: 200 })
  } catch (error) {
    console.error("Erro ao ler portfolio:", error)
    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 }
    )
  }
}

// POST - Adicionar novo projeto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, category, image, url, description } = body

    if (!title || !category || !image) {
      return NextResponse.json(
        { error: "Título, categoria e imagem são obrigatórios" },
        { status: 400 }
      )
    }

    const fileContents = fs.readFileSync(portfolioFile, "utf8")
    const portfolio = JSON.parse(fileContents)

    const newId = Math.max(...portfolio.map((p: any) => p.id), 0) + 1
    const newProject = {
      id: newId,
      title,
      category,
      image,
      ...(url && { url }),
      ...(description && { description }),
    }

    portfolio.push(newProject)
    fs.writeFileSync(portfolioFile, JSON.stringify(portfolio, null, 2))

    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    console.error("Erro ao adicionar projeto:", error)
    return NextResponse.json(
      { error: "Erro ao adicionar projeto" },
      { status: 500 }
    )
  }
}

// PUT - Atualizar projeto
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, title, category, image, url, description } = body

    if (!id) {
      return NextResponse.json(
        { error: "ID do projeto é obrigatório" },
        { status: 400 }
      )
    }

    const fileContents = fs.readFileSync(portfolioFile, "utf8")
    const portfolio = JSON.parse(fileContents)

    const index = portfolio.findIndex((p: any) => p.id === id)
    if (index === -1) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 404 }
      )
    }

    if (title) portfolio[index].title = title
    if (category) portfolio[index].category = category
    if (image) portfolio[index].image = image
    if (url !== undefined) portfolio[index].url = url
    if (description !== undefined) portfolio[index].description = description

    fs.writeFileSync(portfolioFile, JSON.stringify(portfolio, null, 2))

    return NextResponse.json(portfolio[index], { status: 200 })
  } catch (error) {
    console.error("Erro ao atualizar projeto:", error)
    return NextResponse.json(
      { error: "Erro ao atualizar projeto" },
      { status: 500 }
    )
  }
}

// DELETE - Remover projeto
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get("id") || "0")

    if (!id) {
      return NextResponse.json(
        { error: "ID do projeto é obrigatório" },
        { status: 400 }
      )
    }

    const fileContents = fs.readFileSync(portfolioFile, "utf8")
    const portfolio = JSON.parse(fileContents)

    const filtered = portfolio.filter((p: any) => p.id !== id)
    
    if (filtered.length === portfolio.length) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 404 }
      )
    }

    fs.writeFileSync(portfolioFile, JSON.stringify(filtered, null, 2))

    return NextResponse.json(
      { message: "Projeto removido com sucesso" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao remover projeto:", error)
    return NextResponse.json(
      { error: "Erro ao remover projeto" },
      { status: 500 }
    )
  }
}

