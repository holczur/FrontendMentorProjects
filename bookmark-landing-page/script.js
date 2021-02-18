const openBtn = document.getElementById('open')
const openNav = document.getElementById('open-nav')
const closeBtn = document.getElementById('close')
const closedNav = document.querySelector('.closed-nav')


openBtn.addEventListener('click', () => {
    closedNav.classList.replace('flex-row-between', 'unvisible');
    openNav.classList.replace('unvisible' , 'flex-col-center');
    closeBtn.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    closedNav.classList.replace('unvisible' , 'flex-row-between');
    openNav.classList.replace('flex-col-center' , 'unvisible');
    closeBtn.classList.add('hide');
})


