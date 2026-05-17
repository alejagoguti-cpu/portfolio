import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Design: Clean & Architectural
 * - Fixed top navbar con scroll behavior
 * - Logo: "AGG. / ARQ & DESIGN"
 * - Navegación con línea animada en hover
 * - Menú hamburguesa en móvil
 */

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Arquitectura', id: 'architecture' },
    { label: 'Branding', id: 'branding' },
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Contacto', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onNavigate?.(id);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        hasScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-arch border-minimal'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-sm font-bold tracking-wider text-foreground hover:text-accent transition-all duration-300 ease-in-out"
          >
            AGG. / ARQ & DESIGN
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-sm font-medium text-foreground hover:text-accent transition-all duration-300 ease-in-out group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-in-out -translate-x-1/2" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-all duration-300 ease-in-out"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-minimal animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-sm font-medium text-foreground hover:text-accent transition-all duration-300 ease-in-out py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
