import { auth, provider } from './firebase.js';
import {
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js';

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
	signInWithPopup(auth, provider)
		.then(result => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const user = result.user;
			console.log('user: ', user);
			// ✅ Optional: Redirect to dashboard
			window.location.href = 'onboarding.html';
		})
		.catch(error => {
			console.log('error: ', error);
			showToast('Login failed: ' + error.message, 'error');
		});
});
