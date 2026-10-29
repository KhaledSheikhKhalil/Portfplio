const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-links a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    navLinks.classList.remove('active');
  });
});

const reservationForm = document.getElementById('reservationForm');
reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your table reservation has been received.');
  reservationForm.reset();
});