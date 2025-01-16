const navbarNav = document.querySelector
('.navbar-nav');
document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};


const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});
sr.reveal('.hero-img', {delay:450, origin:'top'});
