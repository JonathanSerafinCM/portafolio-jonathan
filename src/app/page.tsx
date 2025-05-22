'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SkillsSection from '@/components/SkillsSection';

// Componente para la página de inicio
export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <>
      {/* Hero Section */}
      <motion.section 
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Efecto de partículas sutiles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center p-8 max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            variants={itemVariants}
          >
            Jonathan Serafín
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl text-gray-300 mb-6"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
            variants={itemVariants}
          >
            Desarrollador Full-Stack | Especialista en Tecnologías en la Nube
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Estudiante de Ingeniería en Sistemas con especialidad en Cloud Computing.
            Creador de AlzIa y apasionado por el desarrollo de soluciones innovadoras
            con IA y tecnologías cloud.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Link
              href="/projects"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 w-full sm:w-auto"
            >
              Ver Mis Proyectos
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg text-lg border-2 border-white/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-opacity-75 w-full sm:w-auto"
            >
              Contactar
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com/JonathanSerafinCM26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-serafin-contreras-malfavón-9b66b029a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full relative">
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Sección de Habilidades */}
      <SkillsSection />
    </>
  );
}
