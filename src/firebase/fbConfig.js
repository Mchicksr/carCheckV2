// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx6zAd0_PVTK4iW3OUc0fHJS_e6GyhAms",
  authDomain: "parksmartfl-c5211.firebaseapp.com",
  databaseURL: "https://parksmartfl-c5211-default-rtdb.firebaseio.com",
  projectId: "parksmartfl-c5211",
  storageBucket: "parksmartfl-c5211.appspot.com",
  messagingSenderId: "920991114671",
  appId: "1:920991114671:web:2cf35a91179529cb837b5a",
  measurementId: "G-SKH094HPPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
