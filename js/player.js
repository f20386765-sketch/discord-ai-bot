class Player {
    constructor() {
        this.x = 100;
        this.y = 175; // Centralizado na altura do canvas
        this.w = 50;
        this.h = 50;
        this.speed = 7;
        
        // --- EU JÁ BUSQUEI E COLOQUEI A IMAGEM AQUI ---
        this.sprite = new Image();
        this.sprite.src = 'https://i.imgur.com/G5M1M5X.png'; // Link direto da imagem da nave
    }

    draw(ctx) {
        if (this.sprite.complete) {
            ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
        } else {
            // Reserva caso a internet falhe
            ctx.fillStyle = "#00FF00"; 
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    move(key) {
        // Movimentação básica
        if (key === "ArrowUp" && this.y > 0) this.y -= this.speed;
        if (key === "ArrowDown" && this.y < canvas.height - this.h) this.y += this.speed;
        if (key === "ArrowLeft" && this.x > 0) this.x -= this.speed;
        if (key === "ArrowRight" && this.x < canvas.width - this.w) this.x += this.speed;
    }
}
