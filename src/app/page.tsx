'use client'; // Necesario para hooks de Framer Motion y otros hooks de cliente

import Link from 'next/link';
import { motion } from 'framer-motion';

// Componente para la página de inicio (Hero Section)
export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Retraso entre la animación de los hijos
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Efecto de fondo sutil */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <motion.div 
        className="relative z-10 text-center p-8 max-w-3xl mx-auto"
        // No necesita variants aquí si los hijos los tienen y usamos staggerChildren
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          variants={itemVariants}
        >
          Jonathan Serafín Contreras Malfavón
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10"
           style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
           variants={itemVariants}
        >
          Desarrollador Full-Stack | Especialista en Tecnologías en la Nube
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link
            href="/projects"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          >
            Ver Mis Proyectos
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
