import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ProjectModal Component
 * Design: Clean & Architectural
 * - Modal pantalla completa con fade + scale
 * - Carrusel de imágenes (izquierda 60%)
 * - Detalles del proyecto (derecha 40%)
 * - Animaciones suaves
 */

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    achievements: string[];
    images: string[];
    location?: string;
    year?: string;
    software?: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl animate-in fade-in scale-95 duration-300 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Left Side: Image Carousel (60%) */}
        <div className="w-full md:w-3/5 bg-gray-100 relative overflow-hidden">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-accent hover:text-white rounded-full transition-all duration-300 ease-in-out"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-accent hover:text-white rounded-full transition-all duration-300 ease-in-out"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* Right Side: Project Details (40%) */}
        <div className="w-full md:w-2/5 p-6 md:p-8 overflow-y-auto flex flex-col gap-6">
          {/* Category */}
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Achievements */}
          {project.achievements.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.achievements.map((achievement, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-accent/10 text-accent px-3 py-1 rounded border border-accent/20"
                >
                  {achievement}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>

          {/* Tech Sheet */}
          <div className="border-t border-border pt-6 space-y-4">
            {project.location && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Ubicación</p>
                <p className="text-sm text-foreground">{project.location}</p>
              </div>
            )}

            {project.year && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Año</p>
                <p className="text-sm text-foreground">{project.year}</p>
              </div>
            )}

            {project.software && project.software.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Software</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.software.map((soft, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {soft}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
