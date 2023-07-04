class CarPhysics {
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
        var playerLeftEdgeX = player.posX - player.width / 2;
        var playerRightEdgeX = playerLeftEdgeX + player.width;
        var playerTopEdgeY = World.canvas.height - player.height - 50;
        var playerBottomEdgeY = playerTopEdgeY + player.height;

        if (car.posY > playerTopEdgeY &&
            car.posY < playerBottomEdgeY &&
            car.posX > playerLeftEdgeX &&
            car.posX < playerRightEdgeX) {
            console.log('collision');
        }
    }
}