// Componente para la página de "Contacto"
export default function ContactPage() {
  // Lógica del formulario (manejo de estado, envío) se añadirá más adelante
  // Por ahora, solo la estructura visual

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-sky-100 text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-sky-700">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? Envíame un mensaje.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-2xl mx-auto">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="Asunto de tu mensaje"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
