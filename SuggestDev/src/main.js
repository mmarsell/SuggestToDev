import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const app = createApp(App)

app.use(router)

app.mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyA6DX7aw0p8kG9tnO2AfhGgxhV5deYpvRk",
  authDomain: "suggesttodev.firebaseapp.com",
  projectId: "suggesttodev",
  storageBucket: "suggesttodev.appspot.com",
  messagingSenderId: "205629876045",
  appId: "1:205629876045:web:6574171586c735d394f904",
  measurementId: "G-N60THR9FJT"
};

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);
