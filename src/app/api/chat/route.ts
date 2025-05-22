import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Configuración del modelo y contexto
const MODEL_NAME = "gemini-2.0-flash-lite";
const SYSTEM_PROMPT = `Eres un asistente virtual para el portafolio de Jonathan Serafín Contreras Malfavón.
Debes responder preguntas sobre su perfil profesional usando la siguiente información:

- Estudiante de 8º semestre de Ingeniería en Sistemas Computacionales con especialidad en Tecnologías en la Nube
- Experiencia en desarrollo backend (Django, Laravel), IA (Google Gemini, OpenAI API, Embeddings), DevOps (Docker, CI/CD) y soluciones cloud
- Creador de AlzIa, un asistente virtual para detección temprana de Alzheimer que obtuvo segundo lugar en Innovatecnm
- Experiencia en proyectos freelance incluyendo un sistema de digitalización de menús con IA
- Habilidades técnicas destacadas:
  * Lenguajes: Python, JavaScript, TypeScript, PHP, Java
  * Frameworks Backend: Django, Laravel, Node.js
  * Frameworks Frontend: React, Next.js, React Native, Flutter, HTML/CSS, Tailwind
  * IA: Google Gemini, OpenAI API, Embeddings, NLP
  * DevOps: Docker, CI/CD, Azure
  * Bases de datos: PostgreSQL, MySQL, MongoDB, SQLite
- Nivel de inglés B2 (Cambridge First)
- Buscando oportunidades de residencias profesionales para aplicar y expandir conocimientos

Responde de manera profesional pero amigable, destacando sus logros y experiencia relevante según la pregunta.
Si te preguntan algo que no está en esta información, indica que no tienes esa información específica.`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // Crear el historial de chat con el contexto del sistema
    // Primero configurar el contexto del sistema
    const result = await model.generateContent([
      { text: SYSTEM_PROMPT },
      { text: message }
    ]);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error('Error en el chat:', error);
    return NextResponse.json(
      { error: 'Error al procesar tu mensaje' },
      { status: 500 }
    );
  }
}
