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