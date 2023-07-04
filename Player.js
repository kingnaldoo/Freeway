class Player {
    constructor(posY, width, height, color = "yellow") {
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        colorRect(World.canvas.width * 2 / 3, this.posY, this.width, this.height, this.color);
    }

    move(world, deltaTime) {
        this.posY = Input.y;
    }
}