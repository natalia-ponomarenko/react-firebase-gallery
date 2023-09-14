// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8KV1bNTZ6FhkVcFY3ClYrOn_8WMrTLt4",
  authDomain: "firestock-ab46f.firebaseapp.com",
  projectId: "firestock-ab46f",
  storageBucket: "firestock-ab46f.appspot.com",
  messagingSenderId: "210563609880",
  appId: "1:210563609880:web:bca7040bb21014dd441a6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
