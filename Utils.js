function colorRect(leftX, topY, width, height, drawColor) {
    World.canvasContext.fillStyle = drawColor;
    World.canvasContext.fillRect(leftX, topY, width, height)
}

function colorCircle(centerX, centerY, radius, drawColor) {
    World.canvasContext.fillStyle = drawColor;
    World.canvasContext.beginPath();
    World.canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    World.canvasContext.fill();
}

function colorText(showWords, textX, textY, fillColor) {
    World.canvasContext.fillStyle = fillColor;
    World.canvasContext.fillText(showWords, textX, textY);
}

function generateRandomNumbers(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomColors() {
    var corHexadecimal = '#';

    for (var i = 0; i < 6; i++) {
        var componente = Math.floor(Math.random() * 16).toString(16);
        corHexadecimal += componente;
    }

    return corHexadecimal;
}