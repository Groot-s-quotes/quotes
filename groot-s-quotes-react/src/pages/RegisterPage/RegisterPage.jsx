import React from 'react';
import './RegisterPage.css';
import swal from 'sweetalert';
import Header from '../../components/Header/Header';
import UserNameLabel from '../../components/UserNameLabel/UserNameLabel';
import PassConfLabel from '../../components/PassConfLabel/PassConfLabel';
import SignInButton from '../../components/SignInButton/SignInButton';
import EmailSignIn from '../../components/EmailSignIn/EmailSignIn';
import PasswordSignIn from '../../components/PasswordSignIn/PasswordSignIn';
import { getAxiosInstance } from '../../axios/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const RegisterPage = () => {
  const instance = getAxiosInstance();

  const navigate = useNavigate();

  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
      e.persist();
      setRegister({...registerInput, [e.target.name]: e.target.value });
  }

  const registerSubmit = (e) => {
      e.preventDefault();
      
    const data = {
        name: registerInput.name,
        email: registerInput.email,
        password: registerInput.password,
    }

    instance.get('/sanctum/csrf-cookie').then(response => {
        instance.post(`/api/register`, data).then(res => { 
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Success",res.data.message,"success");
                navigate('/home');
            }
            else
            {
                setRegister({...registerInput, error_list: res.data.validation_errors});
            }
        });
    });
  }

  return (
    <div>
      <Header/> 
      <form autocomplete='off' onSubmit={registerSubmit}>
        <UserNameLabel registerInput={registerInput} handleInput={handleInput}/>
        <EmailSignIn registerInput={registerInput} handleInput={handleInput}/>
        <PasswordSignIn registerInput={registerInput} handleInput={handleInput}/>
        <PassConfLabel registerInput={registerInput} handleInput={handleInput}/>
        <SignInButton/>
      </form>
    </div>
  )
}

export default RegisterPage
