// Genera index.html (pagina completa per Netlify e hosting statici) da magazzino-magliette.html
// Uso: node build-index.js
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "magazzino-magliette.html"), "utf8");
const HEAD = `<!doctype html><html lang="it"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head><body>`;

fs.writeFileSync(path.join(__dirname, "index.html"), HEAD + src + "</body></html>\n");
console.log("index.html creato");
