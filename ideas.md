# Brainstorming de Diseño - Portafolio Alejandra Gómez Gutiérrez

## Enfoque Seleccionado: Clean & Architectural Minimalism

### Filosofía de Diseño
**Movimiento de Diseño:** Modernismo Arquitectónico + Minimalismo Suizo + Editorial Design

Este enfoque refleja la esencia profesional de Alejandra: precisión, sostenibilidad y claridad. El diseño actúa como un marco neutral que permite que los proyectos arquitectónicos sean los protagonistas, sin competencia visual.

---

## Principios Fundamentales

1. **Precisión Geométrica:** Líneas limpias, proporciones áureas, alineaciones perfectas. El espacio se trata como un material de construcción.
2. **Jerarquía Editorial:** La tipografía y el espaciado guían la narrativa visual. Cada elemento tiene un propósito comunicativo claro.
3. **Minimalismo Funcional:** Solo lo esencial permanece visible. Los detalles decorativos son eliminados en favor de la funcionalidad.
4. **Sostenibilidad Visual:** Paleta de colores naturales, inspirada en materiales arquitectónicos (hormigón, madera, acero, tierra).

---

## Filosofía de Color

**Paleta Primaria:**
- **Blanco Principal (#FFFFFF):** Fondo limpio, infinito, como lienzo en blanco de un proyecto.
- **Grises Neutrales (#F5F5F5, #F9F9F9, #555555, #888888):** Escala de grises arquitectónica que evoca materiales industriales.
- **Verde Oliva (#4A5D4E):** Acento de sostenibilidad, inspirado en arquitectura bioclimática. Usado estratégicamente en CTAs, hover states y elementos activos.
- **Negro Profundo (#111111):** Tipografía principal, proporciona contraste y autoridad.

**Intención Emocional:**
La paleta comunica profesionalismo, sostenibilidad y sofisticación. El verde oliva actúa como puente entre lo técnico (grises) y lo orgánico (naturaleza), reflejando el enfoque bioclimático de Alejandra.

---

## Paradigma de Layout

**Estructura Asimétrica con Ritmo:**
- Uso de columnas desiguales (60/40, 70/30) para crear dinamismo sin caos.
- Espaciado vertical generoso (múltiplos de 8px, 16px, 24px) que respira.
- Secciones con fondos alternados (blanco, gris muy claro) para crear ritmo visual.
- Alineación left-aligned para la mayoría de contenido (más arquitectónico que centered).

**Principio de Profundidad:**
- Capas sutiles de profundidad mediante sombras minimalistas (0.5px borders, sombras suaves).
- Uso estratégico de blur y transparencia en elementos de fondo.
- Jerarquía visual clara: hero > secciones > tarjetas > detalles.

---

## Elementos Distintivos

1. **Línea Horizontal Animada en Navbar:** Subrayado que crece desde el centro en hover, reflejando precisión arquitectónica.
2. **Tarjetas con Zoom Suave + Overlay Progresivo:** Las imágenes se amplían ligeramente al hover, revelando información de manera elegante.
3. **Divisores Minimalistas:** Líneas de 0.5px en gris claro que separan secciones sin ser intrusivas.
4. **Tipografía Escalada:** Títulos grandes y audaces (48px+) contrastan con cuerpo de texto legible (16px).

---

## Filosofía de Interacción

**Principio:** Las interacciones deben sentirse precisas, no juguetones.

- **Hover States:** Cambio de color a verde oliva, transición suave de 300ms.
- **Scroll Behavior:** Smooth scroll global, revelación progresiva de contenido.
- **Modal Interactivo:** Fade + scale suave, mantiene el contexto con overlay semi-transparente.
- **Botones:** Transición de borde transparente → borde + fondo verde oliva en hover.
- **Feedback Visual:** Cambios sutiles que confirman la acción sin ser disruptivos.

---

## Directrices de Animación

**Velocidades:**
- Micro-interacciones (hover, focus): 200-250ms
- Transiciones de sección: 300ms
- Modales y drawers: 400-500ms

**Easing:**
- Entrada: `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out snappy)
- Movimiento: `cubic-bezier(0.77, 0, 0.175, 1)` (ease-in-out smooth)

**Reglas:**
- Nunca escalar desde 0; usar 0.95 + opacity 0 para apariciones.
- Solo animar `transform` y `opacity` para máximo rendimiento.
- Respetar `prefers-reduced-motion` para accesibilidad.
- Stagger de 40-60ms entre elementos en listas.

---

## Sistema Tipográfico

**Fuentes:**
- **Títulos (H1, H2, H3):** Inter 700 (bold) - claridad y autoridad
- **Subtítulos:** Inter 600 (semibold) - jerarquía secundaria
- **Cuerpo de Texto:** Inter 400 (regular) - legibilidad
- **Metadatos/Tags:** Inter 500 (medium) - énfasis sin peso

**Escala Tipográfica:**
- H1: 48px (hero), 36px (secciones)
- H2: 28px (títulos de sección)
- H3: 20px (títulos de tarjeta)
- Body: 16px (párrafos)
- Small: 14px (metadatos)
- Tiny: 12px (tags, etiquetas)

**Jerarquía de Contraste:**
- Títulos: #111111 (negro profundo)
- Texto principal: #555555 (gris oscuro)
- Metadatos: #888888 (gris medio)
- Backgrounds: #FFFFFF, #F5F5F5, #F9F9F9

---

## Resumen Visual

El portafolio de Alejandra debe sentirse como una **galería arquitectónica digital**: limpia, precisa, sofisticada. Cada proyecto es una obra maestra presentada en un espacio neutral que no compite. El verde oliva es el único color que rompe la monocromía, actuando como un acento de energía sostenible. Las animaciones son sutiles pero presentes, confirmando que el sitio está vivo y responde a las acciones del usuario.

**Objetivo Final:** Que el usuario sienta que está navegando por un portafolio de nivel mundial, donde la calidad del diseño refleja la calidad de los proyectos arquitectónicos.
