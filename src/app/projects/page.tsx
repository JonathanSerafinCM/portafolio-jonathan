'use client';

import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

// Datos de los proyectos
const projectsData = [
  {
    id: "glucolifestyle",
    title: "GlucoLifeStyle.AI - Plataforma para la Mejora de Calidad de Vida de Personas con Diabetes",
    description: "Responsable de la integración de modelos de lenguaje para análisis de patrones y recomendaciones personalizadas, configuración de pipelines CI/CD, e implementación de sistema de roles y control de consumo de tokens para la API de Gemini.",
    technologies: ["Laravel", "Docker", "PostgreSQL", "Google Gemini", "GitHub Actions"],
    imageUrl: "/images/projects/GlucoLifeStyle.IA.png",
    projectUrl: "#",
    repoUrl: "#",
    achievement: "Contribución significativa al desarrollo de un sistema funcional en un entorno colaborativo con sprints y entregables, adquiriendo experiencia en prácticas de desarrollo productivo.",
  },
  {
    id: "alzia",
    title: "AlzIa - Asistente Virtual para Detección Temprana de Alzheimer",
    description: "Rol enfocado en el desarrollo backend, creando y optimizando todos los endpoints necesarios para el análisis de biomarcadores lingüísticos y la interacción con la IA. Diseño e implementación de la lógica para el procesamiento de datos de audio y texto.",
    technologies: ["Django", "Google Gemini Live", "Embeddings", "React Native", "Docker"],
    imageUrl: "/images/projects/alzia-placeholder.png",
    projectUrl: "#",
    repoUrl: "#",
    achievement: "Obtención del segundo lugar en la fase local de Innovatecnm y clasificación a la etapa regional.",
  },
  {
    id: "menu-ia",
    title: "Sistema Freelance de Digitalización de Menús con IA",
    description: "Desarrollo de un sistema para convertir imágenes de menús de restaurantes en formato JSON estructurado, listo para la creación de bases de datos. Implementación de la generación automática de descripciones atractivas para cada platillo utilizando la API de OpenAI.",
    technologies: ["Django", "Python", "OpenAI API (GPT)", "PostgreSQL"],
    imageUrl: "/images/projects/menu_ia.png",
    projectUrl: "#",
    repoUrl: "#",
    achievement: "Entrega exitosa de una solución funcional que automatiza un proceso manual para el cliente.",
  }
];

// Variantes para la animación del contenedor de las tarjetas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    },
  },
};

// Componente para la página de "Proyectos"
export default function ProjectsPage() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mis Proyectos Destacados
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Una muestra de los desafíos que he abordado y las soluciones que he construido.
          </motion.p>
        </div>

        {/* Contenedor para las tarjetas de proyecto con animación */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
