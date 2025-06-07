// script.js
import { db, ref, onValue } from './firebase.js';

// Referencias a las rutas en la base de datos
const tempRef = ref(db, "Sensores/Temp_data");
const humARef = ref(db, "Sensores/HumA");
const humSRef = ref(db, "Sensores/HumS_data");
const luzRef = ref(db, "Sensores/Luz_data");

// Lectura en tiempo real
onValue(tempRef, (snapshot) => {
  const temp = snapshot.val();
  console.log("🌡️ Temperatura:", temp, "°C");
});

onValue(humARef, (snapshot) => {
  const humA = snapshot.val();
  console.log("💧 Humedad Aire:", humA, "%");
});

onValue(humSRef, (snapshot) => {
  const humS = snapshot.val();
  console.log("🌱 Humedad Suelo:", humS, "%");
});

onValue(luzRef, (snapshot) => {
  const luz = snapshot.val();
  console.log("💡 Luz:", luz, "%");
});
