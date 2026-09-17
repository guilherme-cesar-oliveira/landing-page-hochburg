// Cache básico só dos arquivos estáticos da própria Hochburg (imagens/ícones/fontes) —
// não intercepta GTM/gtag.js/Meta Pixel (são de outra origem).
// Ao trocar um asset (ex.: nova versão do hero ou da fonte), bump o número da
// versão abaixo pra invalidar o cache antigo.
const CACHE_NAME = 'hochburg-static-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // HTML: sempre busca a versão mais nova quando online; cache só serve de fallback offline
  const isNavigation = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (isNavigation) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // imagens/ícones/fontes estáticos: serve do cache na hora (stale-while-revalidate),
  // e atualiza o cache em segundo plano pra próxima visita
  if (/\.(jpg|jpeg|webp|png|svg|ico|woff2?)$/.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const network = fetch(req)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
