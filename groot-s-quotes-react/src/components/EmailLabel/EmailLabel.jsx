import React from 'react';
import '../../../src/styles/Styles.css';

function EmailLabel() {
    return (
        <>
        <div className='form-box'>
        <form autocomplete='off'>
            <div class='f5-input'>
                <input
                type='email'
                className='label-up'  
                value='Write your e-mail'
            /> 
            <label>Email</label>
            </div>
        </form>
        </div>
        </>
      )
    }

export default EmailLabel