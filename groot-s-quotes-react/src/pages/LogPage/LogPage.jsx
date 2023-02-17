import React from 'react';
import './LogPage.css';
import Header from '../../components/Header/Header';
import StartButton from '../../components/StartButton/StartButton';
import EmailLabel from '../../components/EmailLabel/EmailLabel';
import PasswordLabel from '../../components/PasswordLabel/PasswordLabel';


const LogPage = () => {
  return (
    <div>
      <Header/>
      <h1>Groot's Quotes</h1>
      <EmailLabel/>
      <PasswordLabel/>
      <StartButton/>
    </div>
  )
}

export default LogPage
