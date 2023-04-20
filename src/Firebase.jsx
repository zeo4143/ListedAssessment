import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxOWge7CzTrOFAp3nk8p3pZ49G29x6ads",
  authDomain: "admin-dashboard-7331d.firebaseapp.com",
  projectId: "admin-dashboard-7331d",
  storageBucket: "admin-dashboard-7331d.appspot.com",
  messagingSenderId: "478046208892",
  appId: "1:478046208892:web:c090f5ed4f4e0980a25af9",
  measurementId: "G-81FKVCVNQQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

 export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName
      const email = result.user.email
      const profilepic = result.user.photoURL
  })
  .catch((err) => {
    console.log(err);
  })

}