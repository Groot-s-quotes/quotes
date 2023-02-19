import React from 'react';
import '../../../src/styles/Styles.css';

function Email_si_Label() {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
                <input
                type='email'
                className='label-up'  
                value='Write your e-mail'
            /> 
            <label>Email</label>
            </div>
        </div>
        </>
      )
    }

export default Email_si_Label