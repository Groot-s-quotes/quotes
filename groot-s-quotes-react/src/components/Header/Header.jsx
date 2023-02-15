import React from 'react';
import '../../../src/styles/Styles.css';
import GrootLogo from '../../assets/images/groot_logo.png'

const Header = () => {
  return (
    <div className="header-container">
      <div className="groot-container">
        <img src={GrootLogo} alt='Groot logo' className='groot'/>
      </div>
      <h1 className="header-text">Groot's quotes</h1>
    </div>
  )
}

export default Header

