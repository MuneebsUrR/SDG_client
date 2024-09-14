// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfjozg3X8Ds-Zbma6fyBkH_zGqcJtKwEk",
  authDomain: "sdgproject-d78c3.firebaseapp.com",
  projectId: "sdgproject-d78c3",
  storageBucket: "sdgproject-d78c3.appspot.com",
  messagingSenderId: "153123325268",
  appId: "1:153123325268:web:2f9ef08da3449a898f34c1",
  measurementId: "G-T8M2XNY08J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
