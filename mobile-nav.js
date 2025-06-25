// mobile-nav.js - VERSÃO MELHORADA
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cria uma cópia mobile-friendly dos links
    const originalLinks = document.querySelector('.nav-links');
    if (!originalLinks) return;
    
    const mobileLinks = originalLinks.cloneNode(true);
    originalLinks.classList.add('desktop');
    mobileLinks.classList.remove('desktop');
    mobileLinks.classList.add('mobile');
    document.body.appendChild(mobileLinks);

    // 2. Adiciona o botão hamburguer
    const nav = document.querySelector('nav');
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '<i class="ri-menu-line"></i>';
    nav.appendChild(mobileBtn);

    // 3. Adiciona overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // 4. Lógica de toggle MELHORADA
    let isTouchDevice = 'ontouchstart' in window;
    const toggleMenu = () => {
        mobileLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    mobileBtn.addEventListener(isTouchDevice ? 'touchstart' : 'click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    overlay.addEventListener('click', toggleMenu);
    
    // Fecha ao clicar em um link
    mobileLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});
