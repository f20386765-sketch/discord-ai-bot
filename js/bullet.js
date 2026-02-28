class Bullet {
    constructor(x, y) {
        this.x = x + 50; // Sai da frente da nave
        this.y = y + 22; // Sai do meio da nave
        this.w = 15;
        this.h = 4;
        this.speed = 10;
    }

    update() {
        this.x += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = "#ffff00"; // Cor amarela neon
        ctx.shadowBlur = 10;
        ctx.shadowColor = "yellow";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.shadowBlur = 0; // Reseta o brilho para não afetar outros desenhos
    }
}
