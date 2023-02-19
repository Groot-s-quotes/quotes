import React from 'react';
import './EmailLabel.css';

<<<<<<< HEAD:groot-s-quotes-react/src/components/Email_si_Label/Email_si_Label.jsx
function EmailLabel({handleInput, loginInput}) {
    console.log(loginInput);
    return (
        <>
=======
function EmailSignIn() {
  return (
    <>
>>>>>>> 64e251417ca11fd5bde7dcb4f0c429d1cc1206dc:groot-s-quotes-react/src/components/EmailSignIn/EmailSignIn.jsx
        <div className='form-box'>
            <div className='f5-input'>
                <input
                type='email'
                className='label-up'
                placeholder='Email'  
                value={loginInput.email}
                onChange={handleInput}
                name="email"
            /> 
            <label>Email</label>
            </div>
            <span>{loginInput.error_list.email}</span>
        </div>
        </>
  )
}

export default EmailSignIn