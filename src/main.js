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
