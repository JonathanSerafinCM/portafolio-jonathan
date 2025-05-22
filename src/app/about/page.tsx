import SkillsSection from '@/components/SkillsSection'; // Importar el componente de Habilidades

// Componente para la página "Sobre Mí"
export default function AboutPage() {
  return (
    <> {/* Usar Fragment para envolver múltiples secciones */}
      <section className="py-16 md:py-24 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-600">
            Conoce un poco más sobre mi trayectoria y mis pasiones.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Soy Jonathan Serafín Contreras Malfavón, un estudiante proactivo de 8.º semestre de Ingeniería en Sistemas Computacionales con especialidad en Tecnologías en la Nube. Mi objetivo es encontrar una oportunidad de residencias profesionales donde pueda aplicar y expandir mis conocimientos en desarrollo backend (Django, Laravel), Inteligencia Artificial (Google Gemini, OpenAI API, Embeddings), DevOps (Docker, CI/CD) y soluciones cloud.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Me motiva profundamente la creación de soluciones tecnológicas innovadoras que tengan un impacto real. Esta pasión se refleja en mi participación activa en proyectos freelance y en el desarrollo del asistente <strong className="font-semibold">AlzIa</strong>, una herramienta para la detección temprana de Alzheimer que fue galardonada en Innovatecnm.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Busco constantemente aprender y crecer, enfrentando nuevos desafíos que me permitan desarrollar mis habilidades y contribuir al mundo de la tecnología.
          </p>
          {/* Aquí se podrían añadir más detalles, como hobbies o intereses específicos si se desea */}
        </div>
      </div>
    </section>

    {/* Sección de Habilidades integrada */}
    <SkillsSection />
    </>
  );
}
