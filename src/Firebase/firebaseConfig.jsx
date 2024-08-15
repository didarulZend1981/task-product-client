// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKK4OCb1WL_10Fl76rTGMYohD61yEyNao",
  authDomain: "task-product.firebaseapp.com",
  projectId: "task-product",
  storageBucket: "task-product.appspot.com",
  messagingSenderId: "733125946654",
  appId: "1:733125946654:web:dd6110533613396e90ad0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;