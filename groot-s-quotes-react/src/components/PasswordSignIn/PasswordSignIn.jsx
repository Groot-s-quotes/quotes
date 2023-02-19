import React from 'react';
import './PasswordLabel';

<<<<<<< HEAD:groot-s-quotes-react/src/components/Password_si_Label/Password_si_Label.jsx
function PasswordLabel({handleInput, loginInput}) {
=======
function PasswordSignIn() {
>>>>>>> 64e251417ca11fd5bde7dcb4f0c429d1cc1206dc:groot-s-quotes-react/src/components/PasswordSignIn/PasswordSignIn.jsx
    return (
        <>
        <div className='form-box'>
            <div className='f5-input'>
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
            <span>{loginInput.error_list.password}</span>
        </div>
        </>
      )
    }

export default PasswordSignIn