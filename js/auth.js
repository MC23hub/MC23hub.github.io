// js/auth.js
import { auth, db } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ── Login / Logout ──────────────────────────────────────────────────────────

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logoutUser() {
  return signOut(auth);
}

// ── User data from Firestore ────────────────────────────────────────────────

export async function getUserData(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : {};
}

// ── Auth state listener ─────────────────────────────────────────────────────

export function onAuthChange(callback) {
  onAuthStateChanged(auth, callback);
}

// ── Navbar injection ────────────────────────────────────────────────────────
// Runs automatically on every page that imports this module.

onAuthStateChanged(auth, async user => {
  const container = document.getElementById('nav-auth');
  if (!container) return;

  if (user) {
    const data = await getUserData(user.uid);
    const uuid = data.minecraftUUID || '';
    const imgSrc = uuid
      ? `https://minotar.net/helm/${uuid}/32`
      : 'https://minotar.net/helm/MHF_Steve/32';

    container.innerHTML = `
      <a href="/members.html" class="nav-member-btn">
        <img src="${imgSrc}" alt="Your Minecraft head" class="nav-mc-head" />
      </a>
    `;
  } else {
    container.innerHTML = `<a href="/login.html" class="btn nav-login-btn">Logga In</a>`;
  }
});
