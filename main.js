const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

const player = new Player();
let enemies = [];
let frames = 0;

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenha o jogador
    player.draw(ctx);

    // Cria novos meteoros a cada 60 frames (aprox. 1 segundo)
    if (frames % 60 === 0) {
        enemies.push(new Enemy());
    }

    // Atualiza e desenha cada meteoro
    enemies.forEach((enemy, index) => {
        enemy.update();
        enemy.draw(ctx);

        // Remove meteoros que saíram da tela para não pesar o jogo
        if (enemy.x + enemy.w < 0) {
            enemies.splice(index, 1);
        }
    });

    frames++;
    requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (e) => player.move(e.key));
gameLoop();
