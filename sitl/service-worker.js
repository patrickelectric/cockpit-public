// GitHub Pages can not send the headers that make the page cross-origin isolated, which ArduPilot
// needs for its threads (SharedArrayBuffer), so add them to every response of this scope.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).then((response) => {
      const headers = new Headers(response.headers)
      headers.set('Cross-Origin-Embedder-Policy', 'require-corp')
      headers.set('Cross-Origin-Opener-Policy', 'same-origin')
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
    })
  )
})
