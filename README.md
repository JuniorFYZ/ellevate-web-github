# ✦ Ellevate Inc. — Sitio Web Oficial

> **Estrategia, Marketing & Brand Management · República Dominicana**

Sitio web estático moderno, interactivo y totalmente responsive desarrollado con **HTML5**, **CSS3** y **JavaScript (ES6)**, optimizado para ser alojado directamente en **GitHub Pages** o cualquier servidor web sin requerir bases de datos ni configuración de backend.

---

## 🌟 Características Principales

- **Diseño Editorial Premium:** Tipografía curada con *Playfair Display* e *Inter*, paleta en tonos crema, tinta y oro metálico.
- **Carrusel Hero Interactivo:** Transiciones automáticas de slides cada 5.5 segundos, flechas de avance/retroceso y dots de navegación.
- **Navegación 100% Responsive:** Menú hamburguesa animado con cierre automático al interactuar en pantallas móviles y tablets.
- **Páginas Completas:**
  - `index.html`: Portada principal, estadísticas, pilares de servicio y servicios destacados.
  - `servicios.html`: Catálogo detallado de soluciones, tabla comparativa de planes (Start, Growth, Elite) y servicios adicionales à la carte.
  - `nosotros.html`: Historia de la agencia, tarjetas de Misión, Visión, Valores y presentación del equipo fundador.
  - `faq.html`: Acordeón interactivo para resolver dudas sobre planes, sesiones y publicidad.
  - `contacto.html`: Formulario con validación en vivo, feedback visual instantáneo y botón de envío directo a WhatsApp.
  - `login.html`: Interfaz estilizada de acceso administrativo.
- **Botón Flotante de WhatsApp:** Con pulsación animada y mensaje preconfigurado para contacto inmediato.
- **Cero Dependencias Externas Pesadas:** Hecho con CSS y JavaScript nativo sin dependencias de frameworks ni librerías pesadas.

---

## 📁 Estructura del Proyecto

```text
ellevate-web-github/
├── index.html            # Portada y carrusel principal
├── servicios.html        # Servicios y tabla de planes
├── nosotros.html         # Historia y equipo
├── faq.html              # Preguntas frecuentes con acordeón
├── contacto.html         # Formulario de contacto interactivo
├── login.html            # Acceso administrativo (demo)
├── css/
│   └── style.css         # Hoja de estilos global unificada
├── js/
│   └── main.js           # Lógica JavaScript (carrusel, menú, acordeón, animaciones)
├── assets/               # Imágenes, logotipos y recursos gráficos
│   ├── logos/
│   │   ├── logo.png
│   │   └── logo2.png
│   ├── ellevate4.jpeg
│   ├── ellevate5.jpeg
│   ├── ellevate6.jpeg
│   └── imagenJunior.jpeg
├── .gitignore            # Archivos ignorados por Git
└── README.md             # Documentación del proyecto
```

---

## 🚀 Cómo Subir este Proyecto a GitHub y Activar GitHub Pages

Tienes dos formas sencillas de subir este proyecto a tu cuenta de GitHub:

### Opción A: Mediante Git en la Terminal (Recomendado)

1. **Crear el repositorio en GitHub:**
   - Inicia sesión en [GitHub](https://github.com).
   - Haz clic en el botón verde **"New"** o entra a [github.com/new](https://github.com/new).
   - Asigna un nombre al repositorio (ej: `ellevate-web`).
   - Elige **Public** (Público).
   - **No** marques las opciones de agregar README ni .gitignore (ya están creados aquí).
   - Haz clic en **"Create repository"**.

2. **Abrir la terminal en esta carpeta:**
   - Abre PowerShell o Git Bash dentro de la carpeta `ellevate-web-github`.

3. **Ejecutar los siguientes comandos:**
   ```bash
   git init
   git add .
   git commit -m "feat: Sitio web estático de Ellevate Inc. listo para GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/ellevate-web.git
   git push -u origin main
   ```
   *(Recuerda sustituir `TU-USUARIO` por tu nombre de usuario exacto en GitHub).*

---

### Opción B: Subir Archivos Directamente desde la Web de GitHub (Sin Terminal)

1. Entra a [github.com/new](https://github.com/new) y crea el repositorio vacío como público.
2. En la pantalla inicial de tu repositorio recién creado, haz clic en el enlace azul **"uploading an existing file"** (o en **Add file -> Upload files**).
3. Arrastra todos los archivos y carpetas que están dentro de `ellevate-web-github/` hacia la ventana del navegador.
4. En el campo de abajo escribe un mensaje de commit (ej: `Primer commit`) y haz clic en el botón verde **"Commit changes"**.

---

## 🌐 Cómo Activar GitHub Pages (Tu sitio web publicado gratis en internet)

Una vez que los archivos estén subidos en tu repositorio de GitHub:

1. Dentro de tu repositorio en GitHub, haz clic en la pestaña **Settings** (Configuración ⚙️ en la barra superior).
2. En el menú lateral izquierdo, haz clic en **Pages** (en la sección *Code and automation*).
3. En la sección **Build and deployment**:
   - **Source:** Selecciona `Deploy from a branch`.
   - **Branch:** En el menú desplegable donde dice `None`, selecciona `main` y la carpeta `/(root)`.
   - Haz clic en **Save** (Guardar).
4. Espera entre 1 y 2 minutos mientras GitHub procesa el despliegue.
5. Al recargar la página de *Settings -> Pages*, aparecerá una caja verde indicando:
   > **"Your site is live at: `https://TU-USUARIO.github.io/ellevate-web/`"**
6. ¡Listo! Puedes compartir ese enlace público con cualquier persona en el mundo.

---

## 📄 Créditos & Derechos

© 2026 **Ellevate Inc.** — Todos los derechos reservados.  
Estrategia, Marketing, Brand Manager · República Dominicana.
