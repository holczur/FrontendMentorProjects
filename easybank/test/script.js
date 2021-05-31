const openNav = document.querySelector('.btn-mobile');
const nav = document.querySelector('nav ul');

openNav.addEventListener('click', () => {
  nav.classList.toggle('active');
});
