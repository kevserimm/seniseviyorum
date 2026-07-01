/* ============================================
   VERİ: Dünya dillerinde "Seni Seviyorum"
   ============================================ */
const LANGUAGES = [
  { lang: "Türkçe",     flag: "🇹🇷", phrase: "Seni Seviyorum" },
  { lang: "İngilizce",  flag: "🇬🇧", phrase: "I Love You" },
  { lang: "Fransızca",  flag: "🇫🇷", phrase: "Je t'aime" },
  { lang: "İspanyolca", flag: "🇪🇸", phrase: "Te Amo" },
  { lang: "İtalyanca",  flag: "🇮🇹", phrase: "Ti Amo" },
  { lang: "Almanca",    flag: "🇩🇪", phrase: "Ich Liebe Dich" },
  { lang: "Portekizce", flag: "🇵🇹", phrase: "Eu Te Amo" },
  { lang: "Rusça",      flag: "🇷🇺", phrase: "Ya Lyublyu Tebya" },
  { lang: "Japonca",    flag: "🇯🇵", phrase: "Aishiteru" },
  { lang: "Korece",     flag: "🇰🇷", phrase: "Saranghae" },
  { lang: "Çince",      flag: "🇨🇳", phrase: "Wǒ Ài Nǐ" },
  { lang: "Arapça",     flag: "🇸🇦", phrase: "Uhibbuka" },
  { lang: "Hintçe",     flag: "🇮🇳", phrase: "Main Tumse Pyaar Karta Hoon" },
  { lang: "Yunanca",    flag: "🇬🇷", phrase: "S'agapo" },
  { lang: "Lehçe",      flag: "🇵🇱", phrase: "Kocham Cię" },
  { lang: "İsveççe",    flag: "🇸🇪", phrase: "Jag Älskar Dig" },
  { lang: "Felemenkçe", flag: "🇳🇱", phrase: "Ik Hou Van Jou" },
  { lang: "Farsça",     flag: "🇮🇷", phrase: "Dooset Daram" },
  { lang: "Vietnamca",  flag: "🇻🇳", phrase: "Anh Yêu Em" },
  { lang: "Endonezce",  flag: "🇮🇩", phrase: "Aku Cinta Kamu" },
  { lang: "Swahili",    flag: "🇰🇪", phrase: "Nakupenda" },
  { lang: "İbranice",   flag: "🇮🇱", phrase: "Ani Ohev Otach" },
  { lang: "Fince",      flag: "🇫🇮", phrase: "Minä Rakastan Sinua" },
  { lang: "Ukraynaca",  flag: "🇺🇦", phrase: "Ya Tebe Kokhayu" },
];

/* ============================================
   ARKA PLAN: yıldızlar
   ============================================ */
function buildStars() {
  const wrap = document.getElementById("stars");
  const count = 90;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    s.style.width = s.style.height = (Math.random() * 2 + 1).toFixed(1) + "px";
    wrap.appendChild(s);
  }
}

/* ============================================
   ARKA PLAN: yükselen kalpler
   ============================================ */
function buildFloatingHearts() {
  const wrap = document.getElementById("floatingHearts");
  const symbols = ["❤", "♥", "💗"];
  const count = 16;
  for (let i = 0; i < count; i++) {
    const h = document.createElement("span");
    h.className = "fh";
    h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    h.style.left = Math.random() * 100 + "%";
    const duration = 9 + Math.random() * 10;
    h.style.animationDuration = duration.toFixed(1) + "s";
    h.style.animationDelay = (Math.random() * duration).toFixed(1) + "s";
    h.style.fontSize = (0.8 + Math.random() * 1.4).toFixed(2) + "rem";
    wrap.appendChild(h);
  }
}

/* ============================================
   3D DÖNEN KARUSEL
   ============================================ */
function buildCarousel() {
  const carousel = document.getElementById("carousel");
  const featured = LANGUAGES.slice(0, 10); // ilk 10 dil karuselde döner
  const radius = 320;
  const step = 360 / featured.length;

  featured.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "carousel-card";
    card.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`;
    card.innerHTML = `
      <span class="cc-phrase">${item.phrase}</span>
      <span class="cc-lang">${item.flag} ${item.lang}</span>
    `;
    carousel.appendChild(card);
  });

  return { carousel, step };
}

function setupCarouselControls(carousel, step) {
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let manualAngle = 0;
  let playing = true;

  function pauseAnimation() {
    if (playing) {
      const computed = getComputedStyle(carousel).transform;
      carousel.classList.add("paused");
      carousel.style.animation = "none";
      carousel.style.transform = computed === "none" ? "" : computed;
      playing = false;
      playBtn.textContent = "▶";
    }
  }

  function resumeAnimation() {
    carousel.style.animation = "";
    carousel.classList.remove("paused");
    carousel.style.transform = "";
    playing = true;
    playBtn.textContent = "⏸";
  }

  playBtn.addEventListener("click", () => {
    if (playing) {
      pauseAnimation();
    } else {
      resumeAnimation();
    }
  });

  nextBtn.addEventListener("click", () => {
    pauseAnimation();
    manualAngle -= step;
    carousel.style.transform = `rotateY(${manualAngle}deg)`;
  });

  prevBtn.addEventListener("click", () => {
    pauseAnimation();
    manualAngle += step;
    carousel.style.transform = `rotateY(${manualAngle}deg)`;
  });
}

/* ============================================
   TÜM DİLLER — FLIP KART IZGARASI
   ============================================ */
function buildGrid() {
  const grid = document.getElementById("langGrid");
  LANGUAGES.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="flip-face flip-front">
        <span class="fc-flag">${item.flag}</span>
        <span class="fc-lang">${item.lang}</span>
      </div>
      <div class="flip-face flip-back">
        <span class="fc-phrase">${item.phrase}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ============================================
   BAŞLAT
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  buildStars();
  buildFloatingHearts();
  const { carousel, step } = buildCarousel();
  setupCarouselControls(carousel, step);
  buildGrid();
});
