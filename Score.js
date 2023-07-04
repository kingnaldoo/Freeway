class Score {
    constructor(score = 0, x = 10, y = 30) {
        this.score = score;
        this.x = x;
        this.y = y;
    }

    draw() {
        World.canvasContext.font = "30px Arial";
        World.canvasContext.fillStyle = "black";
        World.canvasContext.fillText(this.score, this.x, this.y);
    }

    move() {

    }

    increment(playerPosY) {
        if (playerPosY <= 25) {
            this.score++;
        }

    }
}