import React from 'react';
import './WelcomePage.css';
import Header from '../../components/Header/Header';
import SloganComponent from '../../components/SloganComponent/SloganComponent.jsx';
import SignInButton from '../../components/SignInButton/SignInButton.jsx';
import LogInButton from '../../components/LogInButton/LogInButton.jsx';
import WatchQuotesButton from '../../components/WatchQuotesButton/WatchQuotesButton.jsx';

const WelcomePage = () => {
  return (
    <div>
      <Header>
        
        </Header>
        <SloganComponent/>
        <div className='wellcome-buttons'>
        <SignInButton/>
        <LogInButton/>
        </div>
        <WatchQuotesButton/>
    </div>
  )
}

export default WelcomePage
