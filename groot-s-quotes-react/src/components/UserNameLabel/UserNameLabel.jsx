import React from 'react';
import '../../../src/styles/Styles.css';

function UserNameLabel() {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
                <input
                //REVISAR SI "TYPE" ESTÁ CORRECTO
                type='name'
                className='label-up'  
                value='Write your name'
            /> 
            <label>Name</label>
            </div>
        </div>
        </>
      )
    }

export default UserNameLabel