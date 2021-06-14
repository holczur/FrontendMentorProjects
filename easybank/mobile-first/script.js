'use strict';

const openBtn = document.querySelector('.btn-menu--open');
const closeBtn = document.querySelector('.btn-menu--close');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.overlay');

const closeMenu = function () {
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
  closeBtn.classList.add('hidden');
  openBtn.classList.remove('hidden');
  navOverlay.classList.add('hidden');
};

openBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
  navOverlay.classList.add('active');
  closeBtn.classList.remove('hidden');
  openBtn.classList.add('hidden');
  navOverlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);
