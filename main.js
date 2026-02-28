const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

canvas.width = 800;
canvas.height = 400;

let score = 0;

function update() {
    // Aqui limparemos a tela e desenharemos o jogo
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenha um chão simples
    ctx.fillStyle = "#555";
    ctx.fillRect(0, 350, canvas.width, 50);

    // Placeholder para o jogador (que estaria em player.js)
    ctx.fillStyle = "lime";
    ctx.fillRect(50, 300, 50, 50);

    requestAnimationFrame(update);
}

update();
