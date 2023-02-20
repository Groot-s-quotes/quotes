import React from 'react';
import '../../../src/styles/Styles.css';

const SignInButton = () => {
  return (
    <>
        <a href={'/signin'} className='collection-1 btn-5'>
            <span>Sign In</span>
        </a>
    </>
  )
}

export default SignInButton