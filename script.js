// ===== Animação de entrada =====
// Fica no topo do arquivo: se algo abaixo falhar, o conteúdo continua aparecendo.
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
window.mblReveal = true;

// ===== Configuração =====
// O número do WhatsApp vem do botão flutuante (index.html): troque lá e em todos os links wa.me.
const WHATSAPP = new URL(document.querySelector(".wa-float").href).pathname.slice(1);

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Header com fundo ao rolar (observa um marcador no topo, sem ler scrollY)
const header = document.querySelector(".header");
const sentinel = document.createElement("div");
sentinel.setAttribute("aria-hidden", "true");
sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:20px;pointer-events:none";
document.body.prepend(sentinel);
if ("IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => header.classList.toggle("is-scrolled", !e.isIntersecting)).observe(sentinel);
} else {
  header.classList.add("is-scrolled");
}

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("menu");
const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("is-open")) {
    setMenu(false);
    toggle.focus();
  }
});
document.addEventListener("click", (e) => {
  if (nav.classList.contains("is-open") && !e.target.closest(".header")) setMenu(false);
});

// Formulário → abre o WhatsApp com a mensagem preenchida
// (sem JS o formulário fica oculto e valem os links de contato ao lado)
const form = document.getElementById("form-contato");
const msg = form.querySelector(".form__msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let first = null;
  form.querySelectorAll("[required]").forEach((field) => {
    const ok = field.type === "checkbox" ? field.checked : field.checkValidity() && field.value.trim() !== "";
    field.setAttribute("aria-invalid", String(!ok));
    if (!ok && !first) first = field;
  });

  if (first) {
    msg.classList.add("is-error");
    msg.textContent = "";
    requestAnimationFrame(() => (msg.textContent = "Preencha os campos destacados."));
    first.focus();
    return;
  }

  msg.classList.remove("is-error");
  const d = new FormData(form);
  const texto =
    `Olá, LMB Advocacia Estratégica!\n\n` +
    `*Nome:* ${d.get("nome")}\n` +
    `*Telefone:* ${d.get("telefone")}\n` +
    `*E-mail:* ${d.get("email")}\n` +
    `*Assunto:* ${d.get("area")}\n\n` +
    `${d.get("mensagem")}`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  msg.textContent = "Estamos abrindo o WhatsApp para você concluir o envio.";
});

form.querySelectorAll("input, select, textarea").forEach((f) =>
  f.addEventListener("input", () => f.removeAttribute("aria-invalid"))
);
form.querySelector("select").addEventListener("change", (e) => e.target.removeAttribute("aria-invalid"));
form.hidden = false;
