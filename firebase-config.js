import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCMHPGluMSjKLXOc-td9Rtex-_dyoa66GU",
    authDomain: "freeway-381c1.firebaseapp.com",
    projectId: "freeway-381c1",
    storageBucket: "freeway-381c1.appspot.com",
    messagingSenderId: "1044939772265",
    appId: "1:1044939772265:web:79fbaeeec79970535b2df8"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, collection, getDoc, doc, setDoc };