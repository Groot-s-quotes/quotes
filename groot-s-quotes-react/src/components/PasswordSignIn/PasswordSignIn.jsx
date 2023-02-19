import React from 'react';
import '../../../src/styles/Styles.css';

function PasswordSignIn() {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
                <input
                type='email'
                className='label-up'  
                value='Write your password'
            /> 
            <label>Password</label>
            </div>
        </div>
        </>
      )
    }

export default PasswordSignIn