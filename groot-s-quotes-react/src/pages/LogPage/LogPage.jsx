import React from 'react';
import './LogPage.css';
import Header from '../../components/Header/Header';
import StartButton from '../../components/StartButton/StartButton';
import EmailLabel from '../../components/EmailLabel/EmailLabel';


const LogPage = () => {
  return (
    <div>
      <Header/>
      <h1>Groot's Quotes</h1>
      <EmailLabel/>
      <StartButton/>
    </div>
  )
}

export default LogPage
