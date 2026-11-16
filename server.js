// Server locale per Magazzino Magliette: node server.js  →  http://localhost:5173
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 5173;
const FILE = path.join(__dirname, "magazzino-magliette.html");

const HEAD = `<!doctype html><html lang="it"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head><body>`;

http.createServer((req, res) => {
  const url = req.url.split("?")[0];
  if (url === "/" || url === "/index.html" || url === "/magazzino-magliette.html") {
    fs.readFile(FILE, "utf8", (err, html) => {
      if (err) { res.writeHead(500); return res.end("File non trovato"); }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
      res.end(HEAD + html + "</body></html>");
    });
    return;
  }
  res.writeHead(404); res.end("Non trovato");
}).listen(PORT, "127.0.0.1", () => console.log(`Magazzino Magliette: http://localhost:${PORT}`));
