class World {
    static canvas;
    static canvasContext;

    constructor() {
        //variables for game loop
        this.lag = 0;
        this.lastFrameTimeMs = 0;
        this.maxFPS = 60;
        this.timeStep = 1000 / this.maxFPS;

        //entities
        this.uiSystem = new UI();
        this.carPhysics = new CarPhysics();
        this.car = new Car(this.carPhysics);


        this.entities = [this.uiSystem, this.car];


        World.canvas = document.getElementById('gameCanvas');
        World.canvasContext = World.canvas.getContext('2d');
        requestAnimationFrame(this.mainLoop.bind(this));
        this.draw();
    }

    mainLoop(timeStamp) {
        // max FPS control
        if (timeStamp < this.lastFrameTimeMs + this.timeStep) {
            requestAnimationFrame(this.mainLoop.bind(this));
            return;
        }

        //pattern game loop
        this.lag += timeStamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timeStamp;

        while (this.lag >= this.timeStep) {
            this.move(this.timeStep);
            this.lag -= this.timeStep;
        }
        this.draw();
        requestAnimationFrame(this.mainLoop.bind(this));
    }

    move(deltaTime) {
        for (var i = 0; i < this.entities.length; i++)
            this.entities[i].move(this, deltaTime);
    }

    draw() {
        // background
        colorRect(0, 0, World.canvas.width, World.canvas.height, '#888888');

        for (var i = 0; i < this.entities.length; i++)
            this.entities[i].draw();
    }
}