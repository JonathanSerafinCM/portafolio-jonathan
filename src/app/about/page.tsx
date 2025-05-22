'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaCloud, FaRobot } from 'react-icons/fa';

// Variantes para la animación de los elementos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Datos de los valores/principios
const values = [
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl mb-4" />,
    title: "Innovación Constante",
    description: "Busco siempre nuevas formas de resolver problemas y mejorar soluciones existentes. Mi proyecto AlzIa es un ejemplo de cómo la tecnología puede marcar la diferencia en la vida de las personas."
  },
  {
    icon: <FaCode className="text-blue-500 text-4xl mb-4" />,
    title: "Código Limpio y Eficiente",
    description: "Creo firmemente en escribir código mantenible y escalable. Mis proyectos se construyen siguiendo las mejores prácticas y patrones de diseño modernos."
  },
  {
    icon: <FaCloud className="text-purple-500 text-4xl mb-4" />,
    title: "Pensamiento Cloud-Native",
    description: "Mi especialización en tecnologías en la nube me permite diseñar soluciones escalables y resilientes, aprovechando al máximo servicios cloud modernos."
  },
  {
    icon: <FaRobot className="text-green-500 text-4xl mb-4" />,
    title: "IA con Propósito",
    description: "Mi experiencia con APIs de IA como Google Gemini y OpenAI me permite crear soluciones inteligentes que resuelven problemas reales del mundo actual."
  }
];

// Timeline de experiencia
const timeline = [
  {
    year: "2024",
    title: "Innovatecnm - AlzIa",
    description: "Desarrollo de un asistente virtual para la detección temprana de Alzheimer, obteniendo el segundo lugar en la fase local."
  },
  {
    year: "2023",
    title: "Proyectos Freelance",
    description: "Desarrollo de soluciones personalizadas para clientes, incluyendo un sistema de digitalización de menús con IA."
  },
  {
    year: "2022",
    title: "Inicio en Cloud Computing",
    description: "Especialización en tecnologías cloud y comienzo del aprendizaje en servicios de Azure y arquitecturas cloud-native."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Sección Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600"
              variants={itemVariants}
            >
              Mi Filosofía de Desarrollo
            </motion.h1>

            {/* Grid de valores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center text-center">
                    {value.icon}
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Línea de Tiempo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              variants={itemVariants}
            >
              Mi Trayectoria
            </motion.h2>

            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

              {/* Eventos de la línea de tiempo */}
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12"
                  variants={itemVariants}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-5/12"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white"></div>
                    <div className="w-5/12 p-4">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-sky-500 font-bold">{event.year}</span>
                        <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
                        <p className="text-gray-600 mt-2">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote/Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl font-light italic text-gray-600">
              "Mi objetivo es crear tecnología que no solo funcione bien,
              sino que tenga un impacto positivo en la vida de las personas."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
