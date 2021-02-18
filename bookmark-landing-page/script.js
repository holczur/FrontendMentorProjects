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

const faqs = document.querySelectorAll('.faq-holder')
const chevrons = document.querySelectorAll('.faq-holder .fas')

/* NAV MENU **************************************************/
openBtn.addEventListener('click', () => {
    openNav.classList.remove('hide')
    closedNav.classList.replace('flex-row-between', 'unvisible');
    openNav.classList.replace('unvisible' , 'flex-col-center');
    closeBtn.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    closedNav.classList.replace('unvisible' , 'flex-row-between');
    openNav.classList.add('unvisible');
    setTimeout(function(){
        openNav.classList.remove('flex-col-center');
        openNav.classList.add('hide');
    }, 500);
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

/* FAQ *******************************************************************/

for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', () => {
        faqs[i].classList.toggle('active');
        if (faqs[i].classList.contains('active')) {
            chevrons[i].classList.remove('fa-chevron-down');
            chevrons[i].classList.add('fa-chevron-up');
        } else {
            chevrons[i].classList.add('fa-chevron-down');
            chevrons[i].classList.remove('fa-chevron-up');
        }
    })
}
