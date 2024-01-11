// Obtener referencia al botón del menú y a los elementos del menú
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

// Agregar evento de clic al botón del menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' para mostrar/ocultar los elementos del menú
    menuItems.classList.toggle('active');
});

// Obtener todos los elementos del menú y agregar evento de clic a cada uno
const menuLinks = document.querySelectorAll('.menu-items a');
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Ocultar los elementos del menú al hacer clic en uno de ellos
        menuItems.classList.remove('active');
    });
});