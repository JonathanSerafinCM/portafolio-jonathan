'use client'; // Necesario para Framer Motion

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

// Definición del tipo para las props del ProjectCard
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    projectUrl?: string;
    repoUrl?: string;
    achievement?: string;
  };
}

// Componente ProjectCard
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-sky-200 hover:scale-[1.03] border border-gray-200 flex flex-col h-full" // Asegurar que todas las tarjetas tengan la misma altura si están en una cuadrícula
      variants={cardVariants}
      // initial="hidden" // Se controlará desde el componente padre (ProjectsPage)
      // animate="visible" // Se controlará desde el componente padre (ProjectsPage)
      // viewport={{ once: true, amount: 0.2 }} // Para animar al hacer scroll si se usa individualmente
    >
      {/* Imagen del proyecto */}
      <div className="relative w-full h-56">
        <Image
          src={project.imageUrl || "/images/placeholder-project.png"}
          alt={`Imagen del proyecto ${project.title}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110" // group-hover para la tarjeta
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-sky-700 mb-3">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
        {project.achievement && (
          <p className="text-xs text-amber-600 italic mb-4 bg-amber-50 p-2 rounded">
            <strong>Logro:</strong> {project.achievement}
          </p>
        )}
        <div className="mb-5">
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Tecnologías:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200 flex justify-end space-x-3">
          {project.projectUrl && project.projectUrl !== "#" && (
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 p-2 rounded-full hover:bg-sky-100"
                  title="Ver proyecto en vivo">
              <FaExternalLinkAlt size={20} />
            </Link>
          )}
          {project.repoUrl && project.repoUrl !== "#" && (
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  title="Ver código en GitHub">
              <FaGithub size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
