import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, whatsapp, servico, descricao } = body

    // Validação básica
    if (!nome || !email || !whatsapp || !servico || !descricao) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    // Configuração do transporter (ajuste com suas credenciais)
    // Para Gmail, você precisará criar uma "App Password"
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Configuração do email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Nova solicitação de orçamento - ${servico}`,
      html: `
        <h2>Nova Solicitação de Orçamento</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Descrição:</strong></p>
        <p>${descricao.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    )
  }
}

