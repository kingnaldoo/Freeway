class CarPhysics extends Subject {
    constructor() {
        super()
    }

    move(car, world, deltaTime) {
        car.posX += car.speedX * deltaTime;

        // car loop
        if (car.posX > World.canvas.width) {
            car.posX = -car.width;
        } else if (car.posX < -car.width)
            car.posX = World.canvas.width;

        this.playerCollision(car, world.player);
    }

    playerCollision(car, player) {
        if (car.posX < player.posX + player.width &&
            car.posX + car.width > player.posX &&
            car.posY < player.posY + player.height &&
            car.posY + car.height > player.posY) {
            Input.y = 370;
            super.notify(EVENTS.PLAYER_RUN_OVER);
        }
    }
}