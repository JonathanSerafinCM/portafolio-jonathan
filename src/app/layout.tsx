import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Importar el Navbar

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
        <Navbar /> {/* Añadir el Navbar aquí */}
        {/* Aquí se renderizarán las páginas hijas */}
        <main>{children}</main> {/* Envolver children en un main para mejor semántica */}
      </body>
    </html>
  );
}
