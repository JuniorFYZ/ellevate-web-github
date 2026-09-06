/**
 * ELLEVATE INC. — MAIN JAVASCRIPT
 * Funcionalidades interactivas puras para GitHub Pages
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Móvil (Hamburger)
  const navToggle = document.getElementById('navToggle');
  const mainNav   = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });

    // Cerrar al hacer clic en cualquier enlace
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        mainNav.classList.remove('open');
      });
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('open');
        mainNav.classList.remove('open');
      }
    });
  }

  // 2. Carrusel Hero (index.html)
  const slides = document.querySelectorAll('#heroCarousel .slide');
  const dots   = document.querySelectorAll('#carouselDots .c-dot');

  if (slides.length > 0) {
    let current = 0;
    let timer   = null;

    function goToSlide(n) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      current = (n + slides.length) % slides.length;

      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
      resetTimer();
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => goToSlide(current + 1), 5500);
    }

    // Exponer globalmente para eventos onclick en HTML
    window.goToSlide = goToSlide;
    window.carouselMove = (dir) => goToSlide(current + dir);

    resetTimer();
  }

  // 3. Scroll Reveal (Aparición suave al hacer scroll)
  const fadeElements = document.querySelectorAll('.fade-up');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // 4. Acordeón de Preguntas Frecuentes (faq.html)
  window.toggleFaq = function(btn) {
    const body = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    // Cerrar todos los demás
    document.querySelectorAll('.faq-btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
    });

    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
    }
  };

  // 5. Formulario de Contacto Interactivo (contacto.html)
  const contactForm = document.getElementById('staticContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre   = document.getElementById('nombre')?.value.trim();
      const correo   = document.getElementById('correo')?.value.trim();
      const telefono = document.getElementById('telefono')?.value.trim() || 'No especificado';
      const asunto   = document.getElementById('asunto')?.value.trim() || 'Consulta general';
      const mensaje  = document.getElementById('mensaje')?.value.trim();

      const alertContainer = document.getElementById('formAlert');

      if (!nombre || !correo || !mensaje) {
        if (alertContainer) {
          alertContainer.innerHTML = `
            <div class="alert-error">
              ⚠️ Por favor completa todos los campos obligatorios (Nombre, Correo y Mensaje).
            </div>
          `;
          alertContainer.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // Preparar enlace de WhatsApp con el mensaje estructurado
      const waText = encodeURIComponent(
        `Hola Ellevate, soy *${nombre}*.\n` +
        `✉️ Correo: ${correo}\n` +
        `📞 Tel: ${telefono}\n` +
        `📌 Asunto: ${asunto}\n` +
        `💬 Mensaje: ${mensaje}`
      );
      const waUrl = `https://wa.me/18099783355?text=${waText}`;

      // Mostrar confirmación interactiva
      if (alertContainer) {
        alertContainer.innerHTML = `
          <div class="alert-success" style="line-height:1.6;">
            <p style="font-weight:700;font-size:1.05rem;margin-bottom:6px;">✅ ¡Mensaje preparado con éxito, ${nombre}!</p>
            <p style="margin-bottom:12px;">Para asegurar una respuesta inmediata en tiempo real, puedes enviarlo directamente a nuestro WhatsApp oficial con un solo clic:</p>
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn" style="background:#25d366;color:#fff;font-weight:700;padding:10px 20px;display:inline-flex;gap:8px;">
              Enviar por WhatsApp ahora →
            </a>
          </div>
        `;
        alertContainer.scrollIntoView({ behavior: 'smooth' });
      }

      contactForm.reset();
    });
  }

  // 6. Resaltar página actual en navegación si no está activa
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

});
