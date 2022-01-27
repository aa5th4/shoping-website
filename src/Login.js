import React from 'react';
import { Link, useNavigate} from "react-router-dom";
import './Login.css';
import { useState } from 'react';
import {  auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            navigate('/') 
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
           .then((auth) => {
                if(auth) {
                    navigate('/')
                }
                console.log(auth);
            })
            .catch(error => alert(error.message))
    }



  return (
    <div className='login'>
    <Link to='/'>
        <img
            className="login__logo"
            src='https://img.search.brave.com/24PbN2Kvfb5-yKygvMbtv6ReqqOOM579g36Iy-VhmXA/rs:fit:580:386:1/g:ce/aHR0cHM6Ly93d3cu/Y3JlYXRpdmVmYWJy/aWNhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wMy9N/b25vZ3JhbS1TVy1M/b2dvLURlc2lnbi1i/eS1HcmVlbmxpbmVz/LVN0dWRpb3MtNTgw/eDM4Ni5qcGc' 
        />
    </Link>

    <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
        
            <h5>E-mail</h5>
            <input type='text' value={email} onChange = {e=> setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit' onClick={signIn} >Sign In</button>
        </form>

        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
    </div>
</div>
  );
}

export default Login;
