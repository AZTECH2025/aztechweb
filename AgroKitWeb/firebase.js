// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9iRact7Iul8uzw98U5IXqcOp3NbdMgjQ",
  authDomain: "agrokit-2025.firebaseapp.com",
  databaseURL: "https://agrokit-2025-default-rtdb.firebaseio.com",
  projectId: "agrokit-2025",
  storageBucket: "agrokit-2025.firebasestorage.app",
  messagingSenderId: "1059070535464",
  appId: "1:1059070535464:web:6a5989e95d6d4c296dd21d"
};

// Inicializa Firebase y la base de datos
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue };
