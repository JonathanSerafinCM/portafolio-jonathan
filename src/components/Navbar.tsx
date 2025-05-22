import Link from 'next/link';

// Definición de los enlaces de navegación
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" }, // Asumiendo que tendremos una página o sección de contacto
];

// Componente Navbar
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o Nombre del Sitio */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
          Jonathan Serafín
        </Link>

        {/* Enlaces de Navegación */}
        <div className="space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
