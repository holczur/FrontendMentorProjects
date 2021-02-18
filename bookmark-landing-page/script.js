const openBtn = document.getElementById('open')
const openNav = document.getElementById('open-nav')
const closeBtn = document.getElementById('close')
const closedNav = document.querySelector('.closed-nav')

const featureLinks = document.querySelectorAll('.feature-link')
const simple = document.getElementById('simple')
const easy = document.getElementById('easy')
const share = document.getElementById('share')
const featureImg = document.getElementById('changing-img')
const featureDescriptions = document.querySelectorAll('.feature')

/* NAV MENU **************************************************/
openBtn.addEventListener('click', () => {
    closedNav.classList.replace('flex-row-between', 'unvisible');
    openNav.classList.replace('unvisible' , 'flex-col-center');
    closeBtn.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    closedNav.classList.replace('unvisible' , 'flex-row-between');
    openNav.classList.add('unvisible');
    setTimeout(function(){ openNav.classList.remove('flex-col-center'); }, 500);
    closeBtn.classList.add('hide');
})

/* FEATURES ****************************************************/


for (let i = 0; i < featureLinks.length; i++){
    featureLinks[i].addEventListener('click', () => {
        featureLinks.forEach(link => {
            link.classList.remove('active')
        });
        featureImg.src = `./img/illustration-features-tab-${i + 1}.svg`;
        featureLinks[i].classList.add('active');
        featureDescriptions.forEach(description => {
            description.classList.add('hide');
        });
        featureDescriptions[i].classList.remove('hide');
    })

}
