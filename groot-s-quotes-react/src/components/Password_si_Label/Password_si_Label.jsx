import React from 'react';
import './PasswordLabel';

<<<<<<< HEAD:groot-s-quotes-react/src/components/Password_si_Label/Password_si_Label.jsx
function Password_si_Label() {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
=======
function PasswordLabel({handleInput, loginInput}) {
    return (
        <>
        <div className='form-box'>
            <div className='f5-input'>
>>>>>>> log-page:groot-s-quotes-react/src/components/PasswordLabel/PasswordLabel.jsx
                <input
                type='password'
                className='label-up'  
                placeholder='Password' 
                value={loginInput.password}
                onChange={handleInput}
                name="password"
                /> 
            <label>Password</label>
            </div>
<<<<<<< HEAD:groot-s-quotes-react/src/components/Password_si_Label/Password_si_Label.jsx
=======
            <span>{loginInput.error_list.password}</span>
>>>>>>> log-page:groot-s-quotes-react/src/components/PasswordLabel/PasswordLabel.jsx
        </div>
        </>
      )
    }

export default Password_si_Label