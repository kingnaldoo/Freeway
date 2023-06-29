class Car {
    constructor(physics = null, posX = 0, posY = 0, width = 50, height = 50, speedX = 0.2, color = 'red') {
        this.physics = physics;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.color = color;
    }

    draw() {
        colorRect(this.posX, this.posY, this.width, this.height, this.color);
    }

    move(world, deltaTime) {
        if (this.physics)
            this.physics.move(this, world, deltaTime);
    }
}