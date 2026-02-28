let bullets = [];

// ... dentro do gameLoop ...
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);

    // Gerenciar Balas
    bullets.forEach((bullet, bIndex) => {
        bullet.update();
        bullet.draw(ctx);
        if (bullet.x > canvas.width) bullets.splice(bIndex, 1);
    });

    // Gerenciar Inimigos e Colisões com Balas
    enemies.forEach((enemy, eIndex) => {
        enemy.update();
        enemy.draw(ctx);

        // Colisão Bala vs Meteoro
        bullets.forEach((bullet, bIndex) => {
            if (checkCollision(bullet, enemy)) {
                sounds.explosion.play(); // Toca som de explosão
                enemies.splice(eIndex, 1);
                bullets.splice(bIndex, 1);
            }
        });

        // Colisão Jogador vs Meteoro
        if (checkCollision(player, enemy)) {
            alert("FIM DE JOGO!");
            document.location.reload();
        }
    });

    frames++;
    requestAnimationFrame(gameLoop);
}

// Evento para Atirar
window.addEventListener("keydown", (e) => {
    player.move(e.key);
    if (e.code === "Space") {
        bullets.push(new Bullet(player.x, player.y));
        sounds.laser.play(); // Toca som de laser
    }
});
