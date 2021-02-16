/*
const menu = document.getElementById('menu')
const navLinks = document.getElementById('nav-links')
const main = document.querySelector('main')

menu.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
})

main.addEventListener('click', () => {
    navLinks.classList.add('hide');
})
*/


const closeBtn = document.getElementById('close')
const openBtn = document.getElementById('open')
const navMenu = document.querySelector('.nav-menu')
const closedNav = document.querySelector('.closed-nav')
const navMenuLogo = document.getElementById('nav-menu-logo')
const navSocialMedia = document.querySelector('.social-media')
const navList = document.querySelector('.nav-list')

openBtn.addEventListener('click', () => {
    navMenu.classList.remove('hidden-nav')
    closeBtn.classList.remove('hide');
    closedNav.classList.add('hidden-nav');
})

closeBtn.addEventListener('click', () => {
    navMenu.classList.add('hidden-nav')
    closeBtn.classList.add('hide');
    closedNav.classList.remove('hidden-nav');
})

