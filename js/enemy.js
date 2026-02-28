class Enemy {
    constructor() {
        this.w = 40;
        this.h = 40;
        this.x = canvas.width; // Começa fora da tela (direita)
        this.y = Math.random() * (canvas.height - this.h); // Altura aleatória
        this.speed = 3 + Math.random() * 4; // Velocidade aleatória

        // --- EU JÁ BUSQUEI E COLOQUEI A IMAGEM AQUI ---
        this.sprite = new Image();
        this.sprite.src = 'https://i.imgur.com/8Q0N6Wf.png'; // Link direto do meteoro
    }

    update() {
        this.x -= this.speed; // Move para a esquerda
    }

    draw(ctx) {
        if (this.sprite.complete) {
            ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
        } else {
            // Reserva caso a internet falhe
            ctx.fillStyle = "#FF4444"; 
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}
