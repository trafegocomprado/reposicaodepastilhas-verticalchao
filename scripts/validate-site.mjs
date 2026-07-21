import { existsSync, readFileSync } from "node:fs";

const failures = [];
const read = (path) => {
  if (!existsSync(path)) {
    failures.push(`Missing file: ${path}`);
    return "";
  }
  return readFileSync(path, "utf8");
};

const html = read("src/index.html");
const css = read("src/styles.css");
const js = read("src/main.js");
const source = `${html}\n${css}\n${js}`;

const requiredFiles = [
  "src/assets/logo.webp",
  "src/assets/favicon-32.png",
  "src/assets/apple-touch-icon.png",
  "src/assets/reposicao-pastilhas-01.jpg",
  "src/assets/reposicao-pastilhas-02.jpg",
  "src/assets/reposicao-pastilhas-03.jpg"
];

for (const path of requiredFiles) {
  if (!existsSync(path)) failures.push(`Missing asset: ${path}`);
}

const requiredHtml = [
  "(31) 99684-8477",
  "tel:+5531996848477",
  "(31) 98712-2106",
  "https://api.whatsapp.com/send?phone=5531996848477&text=Ol%C3%A1,%20preciso%20de%20um%20atendimento!",
  "verticalchao@gmail.com",
  "HomeAndConstructionBusiness",
  "data-whatsapp-form",
  "GTM-M7GS29F",
  "G-L2NNH9T18X",
  "AW-956995439"
];

for (const value of requiredHtml) {
  if (!html.includes(value)) failures.push(`Missing required HTML: ${value}`);
}

const removedLocal = "994" + "71";
const removedInternational = "553199" + "4711393";
const removedCard = "Edv" + "aldo";
for (const value of [removedLocal, removedInternational, removedCard, "Contact Form Demo", "63%"] ) {
  if (source.includes(value)) failures.push(`Forbidden content remains: ${value}`);
}

const count = (value, text = html) => text.split(value).length - 1;
if (count("GTM-M7GS29F") !== 2) failures.push("GTM container must occur exactly twice: script and noscript");
if (count("gtag('config', 'G-L2NNH9T18X')") !== 1) failures.push("GA4 must be configured exactly once");
if (count("gtag('config', 'AW-956995439')") !== 1) failures.push("Google Ads must be configured exactly once");
if (!js.includes('track("cta_clicked"')) failures.push("Missing CTA tracking event");
if (!js.includes('track("form_submitted"')) failures.push("Missing form tracking event");
if (!js.includes('form_name: "reposicao_pastilhas_orcamento"')) failures.push("Missing tracking form name");
if (!css.toLowerCase().includes("--red: #e8333b")) failures.push("Missing red brand token");
if (!css.toLowerCase().includes("--ink: #14171f")) failures.push("Missing graphite brand token");
if (!css.toLowerCase().includes("--whatsapp: #25d366")) failures.push("Missing WhatsApp token");
if (!html.includes('<meta name="description"')) failures.push("Missing meta description");
if (!html.includes('rel="icon"')) failures.push("Missing favicon link");
if (!html.includes('application/ld+json')) failures.push("Missing JSON-LD");
if ((html.match(/<h1\b/g) ?? []).length !== 1) failures.push("Page must contain exactly one h1");

for (const menuArtifact of ["data-menu-toggle", "menu-toggle", "menu-open", "is-open"]) {
  if (source.includes(menuArtifact)) failures.push(`Mobile menu artifact remains: ${menuArtifact}`);
}

const mobileGallery = css.slice(css.lastIndexOf("@media (max-width: 680px)"));
if (!/\.gallery figure\s*\{[\s\S]*?min-height:\s*0;[\s\S]*?aspect-ratio:\s*4\s*\/\s*3/.test(mobileGallery)) {
  failures.push("Mobile gallery cards must use a compact 4:3 aspect ratio without a minimum height");
}

const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (schemaMatch) {
  try {
    JSON.parse(schemaMatch[1]);
  } catch {
    failures.push("JSON-LD must contain valid JSON");
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Site validation passed.");
