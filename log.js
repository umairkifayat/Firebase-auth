import { signInWithEmailAndPassword  } from  "https:www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";
const btn = document.querySelector('.form');
const email= document.querySelector('.email');
const password = document.querySelector('.password');

btn.addEventListener('click',(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    console.log(user);
    window.location = './home.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMesage = error.message;
    console.log(errorMesage);
      
    });
})  