import { useState, useEffect } from 'react';
import { X, Upload, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Admin Page - Panel de administración para gestionar proyectos
 * Permite subir imágenes y editar detalles de proyectos
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

const PROJECTS_DATA = {
  'urban-centers': {
    title: 'Centros Urbanos: Diagnóstico y Horizonte Futuro',
    category: 'Urbanismo',
  },
  'habitat-sostenible': {
    title: 'Hábitat Sostenible en Nuevos Territorios',
    category: 'Concurso',
  },
  'torre-vivienda': {
    title: 'Torre de Vivienda en Altura',
    category: 'Residencial',
  },
  'innovacion-culinaria': {
    title: 'Innovación Culinaria - Concurso Tramontina',
    category: 'Diseño de Interiores',
  },
  'colab': {
    title: 'Colab',
    category: 'Branding',
  },
  'foodpoint': {
    title: 'FoodPoint',
    category: 'Branding Aplicado',
  },
};

const STORAGE_KEY = 'alejandra_portfolio_images';

export default function Admin() {
  const [, navigate] = useLocation();
  const [selectedProject, setSelectedProject] = useState<string>('urban-centers');
  const [uploadedImages, setUploadedImages] = useState<Record<string, string[]>>({});
  const [saveMessage, setSaveMessage] = useState<string>('');

  // Cargar imágenes del localStorage al montar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setUploadedImages(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading saved images:', e);
      }
    }
  }, []);

  // Guardar imágenes en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(uploadedImages));
    setSaveMessage('✓ Cambios guardados');
    const timer = setTimeout(() => setSaveMessage(''), 3000);
    return () => clearTimeout(timer);
  }, [uploadedImages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const maxImages = 5;
    const currentImages = uploadedImages[selectedProject] || [];
    
    if (currentImages.length >= maxImages) {
      alert(`Máximo ${maxImages} imágenes por proyecto`);
      return;
    }

    Array.from(files).forEach((file) => {
      if (currentImages.length >= maxImages) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImages((prev) => ({
            ...prev,
            [selectedProject]: [...(prev[selectedProject] || []), event.target?.result as string],
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => ({
      ...prev,
      [selectedProject]: prev[selectedProject]?.filter((_, i) => i !== index) || [],
    }));
  };

  const projectImages = uploadedImages[selectedProject] || [];
  const projectInfo = PROJECTS_DATA[selectedProject as keyof typeof PROJECTS_DATA];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
            <p className="text-gray-600">Gestiona tus proyectos e imágenes del portafolio</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
          >
            <ArrowLeft size={20} />
            Volver al Portafolio
          </button>
        </div>

        {/* Save Message */}
        {saveMessage && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
            {saveMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Project List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Proyectos</h2>
              <div className="space-y-2">
                {Object.entries(PROJECTS_DATA).map(([id, data]) => {
                  const imageCount = uploadedImages[id]?.length || 0;
                  return (
                    <button
                      key={id}
                      onClick={() => setSelectedProject(id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedProject === id
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium text-sm">{data.title}</div>
                      <div className={`text-xs mt-1 ${selectedProject === id ? 'text-white/80' : 'text-gray-500'}`}>
                        {data.category}
                      </div>
                      {imageCount > 0 && (
                        <div className={`text-xs mt-2 font-semibold ${selectedProject === id ? 'text-white' : 'text-accent'}`}>
                          {imageCount}/5 imágenes
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{projectInfo?.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                  {projectInfo?.category}
                </span>
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Upload size={20} />
                Subir Imágenes
              </h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                  disabled={projectImages.length >= 5}
                />
                <label htmlFor="image-upload" className={`cursor-pointer ${projectImages.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <div className="text-gray-600 mb-2">
                    <Upload className="mx-auto mb-2" size={32} />
                  </div>
                  <p className="font-medium text-gray-900">Arrastra imágenes aquí o haz clic</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {projectImages.length >= 5 
                      ? 'Máximo de imágenes alcanzado'
                      : `${5 - projectImages.length} imágenes restantes`
                    }
                  </p>
                </label>
              </div>
            </div>

            {/* Images Gallery */}
            {projectImages.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Imágenes Subidas ({projectImages.length}/5)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {projectImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`Proyecto ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {index + 1}/{projectImages.length}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Instrucciones:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✓ Selecciona un proyecto de la lista</li>
                <li>✓ Sube hasta 5 imágenes por proyecto</li>
                <li>✓ Las imágenes se guardan automáticamente</li>
                <li>✓ Las imágenes aparecerán en el carrusel del portafolio</li>
                <li>✓ Puedes eliminar imágenes haciendo clic en la X</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
