class Score {
    constructor(id, score = 0, x = 10, y = 30) {
        this.id = id;
        this.score = score;
        this.x = x;
        this.y = y;

        setFirestore("users", id, {
            score: score
        })
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

            setFirestore("users", this.id, {
                score: this.score
            });
        }

    }
}