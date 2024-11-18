// Detectar elementos en pantalla
const animatedItems = document.querySelectorAll('.animate');

const scrollHandler = () => {
    animatedItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollHandler);
scrollHandler(); // Para elementos visibles al cargar la página
