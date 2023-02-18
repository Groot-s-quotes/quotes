import React from 'react';
import '../../../src/styles/Styles.css';

function PasswordLabel({handleInput, loginInput}) {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
                <input
                type='password'
                className='label-up'  
                placeholder='Password' 
                value={loginInput.password}
                onChange={handleInput}/> 
            <label>Password</label>
            <span>{loginInput.error_list.password}</span>
            </div>
        </div>
        </>
      )
    }

export default PasswordLabel