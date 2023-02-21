import React from 'react';
import '../../../src/styles/Styles.css';

function Logout({logoutSubmit}) {
  return (
    <>
      <button className="btn navbar-buttons mx-2" type="button" onClick={logoutSubmit}>
        <span></span>
        <span>Log Out</span>
      </button>
    </>
  )
}

export default Logout