/**
 * ProjectCard Component
 * Design: Clean & Architectural
 * - Tarjeta con imagen 16:10 / 3:2
 * - Zoom suave en hover
 * - Aparición progresiva de información
 * - Borde minimalista
 */

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

export default function ProjectCard({ image, title, category, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-lg border border-border bg-white hover:shadow-arch transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out duration-500"
        />

        {/* Overlay - Appears on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ease-in-out" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
          {category}
        </p>
        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-all duration-300 ease-in-out">
          {title}
        </h3>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300 ease-in-out duration-500" />
    </button>
  );
}
