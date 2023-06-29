class CarPhysics {
    move(car, world, deltaTime) {
        car.posX += car.speedX * deltaTime;

        // car loop
        if (car.posX > World.canvas.width) {
            car.posX = -car.width;
        } else if (car.posX < -car.width)
            car.posX = World.canvas.width;
    }
}