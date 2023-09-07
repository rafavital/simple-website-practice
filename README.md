# Simple Website

![Project Screenshot](assets/complete-site.png) 

## Overview

This is a very simple website I developed using pure HTML/CSS and JS. It was created to demonstrate the use of CSS to create a responsive design. It also demonstrates how JS can be integrated into webpages to create dynamic functionality.

## Getting Started

To access and interact with my website, [click here]()

## Responsive Design
### Navbar
I built the navbar to be mobile-friendly, when using the website in small screens it'll hide the navbar links and show a hamburger menu instead. As shown below:
![Collapsed responsive navbar](assets/responsive-navbar_1.png)

Clicking it will then expand the navbar allowing for link navigation:
![Expanded responsive navbar](assets/responsive-navbar_2.png)

I achieved this by importing [Fontawesome](https://fontawesome.com/) icons to the project and creating a navbar item that hides itself on bigger screens, a simple JS file adds the toggling functionality.

```html
<li class="navbar-toggle" id="toggle">
    <i class="fa fa-bars"></i>
</li>
```

```css
/* on big screens */
.navbar-toggle {
    display: none;
    font-size: 24px;
}

/* on smaller screens */
@media screen and (max-width: 768px) {
    .navbar-toggle {
        display: block;
    }
}
```

```js 
const toggle = document.getElementById('toggle');
const navbarLinks = document.getElementsByClassName('navbar-link');

toggle.addEventListener('click', () => {
    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
})
```


### About Section
I gave the user the ability to expand/collapse the about section. I added an icon alongside my presentation that allows the user to show/hide the about text:
![Collapsed about paragraph](assets/responsive-about_1.png)
![Expanded about paragraph](assets/responsive-about_2.png)

I achieved this by creating a custom Javascript function that sets the text `<p>` tag to show/hide when you click the icon:

```js
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
```
## Future Improvements
- Add animations to interactions.
- Improve layout.
- Add more sections and information.

## License
This project is under the MIT License. See [LICENSE](/LICENSE) for more details.