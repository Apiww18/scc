/* ======================
   PAGE & MUSIC
====================== */

const pages = document.querySelectorAll('.page');
const music = document.getElementById('music');

let index = 0;

/* TAMPILKAN HALAMAN */
function showPage(i) {
    pages.forEach(p => p.classList.remove('active'));
    pages[i].classList.add('active');
}

/* ======================
   AUTOPLAY MUSIC (AMAN)
====================== */
function enableSound() {
    if (music && music.muted) {
        music.muted = false;
        music.volume = 0.4;
        music.play().catch(() => {});
    }
}

document.addEventListener('click', enableSound, { once: true });
document.addEventListener('touchstart', enableSound, { once: true });

/* ======================
   BUTTON NEXT (KLIK HP)
====================== */
document.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', () => {
        if (index < pages.length - 1) {
            index++;
            showPage(index);
        }
    });
});

/* ======================
   TAP HALAMAN (OPSIONAL)
====================== */
pages.forEach(page => {
    page.addEventListener('click', e => {
        if (!e.target.classList.contains('next')) {
            if (index < pages.length - 1) {
                index++;
                showPage(index);
            }
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
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 60 && index < pages.length - 1) {
        index++;
        showPage(index);
    }
});

/* ======================
   🌷🌼❤✨ ANIMASI
====================== */
const flowerBox = document.querySelector('.flowers');
const heartBox = document.querySelector('.hearts');
const glitterBox = document.querySelector('.glitters');

function createFlower() {
    const el = document.createElement('div');
    el.className = 'flower';
    el.innerHTML = Math.random() > 0.5 ? '🌷' : '🌼';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = 16 + Math.random() * 14 + 'px';
    el.style.animationDuration = 6 + Math.random() * 6 + 's';
    flowerBox.appendChild(el);
    setTimeout(() => el.remove(), 12000);
}

function createHeart() {
    const el = document.createElement('div');
    el.className = 'heart';
    el.innerHTML = '❤';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = 12 + Math.random() * 14 + 'px';
    el.style.animationDuration = 5 + Math.random() * 5 + 's';
    heartBox.appendChild(el);
    setTimeout(() => el.remove(), 10000);
}

function createGlitter() {
    const el = document.createElement('div');
    el.className = 'glitter';
    el.innerHTML = '✨';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = Math.random() * 100 + 'vh';
    el.style.fontSize = 10 + Math.random() * 10 + 'px';
    el.style.animationDuration = 2 + Math.random() * 3 + 's';
    glitterBox.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}

setInterval(createFlower, 800);
setInterval(createHeart, 900);
setInterval(createGlitter, 300);

/* INIT */
showPage(0);