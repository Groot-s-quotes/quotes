import React from 'react';
import '../../../src/styles/Styles.css';

function PasswordLabel({handleInput, loginInput}) {
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

export default PasswordLabel