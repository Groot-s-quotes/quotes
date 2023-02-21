import React from 'react';
import '../../../src/styles/Styles.css';

function EmailSignIn({registerInput, handleInput}) {
  return (
    <>
        <div className='form-box'>
            <div className='f5-input'>
                <input
                type='email'
                className='label-up'
                placeholder='Email'  
                value= {registerInput.email}
                onChange= {handleInput}
                name="email"
            /> 
            <label>Email</label>
            </div>
            <span>{registerInput.error_list.email}</span>
        </div>
        </>
  )
}

export default EmailSignIn