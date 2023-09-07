const aboutToggle = document.querySelector('#about-toggle');
const aboutParagraph = document.querySelector('.about-text p');

let isShowing = false;
collapse();

aboutToggle.addEventListener('click', (e) => {
    e.preventDefault();
    isShowing ? collapse() : expand();
})

function collapse() {
    aboutParagraph.style.display = 'none';
    // aboutToggle.innerHTML = 'Click here to know more!';
    aboutToggle.className = "fa-solid fa-chevron-down";
    isShowing = false;
}

function expand() {
    aboutParagraph.style.display = 'block';
    // aboutToggle.innerHTML = 'Click here to collapse!';
    aboutToggle.className = "fa-solid fa-chevron-up";
    isShowing = true;
}