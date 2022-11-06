import '../styles/login.css'


function LoginPage () {



    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1 className='login_h1'>Register</h1>
                <input type="text" className='input_box' placeholder='Username'></input>
                <input type="password" className='input_box' placeholder='Password'></input>
                <button className='login_button' to='/login'>LOGIN</button>
                <p className='login_p'>Forgot password ?</p>
            </div>
        </div>
    );
};

export default LoginPage;

