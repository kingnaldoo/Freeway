class Player {
    constructor(posY, width, height, color = "yellow") {
        this.posX = 400 * 2 / 3;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        colorRect(this.posX, this.posY, this.width, this.height, this.color);
    }

    move(world, deltaTime) {
        this.posY = Input.y;
    }
}