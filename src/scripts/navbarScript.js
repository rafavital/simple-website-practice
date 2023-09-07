const toggle = document.getElementById('toggle');
const navbarLinks = document.getElementsByClassName('navbar-link');

toggle.addEventListener('click', () => {
    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
})
