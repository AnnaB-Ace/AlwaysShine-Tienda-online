import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAZIcgpHTASZ3U9teF-gYciO3uMOoIGQt0",
  authDomain: "tienda-dfc0d.firebaseapp.com",
  projectId: "tienda-dfc0d",
  storageBucket: "tienda-dfc0d.appspot.com",
  messagingSenderId: "1076678459287",
  appId: "1:1076678459287:web:f637b9979230d8b5234ed2",
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
