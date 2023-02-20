import React from 'react';
import '../../../src/styles/Styles.css';
import GrootLogo from '../../assets/images/groot_logo.png'

const Header = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-between header-container">
      <div className="d-flex align-items-center">
        <div className="groot-container">
          <img src={GrootLogo} alt='Groot logo' className='groot'/>
        </div>
        <h1 className="header-text">Groot's quotes</h1>
      </div>
      {props.children}
    </div>
  )
}

export default Header

