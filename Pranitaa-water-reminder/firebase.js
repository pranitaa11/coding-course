import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js';
import {
	getAuth,
	GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js';
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js'

// Firebase config
const firebaseConfig = {
	apiKey: 'AIzaSyDscf26tX7nLwkJ68f9pN5oVzbxTaTaNpo',
	authDomain: 'water-reminder-app-4029e.firebaseapp.com',
	projectId: 'water-reminder-app-4029e',
	storageBucket: 'water-reminder-app-4029e.firebasestorage.app',
	messagingSenderId: '490001358119',
	appId: '1:490001358119:web:e32a452d59fae9c20e9d02',
	measurementId: 'G-1ZP32WXJMT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export for use in other modules
export { auth, provider, db };
