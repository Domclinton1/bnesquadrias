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
