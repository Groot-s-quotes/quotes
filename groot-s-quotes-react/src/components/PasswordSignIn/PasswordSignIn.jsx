import React from 'react';
import '../../../src/styles/Styles.css';

function PasswordSignIn({registerInput, handleInput}) {
    return (
        <>
        <div className='form-box'>
            <div className='f5-input'>
                <input
                type='password'
                className='label-up'  
                placeholder='Password' 
                value= {registerInput.password}
                onChange= {handleInput}
                name="password"
                /> 
            <label>Password</label>
            </div>
            <span>{registerInput.error_list.password}</span>
        </div>
        </>
      )
    }

export default PasswordSignIn