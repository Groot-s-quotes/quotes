import React from 'react';
import './RegisterPage.css';
import Header from '../../components/Header/Header';
import UserNameLabel from '../../components/UserNameLabel/UserNameLabel';
import PassConfLabel from '../../components/PassConfLabel/PassConfLabel';
import SignInButton from '../../components/SignInButton/SignInButton';
import EmailSignIn from '../../components/EmailSignIn/EmailSignIn';
import PasswordSignIn from '../../components/PasswordSignIn/PasswordSignIn';




const RegisterPage = () => {
  return (
    <div>
      <Header/>
      <form autocomplete='off'>
        <UserNameLabel/>
        <EmailSignIn/>
        <PasswordSignIn/>
        <PassConfLabel/>
        <SignInButton/>
      </form>
    </div>
  )
}

export default RegisterPage
