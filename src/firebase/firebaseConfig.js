import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBvHT68BltwvRDgZRJcXN-bLdrr2qW7vTI",
	authDomain: "netflix-clone-60cb5.firebaseapp.com",
	projectId: "netflix-clone-60cb5",
	storageBucket: "netflix-clone-60cb5.appspot.com",
	messagingSenderId: "664886406664",
	appId: "1:664886406664:web:45a9211fc8043d1be12bbd",
	measurementId: "G-PC5HMKP3Q2",
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const auth = Firebase.auth();
const db = firebaseApp.firestore();
export { auth };
export default db;
