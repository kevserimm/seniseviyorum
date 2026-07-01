/* ════════════════════════════════════
   DATA — "SENİ SEVİYORUM" / DÜNYA DİLLERİ
   ════════════════════════════════════ */
const LANGUAGES = [
  { lang: "Türkçe",           native: "Seni seviyorum",                      code: "tr-TR" },
  { lang: "İngilizce",        native: "I love you",                          code: "en-US" },
  { lang: "Fransızca",        native: "Je t'aime",                           code: "fr-FR" },
  { lang: "İspanyolca",       native: "Te amo",                              code: "es-ES" },
  { lang: "İtalyanca",        native: "Ti amo",                              code: "it-IT" },
  { lang: "Almanca",          native: "Ich liebe dich",                      code: "de-DE" },
  { lang: "Portekizce",       native: "Eu te amo",                           code: "pt-PT" },
  { lang: "Rusça",            native: "Я тебя люблю", translit: "Ya tebya lyublyu", code: "ru-RU" },
  { lang: "Japonca",          native: "愛してる", translit: "Aishiteru",       code: "ja-JP" },
  { lang: "Korece",           native: "사랑해", translit: "Saranghae",         code: "ko-KR" },
  { lang: "Çince",            native: "我爱你", translit: "Wǒ ài nǐ",          code: "zh-CN" },
  { lang: "Arapça",           native: "أحبك", translit: "Uhibbuka / Uhibbuki", code: "ar-SA" },
  { lang: "Farsça",           native: "دوستت دارم", translit: "Dooset dâram", code: "fa-IR" },
  { lang: "Hintçe",           native: "मैं तुमसे प्यार करता हूँ", translit: "Main tumse pyaar karta hoon", code: "hi-IN" },
  { lang: "Yunanca",          native: "Σ' αγαπώ", translit: "S'agapo",        code: "el-GR" },
  { lang: "Lehçe",            native: "Kocham cię",                          code: "pl-PL" },
  { lang: "Hollandaca",       native: "Ik hou van jou",                      code: "nl-NL" },
  { lang: "İsveççe",          native: "Jag älskar dig",                      code: "sv-SE" },
  { lang: "Norveççe",         native: "Jeg elsker deg",                      code: "nb-NO" },
  { lang: "Danca",            native: "Jeg elsker dig",                      code: "da-DK" },
  { lang: "Fince",            native: "Minä rakastan sinua",                 code: "fi-FI" },
  { lang: "Çekçe",            native: "Miluji tě",                           code: "cs-CZ" },
  { lang: "Macarca",          native: "Szeretlek",                           code: "hu-HU" },
  { lang: "Romence",          native: "Te iubesc",                           code: "ro-RO" },
  { lang: "Bulgarca",         native: "Обичам те", translit: "Obicham te",    code: "bg-BG" },
  { lang: "Ukraynaca",        native: "Я тебе кохаю", translit: "Ya tebe kokhayu", code: "uk-UA" },
  { lang: "Sırpça",           native: "Волим те", translit: "Volim te",       code: "sr-RS" },
  { lang: "Hırvatça",         native: "Volim te",                            code: "hr-HR" },
  { lang: "Vietnamca",        native: "Anh yêu em",                          code: "vi-VN" },
  { lang: "Tayca",            native: "ฉันรักคุณ", translit: "Chan rak khun", code: "th-TH" },
  { lang: "Endonezce",        native: "Aku cinta padamu",                    code: "id-ID" },
  { lang: "Malayca",          native: "Saya cintakan awak",                  code: "ms-MY" },
  { lang: "Filipince",        native: "Mahal kita",                          code: "fil-PH" },
  { lang: "İbranice",         native: "אני אוהב אותך", translit: "Ani ohev otach", code: "he-IL" },
  { lang: "Svahili",          native: "Nakupenda",                           code: "sw-KE" },
  { lang: "Zuluca",           native: "Ngiyakuthanda",                       code: "zu-ZA" },
  { lang: "Afrikaanca",       native: "Ek is lief vir jou",                  code: "af-ZA" },
  { lang: "İzlandaca",        native: "Ég elska þig",                        code: "is-IS" },
  { lang: "İrlandaca",        native: "Tá grá agam duit",                    code: "ga-IE" },
  { lang: "Galce",            native: "Rwy'n dy garu di",                    code: "cy-GB" },
  { lang: "Katalanca",        native: "T'estimo",                            code: "ca-ES" },
  { lang: "Baskça",           native: "Maite zaitut",                        code: "eu-ES" },
  { lang: "Estonyaca",        native: "Ma armastan sind",                    code: "et-EE" },
  { lang: "Letonca",          native: "Es tevi mīlu",                        code: "lv-LV" },
  { lang: "Litvanyaca",       native: "Aš tave myliu",                       code: "lt-LT" },
  { lang: "Ermenice",         native: "Ես սիրում եմ քեզ", translit: "Yes sirum em qez", code: "hy-AM" },
  { lang: "Gürcüce",          native: "მე შენ მიყვარხარ", translit: "Me shen mikvarkhar", code: "ka-GE" },
  { lang: "Azerice",          native: "Mən səni sevirəm",                    code: "az-AZ" },
  { lang: "Özbekçe",          native: "Men seni sevaman",                    code: "uz-UZ" },
  { lang: "Moğolca",          native: "Би чамд хайртай", translit: "Bi chamd khairtai", code: "mn-MN" },
];

/* subset used for the spinning 3D carousel — keep it light */
const CAROUSEL_SET_SIZE = 14;
const CAROUSEL_LANGS = LANGUAGES.filter((_, i) => i % Math.ceil(LANGUAGES.length / CAROUSEL_SET_SIZE) === 0).slice(0, CAROUSEL_SET_SIZE);

/* ════════════════════════════════════
   DATA — SANA ÖZEL SÜRPRİZ NOTLAR
   (özgün, kısa cümleler)
   ════════════════════════════════════ */
const SWEET_NOTES = [
  "Bugün de seni dün sevdiğimden daha çok seviyorum.",
  "Aklımdan geçen her düşüncenin bir köşesinde sen varsın.",
  "Seninle sessizlik bile en güzel sohbet oluyor.",
  "Gülüşün, günümü kurtaran en küçük mucize.",
  "Nerede olursam olayım, kalbim hep seninle.",
  "Seni sevmek, hiç yorulmadığım tek şey.",
  "Sana bakarken zaman farklı akıyor sanki.",
  "Elini tuttuğumda bütün telaşım dağılıyor.",
  "Sen olunca en sıradan gün bile özel oluyor.",
  "Seni sevdiğimi bir kere değil, her gün yeniden fark ediyorum.",
  "Bugün canın sıkılırsa unutma: birileri seni çok seviyor.",
  "Sana sarılmak, en güvende hissettiğim yer.",
  "Kalbim seni saymayı hiç bırakmadı.",
  "Sen benim en sevdiğim tesadüf değil, en bilinçli seçimimsin.",
  "Uzakta olsan da, hep bir adım yakınımdasın.",
];

/* ════════════════════════════════════
   HERO — CYCLING PHRASE
   ════════════════════════════════════ */
let heroIndex = 0;

function paintHero(i) {
  const item = LANGUAGES[i];
  const phraseEl = document.getElementById('hero-phrase');
  const langEl   = document.getElementById('hero-lang');

  gsap.to(phraseEl, {
    opacity: 0, y: -14, duration: 0.35, ease: 'power2.in',
    onComplete: () => {
      phraseEl.textContent = item.native;
      langEl.textContent   = item.translit ? `${item.lang} · ${item.translit}` : item.lang;
      phraseEl.dataset.code = item.code;
      phraseEl.dataset.text = item.native;
      gsap.fromTo(phraseEl, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' });
      gsap.fromTo(langEl,   { opacity: 0 },        { opacity: 1, duration: 0.6, delay: 0.1 });
    }
  });

  document.querySelectorAll('.hero-dot').forEach((d, di) => d.classList.toggle('active', di === i % 10));
}

function buildHeroDots() {
  const wrap = document.getElementById('hero-dots');
  for (let i = 0; i < 10; i++) {
    const d = document.createElement('span');
    d.className = 'hero-dot';
    wrap.appendChild(d);
  }
}

function startHeroCycle() {
  paintHero(heroIndex);
  setInterval(() => {
    heroIndex = (heroIndex + 1) % LANGUAGES.length;
    paintHero(heroIndex);
  }, 2600);
}

/* ════════════════════════════════════
   SESLİ OKUMA — Web Speech API
   ════════════════════════════════════ */
function speakPhrase(text, code, btn) {
  if (!('speechSynthesis' in window)) {
    if (btn) btn.title = 'Tarayıcın sesli okumayı desteklemiyor';
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = code || 'tr-TR';
  utter.rate = 0.92;
  if (btn) {
    btn.classList.add('speaking');
    utter.onend = () => btn.classList.remove('speaking');
    utter.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(utter);
}

function wireSpeechButtons() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.speak-btn');
    if (!btn) return;
    e.stopPropagation();
    const text = btn.dataset.text || document.getElementById('hero-phrase').dataset.text;
    const code = btn.dataset.code || document.getElementById('hero-phrase').dataset.code;
    speakPhrase(text, code, btn);
  });
}

/* ════════════════════════════════════
   3D CAROUSEL (CSS transform ring)
   ════════════════════════════════════ */
function buildCarousel() {
  const ring  = document.getElementById('ring');
  const count = CAROUSEL_LANGS.length;
  const angleStep = 360 / count;

  const cardWidth = window.innerWidth < 600 ? 150 : 190;
  const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count));

  CAROUSEL_LANGS.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'ring-card';
    card.style.transform = `rotateY(${i * angleStep}deg) translateZ(${radius}px)`;
    card.innerHTML = `
      <button class="speak-btn" data-text="${item.native.replace(/"/g, '&quot;')}" data-code="${item.code}" title="Sesli dinle">🔊</button>
      <div class="ring-card-native">${item.native}</div>
      <div class="ring-card-lang">${item.lang}</div>
    `;
    ring.appendChild(card);
  });

  let rotation = 0;
  let autoSpeed = 0.05;
  let dragging = false;
  let lastX = 0;
  let velocity = 0;

  const stage = ring.parentElement;

  function frame() {
    if (!dragging) {
      rotation += autoSpeed + velocity;
      velocity *= 0.94;
    }
    ring.style.transform = `translateZ(-${radius}px) rotateY(${rotation}deg)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function pointerDown(x) {
    dragging = true;
    lastX = x;
    velocity = 0;
  }
  function pointerMove(x) {
    if (!dragging) return;
    const dx = x - lastX;
    rotation += dx * 0.3;
    velocity = dx * 0.3;
    lastX = x;
  }
  function pointerUp() { dragging = false; }

  stage.addEventListener('mousedown', e => pointerDown(e.clientX));
  window.addEventListener('mousemove', e => pointerMove(e.clientX));
  window.addEventListener('mouseup', pointerUp);

  stage.addEventListener('touchstart', e => pointerDown(e.touches[0].clientX), { passive: true });
  stage.addEventListener('touchmove',  e => pointerMove(e.touches[0].clientX), { passive: true });
  stage.addEventListener('touchend', pointerUp);
}

/* ════════════════════════════════════
   FULL GRID
   ════════════════════════════════════ */
function buildGrid() {
  const grid = document.getElementById('lang-grid');
  LANGUAGES.forEach(item => {
    const cell = document.createElement('div');
    cell.className = 'lang-cell';
    cell.innerHTML = `
      <button class="speak-btn small" data-text="${item.native.replace(/"/g, '&quot;')}" data-code="${item.code}" title="Sesli dinle">🔊</button>
      <div class="lang-cell-native">${item.native}</div>
      ${item.translit ? `<div class="lang-cell-translit">${item.translit}</div>` : ``}
      <div class="lang-cell-name">${item.lang}</div>
    `;
    grid.appendChild(cell);
  });
}

/* ════════════════════════════════════
   BİRLİKTE GEÇEN ZAMAN
   ════════════════════════════════════ */
const TIME_KEY = 'seninle-guzel-baslangic';

function loadStartDate() {
  try {
    return localStorage.getItem(TIME_KEY);
  } catch (e) {
    return null;
  }
}

function saveStartDate(val) {
  try {
    localStorage.setItem(TIME_KEY, val);
  } catch (e) { /* sessiz geç */ }
}

function updateTimeTogether() {
  const stored = loadStartDate();
  const display = document.getElementById('time-display');
  const form    = document.getElementById('time-form');

  if (!stored) {
    display.hidden = true;
    form.hidden = false;
    return;
  }

  form.hidden = true;
  display.hidden = false;

  const start = new Date(stored);
  if (isNaN(start.getTime())) { form.hidden = false; display.hidden = true; return; }

  function tick() {
    const now = new Date();
    let diff = Math.max(0, now - start);

    const day = 86400000;
    const years = Math.floor(diff / (day * 365.25));
    diff -= years * day * 365.25;
    const days = Math.floor(diff / day);
    diff -= days * day;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const mins = Math.floor(diff / 60000);
    diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);

    document.getElementById('tt-y').textContent = years;
    document.getElementById('tt-d').textContent = days;
    document.getElementById('tt-h').textContent = String(hours).padStart(2, '0');
    document.getElementById('tt-m').textContent = String(mins).padStart(2, '0');
    document.getElementById('tt-s').textContent = String(secs).padStart(2, '0');
  }
  tick();
  clearInterval(window.__ttInterval);
  window.__ttInterval = setInterval(tick, 1000);
}

function wireTimeForm() {
  const form  = document.getElementById('time-form');
  const input = document.getElementById('time-input');
  const btn   = document.getElementById('time-save');
  const reset = document.getElementById('time-reset');

  btn.addEventListener('click', () => {
    if (!input.value) return;
    saveStartDate(input.value);
    updateTimeTogether();
  });

  reset.addEventListener('click', () => {
    try { localStorage.removeItem(TIME_KEY); } catch (e) {}
    clearInterval(window.__ttInterval);
    updateTimeTogether();
  });
}

/* ════════════════════════════════════
   SANA ÖZEL SÜRPRİZ NOT
   ════════════════════════════════════ */
let lastNoteIndex = -1;

function revealSweetNote(btn) {
  let i = Math.floor(Math.random() * SWEET_NOTES.length);
  if (i === lastNoteIndex) i = (i + 1) % SWEET_NOTES.length;
  lastNoteIndex = i;

  const noteEl = document.getElementById('sweet-note');
  gsap.to(noteEl, {
    opacity: 0, y: 10, duration: 0.25, ease: 'power2.in',
    onComplete: () => {
      noteEl.textContent = SWEET_NOTES[i];
      noteEl.hidden = false;
      gsap.fromTo(noteEl, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    }
  });

  const rect = btn.getBoundingClientRect();
  burstHearts(rect.left + rect.width / 2, rect.top);
}

/* ════════════════════════════════════
   CLICK / BURST HEARTS
   ════════════════════════════════════ */
const HEARTS = ['♡', '♥', '✦', '·', '✧', '❋'];

function spawnHeart(x, y, delay) {
  const el = document.createElement('span');
  el.className = 'float-heart';
  const angle = Math.random() * 80 - 40;
  el.style.cssText = `left:${x + Math.cos(angle) * 10}px;top:${y}px;color:${Math.random() > .5 ? '#d4a0b5' : 'rgba(255,255,255,0.6)'};`;
  el.style.animationDelay = `${delay}s`;
  el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function burstHearts(x, y, count = 10) {
  for (let i = 0; i < count; i++) spawnHeart(x, y, i * 0.05);
}

document.addEventListener('click', e => {
  if (e.target.closest('.speak-btn') || e.target.closest('#note-btn')) return;
  burstHearts(e.clientX, e.clientY, 5);
});

/* ════════════════════════════════════
   THREE.JS SCENE — AMBIENT BACKGROUND
   ════════════════════════════════════ */
(function initThree() {
  const canvas   = document.getElementById('three-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 32;

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  function makeStars(count, spread, size, opacity, col) {
    const geo = new THREE.BufferGeometry();
    const p   = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3]     = (Math.random() - 0.5) * spread;
      p[i * 3 + 1] = (Math.random() - 0.5) * spread;
      p[i * 3 + 2] = (Math.random() - 0.5) * (spread * 0.5) - 5;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    return new THREE.Points(geo, new THREE.PointsMaterial({ color: col, size, transparent: true, opacity, sizeAttenuation: true }));
  }

  const starsMain = makeStars(2200, 140, 0.13, 0.75, 0xffffff);
  const starsDim  = makeStars(800,  160, 0.09, 0.35, 0xffeef4);
  const starsPink = makeStars(180,  100, 0.18, 0.55, 0xd4a0b5);
  scene.add(starsMain, starsDim, starsPink);

  function makeHeart(scale, x, y, z, opacity) {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.4 * scale);
    shape.bezierCurveTo(0, 0.6 * scale, -0.45 * scale, 0.6 * scale, -0.45 * scale, 0.2 * scale);
    shape.bezierCurveTo(-0.45 * scale, -0.1 * scale, 0, -0.35 * scale, 0, -0.55 * scale);
    shape.bezierCurveTo(0, -0.35 * scale, 0.45 * scale, -0.1 * scale, 0.45 * scale, 0.2 * scale);
    shape.bezierCurveTo(0.45 * scale, 0.6 * scale, 0, 0.6 * scale, 0, 0.4 * scale);

    const pts = shape.getPoints(60);
    const geo = new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(p.x, p.y, 0)));
    const line = new THREE.LineLoop(geo, new THREE.LineBasicMaterial({ color: 0xd4a0b5, transparent: true, opacity }));
    line.position.set(x, y, z);
    return line;
  }

  const heart1 = makeHeart(12, -14,  3, -18, 0.06);
  const heart2 = makeHeart( 7,  15, -6, -14, 0.05);
  const heart3 = makeHeart( 4,  -2,  9, -10, 0.09);
  scene.add(heart1, heart2, heart3);

  const orbs = [];
  for (let i = 0; i < 14; i++) {
    const r    = Math.random() * 0.35 + 0.08;
    const g    = new THREE.SphereGeometry(r, 6, 6);
    const m    = new THREE.MeshBasicMaterial({
      color:       i % 2 === 0 ? 0xd4a0b5 : 0xffffff,
      transparent: true,
      opacity:     Math.random() * 0.18 + 0.04,
      wireframe:   true,
    });
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(
      (Math.random() - 0.5) * 44,
      (Math.random() - 0.5) * 44,
      (Math.random() - 0.5) * 18 - 4
    );
    mesh.userData = {
      vy:    (Math.random() - 0.5) * 0.006,
      vx:    (Math.random() - 0.5) * 0.004,
      phase: Math.random() * Math.PI * 2,
    };
    scene.add(mesh);
    orbs.push(mesh);
  }

  /* ── ŞUAN GEÇEN YILDIZ KAYMASI (shooting star), rastgele aralıklarla ── */
  function spawnShootingStar() {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(-2.2, 0.9, 0)
    ]);
    const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    const line = new THREE.Line(geo, mat);
    const startX = (Math.random() - 0.5) * 50 + 15;
    const startY = (Math.random() * 10) + 10;
    line.position.set(startX, startY, -6 + Math.random() * -6);
    scene.add(line);

    const duration = 900 + Math.random() * 400;
    const startTime = performance.now();
    function animateStar(now) {
      const p = (now - startTime) / duration;
      if (p >= 1) { scene.remove(line); return; }
      line.position.x = startX - p * 26;
      line.position.y = startY - p * 14;
      mat.opacity = 0.9 * (1 - p);
      requestAnimationFrame(animateStar);
    }
    requestAnimationFrame(animateStar);

    setTimeout(spawnShootingStar, 4000 + Math.random() * 6000);
  }
  setTimeout(spawnShootingStar, 3000);

  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;

    starsMain.rotation.y =  t * 0.025;
    starsMain.rotation.x =  t * 0.008;
    starsDim.rotation.y  = -t * 0.018;
    starsPink.rotation.y =  t * 0.04;
    starsPink.rotation.z =  t * 0.012;

    heart1.rotation.z    = Math.sin(t * 0.3) * 0.04;
    heart1.position.y    = 3  + Math.sin(t * 0.4) * 0.8;
    heart2.rotation.z    = -Math.sin(t * 0.25) * 0.03;
    heart2.position.y    = -6 + Math.cos(t * 0.35) * 0.6;
    heart3.rotation.z    = Math.sin(t * 0.5) * 0.06;
    heart3.position.y    = 9  + Math.sin(t * 0.45) * 0.5;

    heart1.material.opacity = 0.05 + Math.sin(t * 0.7) * 0.025;
    heart3.material.opacity = 0.07 + Math.sin(t * 0.9) * 0.03;

    orbs.forEach(o => {
      o.position.x += o.userData.vx;
      o.position.y += o.userData.vy + Math.sin(t * 0.8 + o.userData.phase) * 0.004;
      if (Math.abs(o.position.x) > 24) o.userData.vx *= -1;
      if (Math.abs(o.position.y) > 24) o.userData.vy *= -1;
    });

    camera.position.x += (mx * 2.5 - camera.position.x) * 0.03;
    camera.position.y += (-my * 1.8 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();
})();

/* ════════════════════════════════════
   GSAP SCROLL REVEALS
   ════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  gsap.to('#hdr', { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.2 });

  ['#div-time', '#time-card', '#div1', '#carousel-card', '#div2', '#grid-card', '#div3', '#note-card', '#ftr'].forEach((sel, i) => {
    gsap.to(sel, {
      scrollTrigger: { trigger: sel, start: 'top 88%' },
      opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: i * 0.04,
    });
  });
});

/* ════════════════════════════════════
   INIT
   ════════════════════════════════════ */
buildHeroDots();
startHeroCycle();
wireSpeechButtons();
buildCarousel();
buildGrid();
wireTimeForm();
updateTimeTogether();

document.getElementById('note-btn').addEventListener('click', e => revealSweetNote(e.currentTarget));
