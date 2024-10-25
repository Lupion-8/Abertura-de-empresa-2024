function setupInfiniteScroll() {
    const carousel = document.querySelector('.carousel');
    const cards = Array.from(carousel.children);
    const totalCards = cards.length;

    // Clonar os cards para facilitar a rolagem infinita
    cards.forEach(card => {
        const cloneBefore = card.cloneNode(true);
        const cloneAfter = card.cloneNode(true);
        carousel.insertBefore(cloneBefore, carousel.firstChild);
        carousel.appendChild(cloneAfter);
    });

    // Ajustar a posição inicial do carrossel para o conjunto original
    const initialScrollPosition = carousel.scrollWidth / 3;
    carousel.scrollLeft = initialScrollPosition; //definar 600 para telas moneres que 912px

    // Variável para desativar temporariamente o comportamento de rolagem suave
    let isSmoothScroll = true;

    carousel.addEventListener('scroll', () => {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

        // Desativar o comportamento de rolagem suave ao reposicionar
        if (!isSmoothScroll) {
            carousel.style.scrollBehavior = 'auto';
        }

        // Se rolar para o final, voltar para o conjunto original
        if (carousel.scrollLeft >= maxScrollLeft - 1) {
            isSmoothScroll = false;
            carousel.scrollLeft = initialScrollPosition;
        }

        // Se rolar para o início, voltar para o conjunto original
        if (carousel.scrollLeft <= 1) {
            isSmoothScroll = false;
            carousel.scrollLeft = initialScrollPosition;
        }

        // Reativar a rolagem suave após o reposicionamento
        isSmoothScroll = true;
        carousel.style.scrollBehavior = 'smooth';

        updateCardOpacity();
    });
}

// Função para ajustar a opacidade e escala dos cards
function updateCardOpacity() {
    const carousel = document.querySelector('.carousel');
    const cards = carousel.querySelectorAll('.item');
    const carouselCenter = carousel.offsetWidth / 2;

    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distanceToCenter = Math.abs(carouselCenter - cardCenter);
        
        const maxDistance = carouselCenter;
        const opacity = 1 - Math.min(distanceToCenter / maxDistance, 1);

        // Definir os valores de escala mínimo e máximo
        const minScale = 0.8;
        const maxScale = 1;
        
        // Calcular a escala proporcional à opacidade
        const scale = minScale + (maxScale - minScale) * opacity;

        // Aplicar a opacidade e a escala
        card.style.opacity = opacity;
        card.style.transform = `scale(${scale})`;
    });
}


// Inicializar o carrossel
document.addEventListener('DOMContentLoaded', () => {
    setupInfiniteScroll();
    updateCardOpacity();

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('scroll', updateCardOpacity);
});


function enableDragScroll() {
    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Evento para o início do arrasto
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    // Evento para finalizar o arrasto quando o mouse sair do carrossel
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    // Evento para finalizar o arrasto quando o mouse for solto
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    // Evento para o movimento do mouse
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Velocidade do scroll
        carousel.scrollLeft = scrollLeft - walk;
    });
}

function setupNavigationButtons() {
    const carousel = $('.carousel'); // Usando jQuery para selecionar o carrossel
    const nextButton = $('.next');
    const prevButton = $('.prev');

    if (!nextButton.length || !prevButton.length || !carousel.length) {
        console.error('Os botões de navegação ou o carrossel não foram encontrados.');
        return;
    }

    const slide = carousel.find('.slide');
    const cardWidth = slide.find('.item').outerWidth(true); // Largura de um card com margem

    // Função para rolar o carrossel suavemente com jQuery
    function scrollCarousel(offset) {
        const targetPosition = carousel.scrollLeft() + offset;
        carousel.animate({ scrollLeft: targetPosition }, 400); // 400 milissegundos de duração
    }

    // Evento para o botão "avançar"
    nextButton.on('click', () => {
        scrollCarousel(cardWidth);
    });

    // Evento para o botão "voltar"
    prevButton.on('click', () => {
        scrollCarousel(-cardWidth);
    });
}

$(document).ready(function () {
    setupInfiniteScroll();
    updateCardOpacity();
    enableDragScroll();
    setupNavigationButtons();

    const carousel = $('.carousel');
    carousel.on('scroll', updateCardOpacity);
});


document.addEventListener('DOMContentLoaded', () => {
    setupInfiniteScroll();
    updateCardOpacity();
    enableDragScroll();
    setupNavigationButtons();

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('scroll', updateCardOpacity);
});
