import React from 'react';
import '../../../src/styles/Styles.css';

function EmailLabel({handleInput, loginInput}) {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
                <input
                type='email'
                className='label-up'
                placeholder='Email'  
                value={loginInput.email}
                onChange={handleInput}
            /> 
            <label>Email</label>
            <span>{loginInput.error_list.email}</span>
            </div>
        </div>
        </>
      )
    }

export default EmailLabel