import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIRESTORE_APIKEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTHDOMAIN,
  projectId: "tienda-dfc0d",
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGINGSEDERID,
  appId: process.env.REACT_APP_FIRESTORE_APPID,
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
