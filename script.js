const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-btn");
const header = document.getElementById("header");

let lastScroll = 0;

// ABRIR MENU
menuBtn.addEventListener("click", () => {
    mobileMenu.style.right = "0";
    overlay.style.display = "block";
    menuBtn.classList.toggle("open");
});

// FECHAR MENU
overlay.addEventListener("click", () => {
    mobileMenu.style.right = "-260px";
    overlay.style.display = "none";
    menuBtn.classList.remove("open");
});

// ANIMAÇÃO DO BOTÃO HAMBÚRGUER
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
});

// ESCONDER / MOSTRAR HEADER AO ROLAR A PÁGINA
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // descendo
        header.style.top = "-120px";
    } else {
        // subindo
        header.style.top = "0";
    }

    lastScroll = currentScroll;
});


document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let mensagem = document.getElementById("mensagem").value;

    let numero = "5537999095351";

    let texto = `Olá, tenho interesse nos serviços da JC Esquadrias!
%0A%0A*Nome:* ${nome}
%0A*Endereço:* ${endereco}
%0A*Mensagem:* ${mensagem}`;

    let link = `https://wa.me/${numero}?text=${texto}`;

    // Pixel Facebook
    if (typeof fbq !== "undefined") {
      fbq("track", "Contact");
    }

    // Google Ads com callback correto
    gtag_report_conversion(link);
  });

function dispararCTA() {
  // Abrir WhatsApp
  const urlWpp = wppOpen();

  // Enviar evento para o Facebook
  fbq("track", "Contact");

  // Converter Google Ads corretamente
  gtag_report_conversion(urlWpp);
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".galeria-item img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// fechar clicando fora da imagem
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");

    let index = 0;

    function showSlide(i) {
        items.forEach(item => item.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        items[i].classList.add("active");
        dots[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % items.length;
        showSlide(index);
    }

    // Carrossel automático (a cada 3s)
    let interval = setInterval(nextSlide, 3000);

    // Clicar nas bolinhas
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            clearInterval(interval);
            index = parseInt(dot.dataset.index);
            showSlide(index);
            interval = setInterval(nextSlide, 3000);
        });
    });

});

function iniciarContador() {
    const dataFinal = new Date("2025-12-19T23:59:59").getTime();

    setInterval(() => {
        const agora = new Date().getTime();
        const diff = dataFinal - agora;

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent =
            `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
}

iniciarContador();

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
document.getElementById("currentYear").textContent = new Date().getFullYear();


   