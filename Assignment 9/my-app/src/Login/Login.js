import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import './Login.css';

export default function LoginPage({...props}){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = async (e) =>{
    //   props.handle();
    //   navigate('/main');
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5005/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.user) {
        props.handle();
        navigate('/home');
    } else {
      console.log(email, password);
      alert("Email/Password is Incorrect! Please try again!");
    }
    }
    
    return(
        <div className='login-page'>
            <h1>Login Page</h1>
            <form>
                <label>
                    Username:
                    <input type="text" className="login-input" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" className="login-input" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br/>
                <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    )
}