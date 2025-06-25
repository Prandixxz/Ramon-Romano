// mobile-nav.js - Complemento para menu mobile
document.addEventListener('DOMContentLoaded', () => {
    // 1. Adiciona o botão hamburguer dinamicamente
    const nav = document.querySelector('nav');
    const navLogo = document.querySelector('.nav-logo');
    
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '<i class="ri-menu-line"></i>';
    nav.insertBefore(mobileBtn, navLogo.nextSibling);

    // 2. Adiciona overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // 3. Lógica de toggle
    mobileBtn.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        overlay.classList.remove('active');
    });
});