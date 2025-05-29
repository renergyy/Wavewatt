document.addEventListener('DOMContentLoaded', function() {
  new Splide('#team-carousel', {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    autoplay: true
  }).mount();

  new Splide('#awards-carousel', {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    autoplay: true
  }).mount();

  ScrollReveal().reveal('section', {
    distance: '50px',
    duration: 800,
    origin: 'bottom',
    interval: 200
  });
});
