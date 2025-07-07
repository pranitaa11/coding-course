import { auth } from './firebase.js';
import {
	onAuthStateChanged,
	signOut,
} from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js';

const userName = document.getElementById('userName');

onAuthStateChanged(auth, user => {
	if (user) {
		userName.innerText = user.displayName;
	} else {
		window.location.href = 'index.html';
	}
});

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
	signOut(auth).then(() => {
		window.location.href = 'index.html';
	});
});
