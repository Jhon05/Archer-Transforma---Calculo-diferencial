const CACHE_NAME = 'arcotransforma-v43-compact-scorm';
const ANGLES = [-45,-35,-25,-15,-5,5,15,25,35,45,55,65,70];
const IDEAL_SHEETS = ANGLES.map(angle => `./avframes/explorador_sheets/row_${angle<0?`n${Math.abs(angle)}`:`p${angle}`}.png`);
const FANTASY_BACKGROUNDS = Array.from({length:10},(_,i)=>`./bg_progression/phase_${String(i+1).padStart(2,'0')}.png`);
const QUESTION_IMAGES = Array.from({length:10},(_,i)=>`./banco/q${i+31}.png`);
const ASSETS = ['./','./index.html','./styles.css','./scorm.js','./game.js','./manifest.webmanifest','./avframes/explorador/preview.png','./targets/target_medieval.png', ...IDEAL_SHEETS, ...FANTASY_BACKGROUNDS, ...QUESTION_IMAGES];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request).catch(()=>resp)));
});
