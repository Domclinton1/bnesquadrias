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

    const nome = document.getElementById("nome").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !endereco || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const numero = "5537999095351";

    const texto = `Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}
Endereço da obra: ${endereco}
Mensagem:
${mensagem}`;

    // 🔐 salva para a página de obrigado
    sessionStorage.setItem("wpp_numero", numero);
    sessionStorage.setItem("wpp_texto", texto);

    /* ======================
       CONVERSÕES
    ====================== */

    // Meta Pixel
    if (typeof fbq !== "undefined") {
      fbq("track", "Contact");
    }

    // Google Ads (SEM redirect)
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "AW-17795398162/ZTbSCNaiodAbEJL0wKVC",
      });
    }

    // redireciona para obrigado
    window.location.href = "../pages/thankyou.html";
  });

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".galeria-item img").forEach((img) => {
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
    items.forEach((item) => item.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

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
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      index = parseInt(dot.dataset.index);
      showSlide(index);
      interval = setInterval(nextSlide, 3000);
    });
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
document.getElementById("currentYear").textContent = new Date().getFullYear();

const nomes = [
  "Carlos Souza",
  "Marcos Guilherme",
  "João Paulo",
  "Ana Maria",
  "Fernanda Moraes",
  "Ricardo Augusto",
  "Paulo Roberto",
  "Rafael Silva",
  "Marisa Kollut",
  "Julia Bittencourt",
  "José Henrique",
  "Geraldo Ribeiro",
  "Maria Clara",
];
const cidades = [
  "Belo Horizonte - MG",
  "Contagem - MG",
  "Betim - MG",
  "Venda Nova - BH",
  "Santa Luzia - MG",
  "Sabará - MG",
  "Caeté - MG",
  "Nova Lima - MG",
  "Aplhaville, Nova Lima - MG",
  "Uberlandia - MG",
  "Montes Claros - MG",
  "Sete Lagoas - MG",
  "Governador Valadares - MG",
];

const proofBox = document.getElementById("social-proof");

function mostrarNotificacao() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const cidade = cidades[Math.floor(Math.random() * cidades.length)];
  const minutos = Math.floor(Math.random() * 10) + 1;

  proofBox.innerHTML = `
    🔔 <strong>${nome} </strong> solicitou orçamento<br>
    📍 ${cidade}<br>
    ⏱️ há ${minutos} minutos
  `;

  proofBox.style.display = "block";

  setTimeout(() => {
    proofBox.style.display = "none";
  }, 6000);
}

// primeira após 8 segundos
setTimeout(mostrarNotificacao, 8000);

// depois a cada 25–40s
setInterval(
  mostrarNotificacao,
  Math.floor(Math.random() * (30000 - 20000)) + 20000
);
