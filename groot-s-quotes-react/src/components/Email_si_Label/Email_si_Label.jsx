import React from 'react';
import './EmailLabel.css';

<<<<<<< HEAD:groot-s-quotes-react/src/components/Email_si_Label/Email_si_Label.jsx
function Email_si_Label() {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
=======
function EmailLabel({handleInput, loginInput}) {
    console.log(loginInput);
    return (
        <>
        <div className='form-box'>
            <div className='f5-input'>
>>>>>>> log-page:groot-s-quotes-react/src/components/EmailLabel/EmailLabel.jsx
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
<<<<<<< HEAD:groot-s-quotes-react/src/components/Email_si_Label/Email_si_Label.jsx
=======
            <span>{loginInput.error_list.email}</span>
>>>>>>> log-page:groot-s-quotes-react/src/components/EmailLabel/EmailLabel.jsx
        </div>
        </>
      )
    }

export default Email_si_Label