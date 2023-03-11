import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjYOhlf9BYYdj0xdS8i1miL4HVXoFi9zw",
  authDomain: "react-blog-3d5af.firebaseapp.com",
  projectId: "react-blog-3d5af",
  storageBucket: "react-blog-3d5af.appspot.com",
  messagingSenderId: "500698307107",
  appId: "1:500698307107:web:9f1213116d341550862f96",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
