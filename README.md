# Portfolio-HTML-CSS
Esto es un portafolio personal como parte de un taller progresivo de desarrollo web. El proyecto evolucionó desde una estructura HTML básica hasta un sitio responsivo con estilos e interactividad con JavaScript.
# Estrucutra
portafolio/
>├── index.html          # Página principal del portafolio
>>├── mascotas.html       # Página secundaria con galería de mascotas
>>>├── styles_index.css    # Hoja de estilos principal
>>>>└── scrip.js            # Lógica de interactividad en JavaScript
# ✅ Criterios de aceptación cumplidos
 - Archivos index.html, mascotas.html, styles_index.css y scrip.js presentes.
 - Portafolio con encabezado, menú, secciones y formulario de contacto.
 - Navegación funcional entre páginas.
 - Galería con 6 mascotas, imágenes y descripciones.
 - Flexbox en header y Grid en galería de mascotas.
 - Media queries para móvil, tablet y escritorio.
 - Imágenes responsivas y tipografía en unidades relativas.
 - Variables globales en :root y CSS optimizado.
 - scrip.js enlazado correctamente con interacción visible al usuario.
 - Código indentado, limpio y comentado.
# Funcionalidades
> Estructura y navegación
El sitio cuenta con dos páginas HTML (index.html y mascotas.html) conectadas entre sí mediante enlaces en el menú y el footer, con un header sticky que permanece visible al hacer scroll.
Portafolio principal
Incluye tres secciones: Sobre mí con descripción personal, Proyectos con tarjetas enlazables que se animan al hover, y Contacto con un formulario de nombre, correo y mensaje.
Galería de mascotas
Muestra 6 mascotas en un grid responsivo tipo mosaico, cada una con imagen, ícono emoji, nombre y descripción con personalidad propia. Además incluye un carrusel animado con CSS puro al inicio de la página.
Diseño responsivo
El layout se adapta a móviles (menú en columna, carrusel reducido) y escritorio (grid de múltiples columnas), usando imágenes con max-width: 100% y tipografía en unidades rem.
Estilos avanzados
Paleta oscura con acento dorado definida en variables :root, Flexbox en el header, Grid en la galería, hover animado en tarjetas y enlaces, y bordes redondeados en imágenes y botones.
Interactividad JavaScript
Un botón en la sección Sobre mí alterna dinámicamente la tipografía del texto entre la fuente original y una fuente serif, cambiando también el texto del botón como confirmación visual.
