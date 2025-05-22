import { FaPython, FaJs, FaPhp, FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaWindows, FaApple, FaCloud } from 'react-icons/fa'; // Añadido FaCloud
import { SiDjango, SiLaravel, SiTypescript, SiNextdotjs, SiFlutter, SiTailwindcss, SiGooglecloud, SiPostgresql, SiMysql, SiMongodb, SiSqlite, SiVsco, SiPostman, SiJira } from 'react-icons/si'; // Corregido: SiVsco. Removido SiVscode, SiMicrosoftazure
// Podríamos necesitar más iconos o una forma de manejar iconos genéricos

// Definición de categorías y habilidades
const skillCategories = [
  {
    name: "Lenguajes de Programación",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    name: "Frameworks/Librerías Backend",
    skills: [
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
  },
  {
    name: "Frameworks/Librerías Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "React Native", icon: <FaReact className="text-sky-600" /> }, // Mismo icono, diferente contexto
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      { name: "HTML", icon: <span className="text-orange-600 font-bold">HTML</span> }, // Icono simple o texto
      { name: "CSS", icon: <span className="text-blue-600 font-bold">CSS</span> }, // Icono simple o texto
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    ],
  },
  {
    name: "Inteligencia Artificial",
    skills: [
      { name: "Google Gemini", icon: <SiGooglecloud className="text-blue-500" /> }, // Icono genérico de Google Cloud
      { name: "OpenAI API", icon: <span className="text-green-500 font-bold">OpenAI</span> }, // Texto
      { name: "Embeddings", icon: <span className="font-bold">Embeds</span> }, // Texto
      { name: "NLP", icon: <span className="font-bold">NLP</span> }, // Texto
    ],
  },
  {
    name: "Bases de Datos", // Añadir las que uses: PostgreSQL, MySQL, MongoDB, SQLite
    skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "SQLite", icon: <SiSqlite className="text-sky-700" /> },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "CI/CD", icon: <FaCloud className="text-sky-600" /> }, // Usando FaCloud
      { name: "Azure", icon: <FaCloud className="text-sky-500" /> }, // Usando FaCloud
      // Añadir servicios específicos de Azure si se conocen
    ],
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "VS Code", icon: <SiVsco className="text-blue-500" /> }, // Corregido a SiVsco
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Jira", icon: <SiJira className="text-blue-600" /> },
    ],
  },
  {
    name: "Sistemas Operativos",
    skills: [
      { name: "Linux", icon: <FaLinux className="text-black" /> },
      { name: "Windows", icon: <FaWindows className="text-sky-600" /> },
      { name: "macOS", icon: <FaApple className="text-gray-500" /> },
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
              <h3 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 border-sky-200 pb-2">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium text-gray-700 text-center">{skill.name}</p>
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
