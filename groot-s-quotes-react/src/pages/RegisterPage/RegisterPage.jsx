import React from 'react';
import './RegisterPage.css';
import Header from '../../components/Header/Header';
import EmailLabel from '../../components/EmailLabel/EmailLabel';
import SignInButton from '../../components/SignInButton/SignInButton';

const RegisterPage = () => {
  return (
    <div>
      <Header/>
      <EmailLabel/>
      <SignInButton/>
    </div>
  )
}

export default RegisterPage
