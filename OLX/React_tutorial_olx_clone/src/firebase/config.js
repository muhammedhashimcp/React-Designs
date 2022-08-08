import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
import "firebase/firestore";




const firebaseConfig = {
	apiKey: "AIzaSyCjcCF-ZKJtPMBkd8mYi2TQL46DG0qVMRo",
	authDomain: "webapp-22571.firebaseapp.com",
	projectId: "webapp-22571",
	storageBucket: "webapp-22571.appspot.com",
	messagingSenderId: "673753871050",
	appId: "1:673753871050:web:4a8679bb7bc5b870167a33",
	measurementId: "G-EXB5DY6EE1"
};
export default firebase.initializeApp(firebaseConfig)