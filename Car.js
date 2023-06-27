class Car {
    constructor(physics = null, posX = 0, posY = 0, speedX = 0.2, color = 'red') {
        this.physics = physics;
        this.posX = posX;
        this.posY = posY;
        this.speedX = speedX;
        this.color = color;
    }

    draw() {
        const DIST_FROM_EDGE = World.canvas.height / 8;
        const CAR_WIDTH = DIST_FROM_EDGE;
        const CAR_HEIGHT = DIST_FROM_EDGE - 20;
        colorRect(this.posX, this.posY, CAR_WIDTH, CAR_HEIGHT, this.color);
    }

    move(world, deltaTime) {
        if (this.physics)
            this.physics.move(this, world, deltaTime);
    }
}