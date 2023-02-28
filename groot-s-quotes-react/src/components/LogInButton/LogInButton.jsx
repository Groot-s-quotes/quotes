import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/styles/Styles.css';

const LogInButton = () => {
  return (
    <>
        <Link to={'/login'} className="collection-1 btn-7">
          <span></span>
          <span>Log In</span>
        </Link>
    </>
  )
}

export default LogInButton