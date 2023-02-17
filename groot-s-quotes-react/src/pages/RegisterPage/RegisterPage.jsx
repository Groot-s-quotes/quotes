import React from 'react';
import './RegisterPage.css';
import Header from '../../components/Header/Header';
import UserNameLabel from '../../components/UserNameLabel/UserNameLabel';
import EmailLabel from '../../components/EmailLabel/EmailLabel';
import PasswordLabel from '../../components/PasswordLabel/PasswordLabel';
import SignInButton from '../../components/SignInButton/SignInButton';
import PassConfLabel from '../../components/PassConfLabel/PassConfLabel';



const RegisterPage = () => {
  return (
    <div>
      <Header/>
      <UserNameLabel/>
      <EmailLabel/>
      <PasswordLabel/>
      <PassConfLabel/>
      <SignInButton/>
    </div>
  )
}

export default RegisterPage
