import React from 'react';
import { Link } from 'react-router-dom';
import email_icon from '../../images/Email.png';
import password_icon from '../../images/Password.png';
import register_icon from '../../images/Register_icon.png';
import mobile_icon from '../../images/smartphone.png';
import name_icon from '../../images/id-card.png';

import '../../css/style.scss';

function Register() {
  return (
    <div className='reg_auth'>
        <div className='form-box'>
            <div className='buttonbox'>
                <div id='btn'></div>
                <button type='button' className='toggle-btn'><Link to="/login">LOGIN</Link></button>
                <button type='button' className='toggle-btn'><Link to="/register">REGISTER</Link></button>
            </div>
        </div>

        <form className='reg-input-group'>
        
            <input type='text' className='input-field' placeholder=' Full Name' required/>
            <input type='text' className='input-field' placeholder='Email Address' required/>
            <input type='number' className='input-field' placeholder='Phone Number' required/>
            <input type='password' className='input-field' placeholder='Password' required/>
            <input type='password' className='input-field' placeholder='Confirm Password' required/>
            <input type='number' className='input-field' placeholder='OTP Verification' required/>

                <div className='icon-field1'></div>
                    <div className='name-img'>
                        <img src={name_icon} alt="name-icon"/>
                    </div> 
                
                <div className='icon-field2'></div>
                    <div className='email-img'>
                        <img src={email_icon} alt="email-icon"/>
                    </div> 

                <div className='icon-field3'></div>
                    <div className='mobile-img'>
                        <img src={mobile_icon} alt="mobile-icon"/>
                    </div> 

                <div className='icon-field4'></div>
                    <div className='password-img3'>
                        <img src={password_icon} alt="passwoed-icon3"/>
                    </div> 
                <div className='icon-field5'></div>
                    <div className='password-img2'>
                        <img src={password_icon} alt="password-icon2"/>
                    </div>
                <div className='icon-field6'></div>
                    <div className='password-img1'>
                        <img src={password_icon} alt="password-icon1"/>
                    </div> 
                
        </form>
            <div>
                <button type='submit' className='submit-btn'> <Link to="/register">REGISTER</Link></button>
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

export default Register