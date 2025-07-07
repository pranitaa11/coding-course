import { auth } from './firebase.js';
import {
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js';

const abcEl = document.getElementById('abc');

onAuthStateChanged(auth, user => {
  abcEl.innerText = user.displayName;
  console.log(user.displayName);
});

