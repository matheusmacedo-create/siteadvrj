// ===== Configuração =====
// Troque pelo número real do escritório (DDI + DDD + número, só dígitos).
const WHATSAPP = "5521900000000";

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Header com fundo ao rolar
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Animação de entrada
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Formulário → abre o WhatsApp com a mensagem preenchida
const form = document.getElementById("form-contato");
const msg = form.querySelector(".form__msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const ok = field.type === "checkbox" ? field.checked : field.checkValidity() && field.value.trim() !== "";
    field.classList.toggle("is-invalid", !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    msg.textContent = "Por favor, preencha todos os campos obrigatórios.";
    return;
  }

  const d = new FormData(form);
  const texto =
    `Olá, MBL Advocacia Estratégica!\n\n` +
    `*Nome:* ${d.get("nome")}\n` +
    `*Telefone:* ${d.get("telefone")}\n` +
    `*E-mail:* ${d.get("email")}\n` +
    `*Assunto:* ${d.get("area")}\n\n` +
    `${d.get("mensagem")}`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  msg.textContent = "Obrigado! Estamos abrindo o WhatsApp para concluir o envio.";
  form.reset();
});

form.querySelectorAll("input, select, textarea").forEach((f) =>
  f.addEventListener("input", () => f.classList.remove("is-invalid"))
);
