// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdSlkV0fbdj8g3It7BktK03r18iXYgtjU",
  authDomain: "fireshoes-946d0.firebaseapp.com",
  projectId: "fireshoes-946d0",
  storageBucket: "fireshoes-946d0.appspot.com",
  messagingSenderId: "131913403479",
  appId: "1:131913403479:web:8078da6aef603fcf4ba712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);