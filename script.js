const menuButton = document.querySelector('.menu');
const nav = document.querySelector('#nav');

if (menuButton && nav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
    nav.classList.add('open');
    document.body.classList.add('menu-open');
  };

  menuButton.addEventListener('click', () => {
    if (menuButton.getAttribute('aria-expanded') === 'true') closeMenu();
    else openMenu();
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (menuButton.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const productSelect = document.querySelector('#product');
if (productSelect) {
  const requestedProduct = new URLSearchParams(window.location.search).get('product');
  if (['csc', 'cet', 'custom', 'unsure'].includes(requestedProduct)) {
    productSelect.value = requestedProduct;
  }
}

document.querySelectorAll('[data-cet-gallery]').forEach((gallery) => {
  const images = [
    {
      src: '/assets/Table%201.PNG',
      alt: 'Standard 72 by 30 by 30 inch Eden Clean Environment Table, top isometric view',
    },
    {
      src: '/assets/Table%202.PNG',
      alt: 'Standard 72 by 30 by 30 inch Eden Clean Environment Table, underside isometric view',
    },
    {
      src: '/assets/Table%203.PNG',
      alt: 'Perforated 72 by 30 by 30 inch Eden Clean Environment Table, top isometric view',
    },
  ];
  const image = gallery.querySelector('[data-gallery-image]');
  const indicator = gallery.querySelector('[data-gallery-current]');
  const previousButton = gallery.querySelector('[data-gallery-prev]');
  const nextButton = gallery.querySelector('[data-gallery-next]');
  let currentIndex = 0;

  images.slice(1).forEach(({ src }) => {
    const preload = new Image();
    preload.src = src;
  });

  const showImage = (nextIndex) => {
    currentIndex = (nextIndex + images.length) % images.length;
    image.classList.add('is-changing');

    const updateImage = () => {
      image.src = images[currentIndex].src;
      image.alt = images[currentIndex].alt;
      indicator.textContent = currentIndex + 1;
      image.classList.remove('is-changing');
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) updateImage();
    else window.setTimeout(updateImage, 120);
  };

  previousButton.addEventListener('click', () => showImage(currentIndex - 1));
  nextButton.addEventListener('click', () => showImage(currentIndex + 1));

  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showImage(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showImage(currentIndex + 1);
    }
  });
});
