import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_login.png';
import email_icon from '../../images/Email.png';
import password_icon from '../../images/Password.png';
import register_icon from '../../images/Register_icon.png';

import '../../css/style.scss';
function Login() {
  return (
    <div className='auth'>
        <div className='form-box'>
            <div className='buttonbox'>
                <div id='btn'></div>
                <button type='button' className='toggle-btn'><Link to="/login">LOGIN</Link></button>
                <button type='button' className='toggle-btn'><Link to="/register">REGISTER</Link></button>
            </div>
        </div>
        <form className='input-group'>
            <input type='text' className='input-field' placeholder=' Enter Your Email Address' required/>
            <input type='password' className='input-field' placeholder=' Enter Your Password' required/>

                <div className='icon-field1'></div>
                    <div className='email-img'>
                        <img src={email_icon} alt="emai-icon"/>
                    </div> 
                <div className='icon-field2'></div>
                    <div className='password-img'>
                        <img src={password_icon} alt="password-icon"/>
                    </div> 
                
            <input type='checkbox' className='check-box'/><span>Remember Password</span><span><u>ForgetPassword</u></span>
        </form>

            <div className='login-img'>
                <img src={logo} alt="loginimg" />  
            </div>
            <div>
                <button type='submit' className='submit-btn'><Link to="/login">LOGIN</Link></button>

                <div>
                    <div id='arro'></div>  
                    <div  className='register-icon'>
                        <img src={register_icon} alt="register-icon" />
                    </div>         
                </div>          
            </div>       
    </div>
  )
}

export default Login