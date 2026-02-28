class Player {
    constructor() {
        this.x = 100;
        this.y = 150;
        this.w = 50;
        this.h = 50;
        this.speed = 5;
    }

    draw(ctx) {
        ctx.fillStyle = "#00FF00"; // Quadrado verde por enquanto
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move(key) {
        if (key === "ArrowUp") this.y -= this.speed;
        if (key === "ArrowDown") this.y += this.speed;
        if (key === "ArrowLeft") this.x -= this.speed;
        if (key === "ArrowRight") this.x += this.speed;
    }
}
