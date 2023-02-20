import React from 'react';
import '../../../src/styles/Styles.css';

function PassConfLabel({registerInput, handleInput}) {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
                <input
                type='email'
                className='label-up'  
                value= {registerInput.password}
                onChange= {handleInput}
                name= 'passwordConfirmation'
            /> 
            <label>Password</label>
            </div>
            <span>{registerInput.error_list.password}</span>
        </div>
        </>
      )
    }

export default PassConfLabel