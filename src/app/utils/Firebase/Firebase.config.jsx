import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAkVJ7EaY4i9cdmzU9ZnZ4WHxTXDeudB_8",
    authDomain: "nextjs-project-909dc.firebaseapp.com",
    projectId: "nextjs-project-909dc",
    storageBucket: "nextjs-project-909dc.appspot.com",
    messagingSenderId: "51734758308",
    appId: "1:51734758308:web:403807eece486640c2f731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;