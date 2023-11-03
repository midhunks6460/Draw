const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => {
    drawing = true;
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    context.beginPath();
});

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;

    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = 'black';

    context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
});
