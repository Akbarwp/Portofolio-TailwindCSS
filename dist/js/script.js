// Hamburger
const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden');
});

// Close hamburger
window.addEventListener('click', function(e) {
    if (e.target != hamburger && e.target != navbar) {
        hamburger.classList.remove('hamburger-active');
        navbar.classList.add('hidden');
    }
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');

        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
        
    } else {
        header.classList.remove('navbar-fixed');

        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Dark Moded Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';

    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Memindahkan posisi toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;

} else {
    darkToggle.checked = false;
}

// Alert Game ID
const valorant = document.querySelector('#valorant');
const honkai = document.querySelector('#honkai');

valorant.addEventListener('click', function() {
    Swal.fire({
        icon: 'info',
        title: 'Add me',
        text: 'Laravel#java'
    });
});

honkai.addEventListener('click', function() {
    Swal.fire({
        icon: 'info',
        title: 'Add me',
        text: '11280589'
    });
});