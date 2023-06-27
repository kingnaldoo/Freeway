class CarPhysics {
    move(car, world, deltaTime) {
        car.posX += car.speedX * deltaTime;

        // car loop
        if (car.posX > World.canvas.width) {
            car.posX = 0;
        }
    }
}