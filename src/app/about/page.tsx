'use client'; // Necesario para Framer Motion

import SkillsSection from '@/components/SkillsSection';
import { motion } from 'framer-motion';

// Variantes para la animación de los elementos de texto
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Componente para la página "Sobre Mí"
export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Para animar título y subtítulo secuencialmente
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              variants={textVariants}
            >
              Sobre Mí
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              variants={textVariants}
            >
              Conoce un poco más sobre mi trayectoria y mis pasiones.
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-xl rounded-lg p-8 md:p-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible" // Animar cuando entre en la vista
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.p className="text-lg md:text-xl leading-relaxed mb-6" variants={textVariants}>
              Soy Jonathan Serafín Contreras Malfavón, un estudiante proactivo de 8.º semestre de Ingeniería en Sistemas Computacionales con especialidad en Tecnologías en la Nube. Mi objetivo es encontrar una oportunidad de residencias profesionales donde pueda aplicar y expandir mis conocimientos en desarrollo backend (Django, Laravel), Inteligencia Artificial (Google Gemini, OpenAI API, Embeddings), DevOps (Docker, CI/CD) y soluciones cloud.
            </motion.p>
            <motion.p className="text-lg md:text-xl leading-relaxed mb-6" variants={textVariants}>
              Me motiva profundamente la creación de soluciones tecnológicas innovadoras que tengan un impacto real. Esta pasión se refleja en mi participación activa en proyectos freelance y en el desarrollo del asistente <strong className="font-semibold">AlzIa</strong>, una herramienta para la detección temprana de Alzheimer que fue galardonada en Innovatecnm.
            </motion.p>
            <motion.p className="text-lg md:text-xl leading-relaxed" variants={textVariants}>
              Busco constantemente aprender y crecer, enfrentando nuevos desafíos que me permitan desarrollar mis habilidades y contribuir al mundo de la tecnología.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <SkillsSection /> {/* SkillsSection ya tiene sus propias animaciones whileInView */}
    </> 
  );
}
