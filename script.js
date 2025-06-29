// Intersection Observer for cards and gallery
const cards = document.querySelectorAll('.card');
const gallery = document.querySelector('.gallery');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });
cards.forEach(card => observer.observe(card));
if (gallery) observer.observe(gallery);

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
});

// Cursor Trail
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


// Animated Counters
const counters = document.querySelectorAll('.counter-number');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});

// Back to Top Button
const topBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

var typed = new Typed("#typed-subtitle", {
    strings: ["Creative Developer", "AI Enthusiast", "Web Innovator"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

// Fun nav name avoidance effect
const navName = document.getElementById('navName');
let isEscaping = false;

document.addEventListener('mousemove', (e) => {
  const nameRect = navName.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const nameX = nameRect.left + nameRect.width / 2;
  const nameY = nameRect.top + nameRect.height / 2;

  const distance = Math.hypot(mouseX - nameX, mouseY - nameY);

  if (distance < 100 && !isEscaping) {
    isEscaping = true;

    const offsetX = (nameX - mouseX) * 0.6;
    const offsetY = (nameY - mouseY) * 0.6;

    navName.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
    navName.style.transition = 'transform 0.2s ease';
  }

  if (distance >= 100 && isEscaping) {
    navName.style.transform = `translate(0, 0) scale(1)`;
    isEscaping = false;
  }
});

// Starfield Cosmic Burst Effect
const canvas = document.getElementById('stars-bg');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector('header').offsetHeight;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: 0.15 + Math.random() * 0.3,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
}

function animateStars() {
  drawStars();
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars(150);
});

resizeCanvas();
createStars(150);
animateStars();

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});


function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// === Code Rain Behind Header ===
