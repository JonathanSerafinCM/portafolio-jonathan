'use client'; // Necesario para Framer Motion

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react'; // Asegurar que React esté importado

// Definición de los enlaces de navegación
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
];

// Componente Navbar
export default function Navbar() {
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } // Pequeño retraso para que no sea tan inmediato
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const navContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // Animación escalonada para los items del nav
            delayChildren: 0.4 // Retraso para que los items aparezcan después del navbar principal
        }
    }
  };


  return (
    <motion.nav 
      className="bg-gray-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50" // Añadido fixed y z-index
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="container mx-auto flex justify-between items-center"
        variants={navContainerVariants} // Para animar los hijos (logo y links)
      >
        {/* Logo o Nombre del Sitio */}
        <motion.div variants={navItemVariants}>
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            Jonathan Serafín
          </Link>
        </motion.div>

        {/* Enlaces de Navegación */}
        <motion.div className="space-x-1 md:space-x-4" variants={navContainerVariants}> {/* Ajustado space-x para móviles */}
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navItemVariants} className="inline-block">
              <Link
                href={link.href}
                className="hover:text-gray-300 transition-colors px-2 py-2 md:px-3 rounded-md text-xs md:text-sm font-medium" // Ajustado padding y text size
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
