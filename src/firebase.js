import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlswovn8KvwCJNt0NyWc3upUxDgpO6ZXM",
  authDomain: "enjoylist-5d5d9.firebaseapp.com",
  projectId: "enjoylist-5d5d9",
  storageBucket: "enjoylist-5d5d9.appspot.com",
  messagingSenderId: "716174567380",
  appId: "1:716174567380:web:d0041f8960be368d3c5841",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
