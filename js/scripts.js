// EFEITO PARTICULAS SE MOVIMENTANDO
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 1,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#64a6fc";
        ctx.beginPath();
        for (let i = 0; i < particleCount; i++) {
            const particle = particles[i];
            ctx.moveTo(particle.x, particle.y);
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    function update() {
        for (let i = 0; i < particleCount; i++) {
            const particle = particles[i];
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.size > 0.2) particle.size -= 0.1;
            if (particle.size <= 0.2) {
                particle.size = Math.random() * 5 + 1;
                particle.x = Math.random() * canvas.width;
                particle.y = Math.random() * canvas.height;
            }
        }
    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});


// EFEITO NO NOME 'LUCAS GIRUNDI' NO INÍCIO DA PÁGINA
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('h1');

    title.addEventListener('mouseover', function () {
        title.style.color = '#092f49';
    });

    title.addEventListener('mouseout', function () {
        title.style.color = '#333';
    });
});


// EFEITO DE MOSTRAR E ESCONDER DIV COM MAIS INFORMAÇÕES 'SOBRE MIM'
const tela = document.querySelector('.mais-info');
const btnAbreInfo = document.querySelector('#abre-mais-info');
const btnFechaInfo = document.querySelector('#fecha-mais-info');
tela.style.display = 'none';

function abreMaisInfo() {
    tela.style.animation = 'entra-info 0.8s ease';
    tela.style.display = 'block';
    btnAbreInfo.style.display = 'none';
    btnFechaInfo.style.display = 'block';
}

function fechaMaisInfo() {
    tela.style.animation = 'sai-info 0.8s ease';
    function fechar() {
        tela.style.display = 'none';
        btnAbreInfo.style.display = 'block';
        btnFechaInfo.style.display = 'none';
    } setTimeout(fechar, 799);

}


//CARROSSEL 
const swiperEl = document.querySelector('swiper-container');
const swiper = swiperEl.swiper;

var appendNumber = 4;
var prependNumber = 1;
document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
            '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
            '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
        ]);
    });
document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
            '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>"
        );
    });
document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
            '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>"
        );
    });
document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
            '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
            '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
        ]);
    });