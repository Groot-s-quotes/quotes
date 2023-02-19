import React from 'react';
import './RegisterPage.css';
import Header from '../../components/Header/Header';
import UserNameLabel from '../../components/UserNameLabel/UserNameLabel';
import Email_si_Label from '../../components/Email_si_Label/Email_si_Label';
import Password_si_Label from '../../components/Password_si_Label/Password_si_Label';
import PassConfLabel from '../../components/PassConfLabel/PassConfLabel';
import SignInButton from '../../components/SignInButton/SignInButton';




const RegisterPage = () => {
  return (
    <div>
      <Header/>
      <form autocomplete='off'>
        <UserNameLabel/>
        <Email_si_Label/>
        <Password_si_Label/>
        <PassConfLabel/>
        <SignInButton/>
      </form>
    </div>
  )
}

export default RegisterPage
