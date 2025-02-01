// // EFEITO PARTICULAS SE MOVIMENTANDO
// document.addEventListener("DOMContentLoaded", function () {
//     const canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);

//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const particleCount = 50;

//     for (let i = 0; i < particleCount; i++) {
//         particles.push({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             size: Math.random() * 5 + 1,
//             speedX: Math.random() * 3 - 1.5,
//             speedY: Math.random() * 3 - 1.5,
//         });
//     }

//     function draw() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         ctx.fillStyle = "#64a6fc";
//         ctx.beginPath();
//         for (let i = 0; i < particleCount; i++) {
//             const particle = particles[i];
//             ctx.moveTo(particle.x, particle.y);
//             ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, true);
//         }
//         ctx.fill();
//         update();
//     }

//     function update() {
//         for (let i = 0; i < particleCount; i++) {
//             const particle = particles[i];
//             particle.x += particle.speedX;
//             particle.y += particle.speedY;

//             if (particle.size > 0.2) particle.size -= 0.1;
//             if (particle.size <= 0.2) {
//                 particle.size = Math.random() * 5 + 1;
//                 particle.x = Math.random() * canvas.width;
//                 particle.y = Math.random() * canvas.height;
//             }
//         }
//     }

//     function animate() {
//         draw();
//         requestAnimationFrame(animate);
//     }

//     animate();

//     window.addEventListener("resize", function () {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//     });
// });


// // EFEITO NO NOME 'LUCAS SENA' NO INÍCIO DA PÁGINA
// document.addEventListener("DOMContentLoaded", function () {
//     const title = document.querySelector('h1');

//     title.addEventListener('mouseover', function () {
//         title.style.color = '#092f49';
//     });

//     title.addEventListener('mouseout', function () {
//         title.style.color = '#333';
//     });
// });


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
let swiper = new Swiper (".swiper", {
    cssMode: true,
    loop: true, 
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el: ".swiper-pagination"
    },
    keyboard: true,
});


let projeto1 = document.getElementById("projeto1");
let projeto2 = document.getElementById("projeto2");
let projeto3 = document.getElementById("projeto3");
let projeto4 = document.getElementById("projeto4");

const LARGURA_TELA = window.innerWidth;
console.log(LARGURA_TELA);

if (LARGURA_TELA <= 450){
    projeto1.innerHTML = "<img src='img/Projetos/LoveSoundsMobile.png' alt='LoveSounds'></img>";

    projeto2.innerHTML = "<img src='img/Projetos/AtmosferaMobile.png' alt='Atmosfera de amor'></img>";

    projeto3.innerHTML = "<img src='img/Projetos/cardMobile.png' alt='Cadastro cartão'></img>";

    projeto4.innerHTML = "<img src='img/Projetos/dropdownMobile.png' alt='Cadastro cartão'></img>";
} else {
    projeto1.innerHTML = "<img src='img/Projetos/LoveSounds.png' alt='LoveSounds'></img>";

    projeto2.innerHTML = "<img src='img/Projetos/Atmosfera.png' alt='Atmosfera de amor'></img>";

    projeto3.innerHTML = "<img src='img/Projetos/Cartao.png' alt='Cadastro cartão'></img>";

    projeto4.innerHTML = "<img src='img/Projetos/MenuDropdown.png' alt='Cadastro cartão'></img>";
}