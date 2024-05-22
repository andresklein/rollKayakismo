$(document).ready(function() {
  $('#fullpage').fullpage({
    autoScrolling: false,
    fitToSection: false,
    scrollOverflow: true,
    showCredits: false,
    scrollingSpeed: 800,
    easingcss3: 'linear',
  });

  AOS.init({
    once: false,
  });
});

$(document).ready(function(){
  // Detecta cuando se carga la página
  $(window).on('load', function(){
      // Mueve manualmente la página a la primera sección
      fullpage_api.moveTo(1);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.image-8 img, .image-4 img, .image-3 img, .image-2 img, .image-1 img');

  images.forEach(img => {
    const hoverSrc = img.getAttribute('data-hover');
    const originalSrc = img.getAttribute('src');

    img.addEventListener('mouseover', () => {
      img.setAttribute('src', hoverSrc);
    });

    img.addEventListener('mouseout', () => {
      img.setAttribute('src', originalSrc);
    });
  });
});
