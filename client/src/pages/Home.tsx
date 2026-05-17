import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Mail, Linkedin, Globe, Instagram } from 'lucide-react';

/**
 * Home Page - Portafolio Alejandra Gómez Gutiérrez
 * Design: Clean & Architectural
 * - Hero Section (90vh)
 * - Arquitectura (Grid 2 columnas)
 * - Branding (Grid 2 columnas)
 * - Sobre Mí (2 columnas)
 * - Contacto (Formulario centrado)
 * - Footer
 */

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  achievements: string[];
  images: string[];
  location?: string;
  year?: string;
  software?: string[];
}

const architectureProjects: Project[] = [
  {
    id: 'urban-centers',
    title: 'Centros Urbanos: Diagnóstico y Horizonte Futuro',
    category: 'Urbanismo',
    description: 'Análisis integral de centros urbanos existentes con diagnóstico de sostenibilidad y proyección territorial a largo plazo. Propuesta de transformación bioclimática y regeneración urbana.',
    achievements: [],
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663480534019/CqLEfrdPK4UsHQsm8U67Lt/project-urbanism-bdDHJ82jG7eceNudwqLD7b.webp',
    ],
    location: 'Bogotá, Colombia',
    year: '2024',
    software: ['Revit', 'AutoCAD', 'Rhinoceros'],
  },
  {
    id: 'habitat-sostenible',
    title: 'Hábitat Sostenible en Nuevos Territorios',
    category: 'Concurso',
    description: 'Proyecto ganador del Concurso Corona. Diseño de hábitat sostenible integrando metodología BIM, arquitectura bioclimática y planificación territorial innovadora.',
    achievements: ['Proyecto Ganador', 'Representante Institucional Javeriana'],
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663480534019/CqLEfrdPK4UsHQsm8U67Lt/project-housing-ZhuDPcNc7BPvkTDLkf4XSX.webp',
    ],
    location: 'Territorio Nacional',
    year: '2023',
    software: ['Revit BIM', 'Dynamo', 'Analysis Tools'],
  },
  {
    id: 'torre-vivienda',
    title: 'Torre de Vivienda en Altura',
    category: 'Residencial',
    description: 'Desarrollo técnico completo de torre residencial con enfoque en sostenibilidad. Incluye planimetría detallada, estructura BIM y sistemas bioclimáticos integrados.',
    achievements: [],
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663480534019/CqLEfrdPK4UsHQsm8U67Lt/hero-architecture-QAJ7q3Gpn68e2rmFRTqqaA.webp',
    ],
    location: 'Bogotá, Colombia',
    year: '2024',
    software: ['Revit', 'Tekla Structures', 'SAP2000'],
  },
  {
    id: 'innovacion-culinaria',
    title: 'Innovación Culinaria - Concurso Tramontina',
    category: 'Diseño de Interiores',
    description: 'Diseño ergonómico de cocina contemporánea ganador del Concurso Tramontina. Integración de espacios, flujo de trabajo y estética minimalista.',
    achievements: ['Proyecto Ganador'],
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663480534019/CqLEfrdPK4UsHQsm8U67Lt/branding-identity-TJzkexsCWRjrMxCgAP3V2t.webp',
    ],
    location: 'Bogotá, Colombia',
    year: '2023',
    software: ['SketchUp', 'Illustrator', 'Revit'],
  },
];

const brandingProjects: Project[] = [
  {
    id: 'colab',
    title: 'Colab',
    category: 'Branding',
    description: 'Diseño de identidad visual completa y UI Kit para plataforma colaborativa. Sistema de diseño coherente con componentes reutilizables.',
    achievements: [],
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663480534019/CqLEfrdPK4UsHQsm8U67Lt/design-system-g6Mao8KW48BStzQ6Fu52V4.webp',
    ],
    year: '2024',
    software: ['Figma', 'Illustrator', 'Adobe XD'],
  },
  {
    id: 'foodpoint',
    title: 'FoodPoint',
    category: 'Branding Aplicado',
    description: 'Branding integral aplicado a vehículos, piezas corporativas y gran formato. Identidad visual coherente en múltiples touchpoints.',
    achievements: [],
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663480534019/CqLEfrdPK4UsHQsm8U67Lt/branding-identity-TJzkexsCWRjrMxCgAP3V2t.webp',
    ],
    year: '2023',
    software: ['Figma', 'Illustrator', 'InDesign'],
  },
];

const skills = [
  'Revit BIM',
  'Planificación Urbana',
  'Arquitectura Bioclimática',
  'Branding',
  'Dirección de Arte',
  'IA Generativa',
  'Illustrator',
  'Photoshop',
  'InDesign',
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Mensaje enviado correctamente. ¡Gracias por contactarme!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480534019/CqLEfrdPK4UsHQsm8U67Lt/hero-architecture-QAJ7q3Gpn68e2rmFRTqqaA.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Alejandra Gómez Gutiérrez
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Arquitectura Bioclimática • Metodología BIM • Branding Estructural
          </p>
          <p className="text-base md:text-lg mb-8 text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Explorando la intersección entre arquitectura sostenible y branding estructural.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('architecture');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 border-2 border-white text-white font-semibold hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 ease-in-out duration-300 rounded"
          >
            Explorar Proyectos
          </button>
        </div>
      </section>

      {/* Arquitectura Section */}
      <section id="architecture" className="w-full py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Arquitectura y Urbanismo
            </h2>
            <div className="w-12 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.images[0]}
                title={project.title}
                category={project.category}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section id="branding" className="w-full py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Branding
            </h2>
            <div className="w-12 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.images[0]}
                title={project.title}
                category={project.category}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sobre Mí
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Soy estudiante de Arquitectura de la Pontificia Universidad Javeriana con enfoque en BIM,
                arquitectura sostenible y diseño de branding. Mi pasión radica en crear espacios que
                integren la sostenibilidad ambiental con la excelencia en diseño, combinando metodologías
                técnicas avanzadas con una visión creativa y estratégica.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                A través de proyectos ganadores en concursos nacionales, he desarrollado expertise en
                arquitectura bioclimática, planificación urbana y branding estructural, siempre con el
                objetivo de generar impacto positivo en el entorno construido.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Competencias</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-border rounded text-sm font-medium text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 ease-in-out"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 md:py-32 bg-gray-50">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Contacto
          </h2>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full bg-transparent border-b border-border text-foreground placeholder-gray-400 pb-3 focus:outline-none focus:border-accent transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full bg-transparent border-b border-border text-foreground placeholder-gray-400 pb-3 focus:outline-none focus:border-accent transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={5}
                className="w-full bg-transparent border-b border-border text-foreground placeholder-gray-400 pb-3 focus:outline-none focus:border-accent transition-all duration-300 ease-in-out resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-foreground text-white font-semibold rounded hover:bg-accent transition-all duration-300 ease-in-out duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2026 Alejandra Gómez Gutiérrez. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-all duration-300 ease-in-out"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-all duration-300 ease-in-out"
                aria-label="Portafolio"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-all duration-300 ease-in-out"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}
