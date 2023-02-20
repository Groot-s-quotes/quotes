import React from 'react';
import '../../../src/styles/Styles.css';

function PasswordSignIn() {
    return (
        <>
        <div className='form-box'>
            <div className='f5-input'>
                <input
                type='password'
                className='label-up'  
                placeholder='Password' 
                value='Write your password'
                onChange=''
                name="password"
                /> 
            <label>Password</label>
            </div>
        </div>
        </>
      )
    }

export default PasswordSignIn