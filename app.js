const menuIcon = document.querySelector('#menu-icon');
const navGroup = document.querySelector('.nav-group');
const shop = document.querySelector('.shop');
const faqs = document.querySelectorAll('.faq');
const canHover = window.matchMedia('(hover: hover)').matches;
let closeTimer;

function openShop() {
    clearTimeout(closeTimer);
    shop.classList.add('open');
}

function closeShop(delay = 150) {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => shop.classList.remove('open'), delay);
}

function closeNav() {
    navGroup.classList.remove('active');
    menuIcon.classList.add('ri-menu-line');
    menuIcon.classList.remove('ri-close-line');
    shop.classList.remove('open');
}

menuIcon.addEventListener('click', () => {
    const isOpen = navGroup.classList.toggle('active');
    menuIcon.classList.toggle('ri-menu-line', !isOpen);
    menuIcon.classList.toggle('ri-close-line', isOpen);
    if (!isOpen) shop.classList.remove('open');
});

if (canHover) {
    shop.addEventListener('mouseenter', openShop);
    shop.addEventListener('mouseleave', () => closeShop());
}

shop.addEventListener('click', (e) => {
    const innerLink = e.target.closest('a');
    if (innerLink && innerLink !== shop) return;

    e.preventDefault();
    if (e.target.closest('.shp-dwn')) return;
    shop.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!shop.contains(e.target)) shop.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeNav();
});

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});