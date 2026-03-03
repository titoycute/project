import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyWJulSuH_3gUo76aiLoy5L8ly5tk0ypQ",
    authDomain: "appdev-80339.firebaseapp.com",
    projectId: "appdev-80339",
    storageBucket: "appdev-80339.firebasestorage.app",
    messagingSenderId: "213205773696",
    appId: "1:213205773696:web:aca615f3274ee11f09e565",
    measurementId: "G-802QG9LGE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);