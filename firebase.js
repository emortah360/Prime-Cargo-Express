// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZZcDX0nL91_QWygYXnkPuLKMV2vsWe84",
    authDomain: "zendropper-6a55e.firebaseapp.com",
    projectId: "zendropper-6a55e",
    storageBucket: "zendropper-6a55e.firebasestorage.app",
    messagingSenderId: "616294493166",
    appId: "1:616294493166:web:6545170b07583152b6bcff",
    measurementId: "G-77GZWXXEPE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);