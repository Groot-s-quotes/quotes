import React from 'react';
import './EmailLabel.css';

function EmailLabel({handleInput, loginInput}) {
    console.log(loginInput);
    return (
        <>
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

export default Email_si_Label