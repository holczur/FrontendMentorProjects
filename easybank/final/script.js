'use strict';

const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.overlay');

const closeMenu = function () {
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
  closeBtn.classList.add('hidden');
  openBtn.classList.remove('hidden');
};

openBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
  navOverlay.classList.add('active');
  closeBtn.classList.remove('hidden');
  openBtn.classList.add('hidden');
});

closeBtn.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);
