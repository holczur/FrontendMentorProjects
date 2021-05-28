'use strict';

const menuBtn = document.querySelector('.menu-btn');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  openBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  overlay.classList.toggle('hide');
});

overlay.addEventListener('click', () => {
  menu.classList.add('hidden');
  openBtn.classList.remove('hidden');
  closeBtn.classList.add('hidden');
  overlay.classList.add('hide');
});
