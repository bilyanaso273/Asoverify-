// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl9-DJ_o-OxusWUDCN3L_Xf_HTdi9DI9c",
  authDomain: "asoverify.firebaseapp.com",
  projectId: "asoverify",
  storageBucket: "asoverify.firebasestorage.app",
  messagingSenderId: "977761060590",
  appId: "1:977761060590:web:e064e1a3e3e43edfa895ff",
  measurementId: "G-MY3EXX16JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = email.value;
    const password = password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        document.getElementById("loginStatus").innerText = "Login failed!";
      });
  });
}