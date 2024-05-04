// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-estate-9e34a.firebaseapp.com",
	projectId: "mern-estate-9e34a",
	storageBucket: "mern-estate-9e34a.appspot.com",
	messagingSenderId: "721658782835",
	appId: "1:721658782835:web:d4130f938512d5ee8f3606",
	measurementId: "G-D2H4LCDV1C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
