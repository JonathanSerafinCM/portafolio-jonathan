// Componente para la página de inicio (Hero Section)
export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden">
      {/* Efecto de fondo sutil (opcional, se puede mejorar con animaciones) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 text-center p-8 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          Jonathan Serafín Contreras Malfavón
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10"
           style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
          Desarrollador Full-Stack | Especialista en Tecnologías en la Nube
        </p>
        
        {/* Botón de llamada a la acción (ejemplo) */}
        <a
          href="#projects" // En el futuro, esto podría ser un scroll suave a la sección de proyectos
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Ver Mis Proyectos
        </a>
      </div>

      {/* Se podrían añadir más elementos visuales o animaciones aquí */}
    </section>
  );
}
