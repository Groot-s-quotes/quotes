import React from 'react';
import '../../../src/styles/Styles.css';

function Logout({logoutSubmit}) {
  return (
    <>
      <button className="collection-1 btn-7" type="button" onClick={logoutSubmit}>
        <span></span>
        <span>Log Out</span>
      </button>
    </>
  )
}

export default Logout