import React from 'react'; // Añadir importación de React
import { FaPython, FaJs, FaPhp, FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaWindows, FaApple, FaCloud } from 'react-icons/fa';
import { SiDjango, SiLaravel, SiTypescript, SiNextdotjs, SiFlutter, SiTailwindcss, SiGooglecloud, SiPostgresql, SiMysql, SiMongodb, SiSqlite, SiVsco, SiPostman, SiJira } from 'react-icons/si';
import { motion } from 'framer-motion'; // Importar motion

// Interfaz para una habilidad
interface Skill {
  name: string;
  icon: React.ReactNode; // Cambiado de JSX.Element a React.ReactNode
  level?: number; // Nivel de 0 a 100 para la barra de progreso (opcional)
}

// Interfaz para una categoría de habilidad
interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Definición de categorías y habilidades con niveles para algunas
const skillCategories: SkillCategory[] = [
  {
    name: "Lenguajes de Programación",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-500" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 80 },
      { name: "PHP", icon: <FaPhp className="text-indigo-500" />, level: 70 },
      { name: "Java", icon: <FaJava className="text-red-500" />, level: 65 },
    ],
  },
  {
    name: "Frameworks/Librerías Backend",
    skills: [
      { name: "Django", icon: <SiDjango className="text-green-700" />, level: 90 },
      { name: "Laravel", icon: <SiLaravel className="text-red-600" />, level: 75 },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 70 },
    ],
  },
  {
    name: "Frameworks/Librerías Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-sky-500" />, level: 85 },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" />, level: 80 },
      { name: "React Native", icon: <FaReact className="text-sky-600" />, level: 70 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: 90 },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" />, level: 60 },
      { name: "HTML", icon: <span className="text-orange-600 font-bold">HTML</span>, level: 95 },
      { name: "CSS", icon: <span className="text-blue-600 font-bold">CSS</span>, level: 90 },
    ],
  },
  {
    name: "Inteligencia Artificial",
    skills: [
      { name: "Google Gemini", icon: <SiGooglecloud className="text-blue-500" />, level: 75 },
      { name: "OpenAI API", icon: <span className="text-green-500 font-bold">OpenAI</span>, level: 80 },
      { name: "Embeddings", icon: <span className="font-bold">Embeds</span>, level: 70 },
      { name: "NLP", icon: <span className="font-bold">NLP</span>, level: 65 },
    ],
  },
  {
    name: "Bases de Datos",
    skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, level: 75 },
        { name: "MySQL", icon: <SiMysql className="text-orange-500" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 65 },
        { name: "SQLite", icon: <SiSqlite className="text-sky-700" />, level: 85 },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 80 },
      { name: "CI/CD", icon: <FaCloud className="text-sky-600" />, level: 70 },
      { name: "Azure", icon: <FaCloud className="text-sky-500" />, level: 65 },
    ],
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
      { name: "VS Code", icon: <SiVsco className="text-blue-500" />, level: 95 },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 85 },
      { name: "Jira", icon: <SiJira className="text-blue-600" />, level: 70 },
    ],
  },
  {
    name: "Sistemas Operativos",
    skills: [
      { name: "Linux", icon: <FaLinux className="text-black" />, level: 80 },
      { name: "Windows", icon: <FaWindows className="text-sky-600" />, level: 90 },
      { name: "macOS", icon: <FaApple className="text-gray-500" />, level: 60 },
    ],
  },
];

// Componente SkillsSection
export default function SkillsSection() {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-sky-700">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600">
            Un vistazo a las tecnologías y herramientas que manejo.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="p-6 bg-gray-50 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-8 border-b-2 border-sky-200 pb-3">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center mb-2">
                      <div className="text-2xl mr-3 group-hover:text-sky-500 transition-colors">{skill.icon}</div>
                      <p className="text-md font-medium text-gray-700 group-hover:text-sky-600 transition-colors">{skill.name}</p>
                    </div>
                    {typeof skill.level === 'number' && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
                        <motion.div
                          className="bg-sky-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
