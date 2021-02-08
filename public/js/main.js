var scrollToTop = document.getElementById('scroll-to-top');

window.onscroll = () => scrollToTop.style.display = (window.scrollY > 350) ? "block" : "none";


scrollToTop.addEventListener('click', () => window.scrollTo(0, 0));