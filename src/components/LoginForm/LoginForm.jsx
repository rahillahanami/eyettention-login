import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { React, useState } from 'react';
import { initializeApp } from "firebase/app";



const LoginForm = () => {

    // CEK 1
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const firebaseConfig = {
        apiKey: "AIzaSyCdmzfCYoo_w26KZnZOROhIWPkFr309oPE",
        authDomain: "eyettention-55478.firebaseapp.com",
        projectId: "eyettention-55478",
        storageBucket: "eyettention-55478.appspot.com",
        messagingSenderId: "810747446548",
        appId: "1:810747446548:web:ddf711ea3c36f0475aae01",
        measurementId: "G-P809EKKBNX"
      };
    //



    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    async function login(){
        login = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("login");
          console.log("selamat bergabnung")
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          alert("tolol")
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }

    



    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' value={email} 
                        onChange={(e) => setEmail(e.target.value)} required/>
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' value={password} 
                        onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className='icon'/>
                </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            </form>
            
            <button onClick={login}>Login</button>


        </div>
    )
}

export default LoginForm