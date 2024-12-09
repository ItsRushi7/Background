
let Start = document.getElementById('Start');
let Stop = document.getElementById('Stop');

function chengeColor() {
    let hex = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

let Run = null;

Start.addEventListener('click', () => {
    Run = setInterval(() => {
        document.body.style.backgroundColor = chengeColor();
    }, 1000);
});

Stop.addEventListener('click', () => {
    clearInterval(Run);
    Run = null;
    document.body.style.backgroundColor = "#2f2f2f";
});
