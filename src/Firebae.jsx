import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJ1rVxlKIJGwA2IHchj1qYio4XwJbJ5aY",
  authDomain: "auth-dd164.firebaseapp.com",
  projectId: "auth-dd164",
  storageBucket: "auth-dd164.appspot.com",
  messagingSenderId: "434148212334",
  appId: "1:434148212334:web:6a6a337aa330406be4f07f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () =>{
  signInWithPopup(auth,provider)
  .then((result)=>{
    
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("profilePic",profilePic);
  })
  .catch((error)=>{
    console(error)
  })
}

export {auth,provider,signInWithGoogle};