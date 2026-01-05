const pages = document.querySelectorAll('.page');
const music = document.getElementById('music');

let index = 0;
let musicStarted = false;

/* ======================
   PUTAR MUSIK (SETELAH INTERAKSI)
====================== */
function playMusic() {
  if (!musicStarted && music) {
    music.volume = 0.4;
    music.play().catch(() => {});
    musicStarted = true;
  }
}

/* ======================
   TAMPIL HALAMAN
====================== */
function showPage(i) {
  pages.forEach(p => p.classList.remove('active'));
  pages[i].classList.add('active');
}

/* ======================
   TOMBOL NEXT
====================== */
document.querySelectorAll('.next').forEach(btn => {
  btn.addEventListener('click', () => {
    playMusic(); // 🔊 musik mulai saat tombol ditekan

    if (index < pages.length - 1) {
      index++;
      showPage(index);
    }
  });
});

/* ======================
   SWIPE MOBILE
====================== */
let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;

  if (startX - endX > 60 && index < pages.length - 1) {
    playMusic(); // 🔊 swipe juga memicu musik
    index++;
    showPage(index);
  }
});

/* ======================
   TAP LAYAR KANAN = LANJUT
====================== */
pages.forEach(page => {
  page.addEventListener('click', e => {
    if (e.target.closest('button')) return;

    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (x > window.innerWidth / 2 && index < pages.length - 1) {
      playMusic(); // 🔊 tap juga memicu musik
      index++;
      showPage(index);
    }
  });
});

/* ======================
   HALAMAN AWAL
====================== */
showPage(0);

