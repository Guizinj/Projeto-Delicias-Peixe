import http from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve(".");
const types = {".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".jpg":"image/jpeg", ".png":"image/png", ".svg":"image/svg+xml"};
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const relative = pathname === "/" ? "index.html" : pathname.slice(1);
    const file = resolve(root, relative);
    // Apenas os arquivos públicos do bio-site são servidos.
    const publicFile = ["index.html", "style.css", "script.js", "config.js"].includes(relative) || relative.startsWith("assets/");
    if (!publicFile || !file.startsWith(root + sep)) { res.writeHead(404).end("Não encontrado"); return; }
    const data = await readFile(file);
    res.writeHead(200, {"Content-Type": types[extname(file)] || "application/octet-stream", "X-Content-Type-Options":"nosniff"});
    res.end(data);
  } catch { res.writeHead(404).end("Não encontrado"); }
});
server.listen(Number(process.env.PORT) || 4173, "127.0.0.1", () => console.log(`Local: http://localhost:${server.address().port}`));
