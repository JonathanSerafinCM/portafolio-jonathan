'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Definición de los enlaces de navegación
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
];

// Componente Navbar
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
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
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      className="bg-gray-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="container mx-auto flex justify-between items-center"
        variants={navContainerVariants}
      >
        {/* Logo */}
        <motion.div variants={navItemVariants}>
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            Jonathan Serafín
          </Link>
        </motion.div>

        {/* Enlaces de escritorio */}
        <motion.div className="hidden md:flex space-x-4" variants={navContainerVariants}>
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navItemVariants} className="inline-block">
              <Link
                href={link.href}
                className="hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón del menú móvil */}
        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </motion.div>

      {/* Menú móvil */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 mt-2 rounded-lg">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={mobileItemVariants}
              className="block"
            >
              <Link
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
