import React from 'react';
import '../../../src/styles/Styles.css';

function UserNameLabel({registerInput, handleInput}) {
    return (
        <>
        <div className='form-box'>
            <div class='f5-input'>
                <input
                //REVISAR SI "TYPE" ESTÁ CORRECTO
                type='text'
                className='label-up'  
                value= {registerInput.name}
                onChange= {handleInput}
                name='name'
            /> 
            <label>Name</label>
            </div>
            <span>{registerInput.error_list.name}</span>
        </div>
        </>
      )
    }

export default UserNameLabel