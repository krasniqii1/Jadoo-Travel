window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}




const rome = document.querySelector('.rome');
rome.addEventListener('click', () => {
    window.location.href = 'italy/italy.html'
})


const london = document.querySelector('.london');
london.addEventListener('click', () => {
    window.location.href = 'london/london.html'
})


const europe = document.querySelector('.europe');
europe.addEventListener('click', () => {
    window.location.href = 'europe/europe.html'
})




$(document).ready(function () {

    $('#h1-query').fadeTo("slow", 1);

    $('.left1 h4').slideToggle("slow")

    $('.left1 p').slideToggle("slow");
})