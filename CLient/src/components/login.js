import { useState,useEffect } from 'react';
import '../styles/login.css'
import axios from 'axios'


function LoginPage () {

    const [userDetails, setUserDetails] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [errorPop, setErrorPop] = useState(true);

    useEffect(() => {
        fetch('https://to-do-apis-app.herokuapp.com/register')
            .then(response => response.json())
            .then(data => setUserDetails(data.message))          
    },[]);

    function handleSubmit()
    {
        let exists = true;

            for(let i=0; i<userDetails.length; i++)
            {
                if(userDetails[i].user_name === username)
                {
                    exists = false;
                }
            }

            console.log(exists);
        if(exists === false)
        {
            const func = async () => {

                let userObj = {"user_name" : username, "password" : password};
                console.log(userObj);
                const res = await axios.post('https://to-do-apis-app.herokuapp.com/login',userObj)
                            .then(response => {
                                setError(response);
                            })
                            .catch(error => {
                                console.log(error);
                            });
            }

            func();

            console.log(error.data.token);

            if(error.data.token)
            {
                errorPop(true);
            }
            else
            {
                errorPop(false);
            }
        }
    }

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

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1 className='login_h1'>Login</h1>
                <input type="text" className='input_box' placeholder='Username' value={username} onChange={handleUsername}></input>
                <input type="password" className='input_box' placeholder='Password' value={password} onChange={handlePassword}></input>
                <button className='login_button' onClick={handleSubmit}>LOGIN</button>
                <p className='login_p'>Forgot password ?</p>
            </div>
        </div>
    );
};

export default LoginPage;

