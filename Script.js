// حساب الوقت منذ تاريخ التعارف
function updateTimer() {
    const startDate = new Date('2025-10-23T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    document.getElementById('timer').innerHTML = 
        `${days} يوم و ${hours} ساعة و ${minutes} دقيقة`;
}

setInterval(updateTimer, 1000);
updateTimer();

// ميزة زر "لا" الهارب
function moveButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// عند قبول العرض
function accepted() {
    document.querySelector('.proposal-box').style.display = 'none';
    document.getElementById('finalMessage').classList.remove('hidden');
    // إطلاق تأثير قلوب كثيفة
    setInterval(createHeart, 50);
}

// التحكم بالموسيقى
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicControl');
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸️ إيقاف الموسيقى";
    } else {
        music.pause();
        btn.innerHTML = "🔊 تشغيل الموسيقى";
    }
}

// رسم القلوب المتساقطة (خلفية)
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
function createHeart() {
    hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        opacity: Math.random()
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h, i) => {
        ctx.globalAlpha = h.opacity;
        ctx.font = h.size + 'px serif';
        ctx.fillText('❤️', h.x, h.y);
        h.y -= h.speed;
        if (h.y < -20) hearts.splice(i, 1);
    });
    requestAnimationFrame(draw);
}
setInterval(createHeart, 300);
draw();
