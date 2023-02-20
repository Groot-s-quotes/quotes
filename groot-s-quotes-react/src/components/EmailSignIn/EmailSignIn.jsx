import React from 'react';
import '../../../src/styles/Styles.css';

function EmailSignIn() {
  return (
    <>
        <div className='form-box'>
            <div className='f5-input'>
                <input
                type='email'
                className='label-up'
                placeholder='Email'  
                value=''
                onChange=''
                name="email"
            /> 
            <label>Email</label>
            </div>
        </div>
        </>
  )
}

export default EmailSignIn