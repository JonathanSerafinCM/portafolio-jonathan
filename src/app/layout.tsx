import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuración de la fuente Inter
const inter = Inter({ subsets: ["latin"] });

// Metadatos del sitio web
export const metadata: Metadata = {
  title: "Portafolio de Jonathan Serafín",
  description: "Portafolio profesional de Jonathan Serafín Contreras Malfavón, Desarrollador Full-Stack.",
};

// Componente RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Etiqueta html con el idioma español
    <html lang="es">
      {/* Cuerpo del documento con la fuente Inter aplicada */}
      <body className={inter.className}>
        {/* Aquí se renderizarán las páginas hijas */}
        {children}
      </body>
    </html>
  );
}
