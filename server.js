const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { execFile } = require("node:child_process");

const HOST = "127.0.0.1";
const PAGE = path.join(__dirname, "index.html");

function openBrowser(url) {
  if (process.platform === "win32") execFile("cmd", ["/c", "start", "", url]);
  else if (process.platform === "darwin") execFile("open", [url]);
  else execFile("xdg-open", [url]);
}

const server = http.createServer((request, response) => {
  const requestPath = new URL(request.url || "/", `http://${HOST}`).pathname;
  if (requestPath !== "/" && requestPath !== "/index.html") {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Não encontrado");
    return;
  }

  fs.readFile(PAGE, (error, content) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(`Não foi possível carregar a interface: ${error.message}`);
      return;
    }
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Length": content.length,
      "Cache-Control": "no-store"
    });
    response.end(content);
  });
});

server.listen(0, HOST, () => {
  const address = `http://${HOST}:${server.address().port}/`;
  console.log(`Editor LRC aberto em ${address}`);
  console.log("Mantenha esta janela aberta. Pressione Ctrl+C para encerrar.");
  openBrowser(address);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
