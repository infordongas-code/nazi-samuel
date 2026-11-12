const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", aberto);
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = aberto ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const questionBtn = document.getElementById("questionBtn");
const questionAnswer = document.getElementById("questionAnswer");

questionBtn.addEventListener("click", () => {
  const vaiMostrar = questionAnswer.hidden;
  questionAnswer.hidden = !vaiMostrar;
  questionBtn.querySelector("span").textContent = vaiMostrar ? "−" : "＋";
  questionBtn.firstChild.textContent = vaiMostrar
    ? "Ocultar pergunta de reflexão "
    : "Ver uma pergunta para reflexão ";
});
