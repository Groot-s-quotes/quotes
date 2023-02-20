import React from 'react';
import '../../../src/styles/Styles.css';

const SignInButton = (props) => {
  return (
    <>
        <a href={'/'} className={`${props.class} collection-1 btn-5`}>
            <span>Sign In</span>
        </a>
    </>
  )
}

export default SignInButton

SignInButton.defaultProps = {
  text: 'Mi botón',
}