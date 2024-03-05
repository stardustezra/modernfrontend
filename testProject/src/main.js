import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoSg7QcdUbKPx2qU0Mz-Oq_3_zHOoLsUU",
  authDomain: "fir-aef23.firebaseapp.com",
  projectId: "fir-aef23",
  storageBucket: "fir-aef23.appspot.com",
  messagingSenderId: "260906830996",
  appId: "1:260906830996:web:c2e8190d55141f43c5f881",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.use(createPinia());
app.use(router);

app.mount("#app");
