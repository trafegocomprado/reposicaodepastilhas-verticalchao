const commercialPhone = "5531996848477";

const header = document.querySelector("[data-site-header]");

function track(event, properties) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...properties });
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelectorAll("[data-track-cta]").forEach((link) => {
  link.addEventListener("click", () => track("cta_clicked", {
    cta_text: link.textContent.trim(),
    cta_location: link.dataset.trackLocation,
    contact_method: link.href.startsWith("tel:") ? "phone" : "whatsapp"
  }));
});

const form = document.querySelector("[data-whatsapp-form]");
const formStatus = document.querySelector("[data-form-status]");

function setFieldError(field, message) {
  field.setAttribute("aria-invalid", String(Boolean(message)));
  const error = form?.querySelector(`[data-error-for="${field.name}"]`);
  if (error) error.textContent = message;
}

function validateField(field) {
  const value = field.value.trim();
  let message = "";

  if (field.required && !value) message = "Preencha este campo.";
  if (!message && field.type === "email" && value && !field.validity.valid) message = "Digite um e-mail válido.";
  if (!message && field.name === "telefone" && value.replace(/\D/g, "").length < 10) message = "Digite um telefone com DDD.";

  setFieldError(field, message);
  return !message;
}

form?.addEventListener("input", (event) => {
  if (event.target.matches("input, select, textarea")) validateField(event.target);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("input, select, textarea")];
  const valid = fields.every(validateField);

  if (!valid) {
    formStatus.textContent = "Revise os campos indicados antes de continuar.";
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  const values = Object.fromEntries(new FormData(form).entries());
  const lines = [
    "Olá! Gostaria de solicitar atendimento para reposição de pastilhas.",
    "",
    `Nome: ${values.nome}`,
    `Telefone: ${values.telefone}`,
    values.email ? `E-mail: ${values.email}` : "",
    `Assunto: ${values.assunto}`,
    values.mensagem ? `Mensagem: ${values.mensagem}` : ""
  ].filter(Boolean);

  track("form_submitted", {
    form_name: "reposicao_pastilhas_orcamento",
    destination: "whatsapp"
  });

  formStatus.textContent = "Abrindo o WhatsApp com sua mensagem...";
  window.open(`https://api.whatsapp.com/send?phone=${commercialPhone}&text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
});
