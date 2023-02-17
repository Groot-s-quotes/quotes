import React from 'react';
import '../../../src/styles/Styles.css';

function UserNameLabel() {
    return (
        <>
        <div className='form-box'>
        <form autocomplete='off'>
            <div class='f5-input'>
                <input
                //REVISAR SI "TYPE" ESTÁ CORRECTO
                type='name'
                className='label-up'  
                value='Write your name'
            /> 
            <label>Name</label>
            </div>
        </form>
        </div>
        </>
      )
    }

export default UserNameLabel