import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAl9-DJ_o-OxusWUDCN3L_Xf_HTdi9DI9c",
  authDomain: "asoverify.firebaseapp.com",
  projectId: "asoverify",
  storageBucket: "asoverify.firebasestorage.app",
  messagingSenderId: "977761060590",
  appId: "1:977761060590:web:e064e1a3e3e43edfa895ff",
  measurementId: "G-MY3EXX16JT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export function checkAdminAccess(redirectIfNotAdmin = true) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || docSnap.data().role !== "admin") {
      if (redirectIfNotAdmin) window.location.href = "unauthorized.html";
    }
  });
}