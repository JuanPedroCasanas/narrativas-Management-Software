import { loadContent } from "./loadContent.js";


export function addNavbarListeners () {

    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            loadContent(href);
        });
    });
};