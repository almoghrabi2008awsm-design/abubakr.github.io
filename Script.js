function revealSurprise() {
    const content = document.getElementById('extra-content');
    content.classList.remove('hidden');
    document.getElementById('action-btn').style.display = 'none';
    
    // حساب الأيام (مثال: من تاريخ 1 يناير 2024)
    const startDate = new Date('2024-01-01'); 
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    document.getElementById('days-count').innerText = diffDays;
}

// كود بسيط لرسم قلوب تتساقط في الخلفية
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
function createHeart() {
    hearts.push({
        x: Math.random() * canvas.width,
        y: -20,
        size: Math.random() * 15 + 10,
        speed: Math.random() * 3 + 1
    });
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff4d6d';
    hearts.forEach((h, i) => {
        ctx.font = `${h.size}px Arial`;
        ctx.fillText('❤️', h.x, h.y);
        h.y += h.speed;
        if (h.y > canvas.height) hearts.splice(i, 1);
    });
    requestAnimationFrame(drawHearts);
}

setInterval(createHeart, 300);
drawHearts();

