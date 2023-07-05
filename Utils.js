function generateId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    const id = `${timestamp}${randomNum}`;

    return id;
}

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

async function getFirestore(collectionName, docName) {
    const { firestore, getDoc, doc } = await import("./firebase-config.js");

    await getDoc(doc(firestore, collectionName, docName)).then((doc) => {
        return doc;
    });
}

async function setFirestore(collectionName, docName, data) {
    const { firestore, doc, setDoc } = await import("./firebase-config.js");

    const docRef = getFirestore(collectionName, docName);

    if (docRef.exists) {
        return await setDoc(doc(firestore, collectionName, docName), data);
    }

    await setDoc(doc(firestore, collectionName, docName), data);
}