import { useState } from 'react';
import '../styles/register.css';
import { Link } from "react-router-dom";
import axios from 'axios'



function RegisterPage () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleUsername(e)
    {
        let name = e.target.value;
        setUsername(name);
    }

    function handlePassword(e)
    {
        let pw = e.target.value;
        setPassword(pw);
    }

    function handleConfirmPassword(e)
    {
        let cpw = e.target.value;
        setConfirmPassword(cpw);
    }

    function handleSubmit()
    {
        console.log(username, password, confirmPassword);
    }

    return (
        <div className='register-container'>
            <div className='register-box'>
                <h1 className='register_h1'>Register</h1>
                <input type="text" className='input_box' placeholder='Username' value={username} onChange={handleUsername}></input>
                <input type="password" className='input_box' placeholder='Password' value={password} onChange={handlePassword}></input>
                <input type="password" className='input_box' placeholder='Confirm password' value={confirmPassword} onChange={handleConfirmPassword}></input>
                <Link className='register_button' to='/register' onClick={handleSubmit}>REGISTER</Link>
                <p className='register_p'>Member Login</p>
            </div>
        </div>
    );
};

export default RegisterPage;

