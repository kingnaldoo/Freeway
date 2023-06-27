class UI {
    draw() {
        // calçadas
        const DIST_FROM_EDGE = World.canvas.height / 8;
        colorRect(0, 0, World.canvas.width, DIST_FROM_EDGE, '#A8A8A8');
        colorRect(0, World.canvas.height - DIST_FROM_EDGE, World.canvas.width, DIST_FROM_EDGE, '#A8A8A8');

        // estradas

        for (let i = 2; i < 7; i++) {
            if (i == 4) {
                colorRect(0, (DIST_FROM_EDGE * i) - 2, World.canvas.width, 2, '#D8DD97');
                colorRect(0, (DIST_FROM_EDGE * i) + 2, World.canvas.width, 2, '#D8DD97');
            } else {
                colorRect(0, DIST_FROM_EDGE * i, World.canvas.width, 2, '#B9B9B9');
            }

            for (let j = 0; j < 9; j++) {
                colorRect(j * DIST_FROM_EDGE, DIST_FROM_EDGE, 5, World.canvas.height - DIST_FROM_EDGE * 2, '#888888');
            }

        }
    }

    move(deltaTime) {

    }
}