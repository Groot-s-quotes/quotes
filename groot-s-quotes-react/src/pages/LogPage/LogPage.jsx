import React, { useState } from 'react';
import './LogPage.css';
import Header from '../../components/Header/Header';
import StartButton from '../../components/StartButton/StartButton';
import EmailLabel from '../../components/EmailLabel/EmailLabel';
import PasswordLabel from '../../components/PasswordLabel/PasswordLabel';
import axios from 'axios'
import swal from 'sweetalert';

const endpoint = "http://localhost:8000/api";
const LogPage = () => {

  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
});

const handleInput = (e) => {
    e.persist();
    setLogin({...loginInput, [e.target.name]: e.target.value });
}

const loginSubmit = (e) => {
  e.preventDefault();
  
  const data = {
      email: loginInput.email,
      password: loginInput.password,
  }
  axios.get('sanctum/csrf-cookie').then(response => {
    axios.post(`${endpoint}/login`, data).then(res => {
        if(res.data.status === 200)
        {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.username);
            swal("Success",res.data.message,"success");
            /* if(res.data.role === 'admin') */
/*             {
                history.push('/admin/dashboard');
            }
            else
            {
                history.push('/');
            } */
        }
        else if(res.data.status === 401)
        {
            swal("Warning",res.data.message,"warning");
        }
        else
        {
            setLogin({...loginInput, error_list: res.data.validation_errors });
        }
    });
});

}
  return (
    <div>
      <Header/>
      <h1>Groot's Quotes Login</h1>
      <form onSubmit={loginSubmit}>
      <EmailLabel handleInput={handleInput}  loginInput={loginInput} />
      <PasswordLabel handleInput={handleInput} loginInput={loginInput}/>
      <StartButton loginSubmit={loginSubmit}/>
      </form>
    </div>
  )
}

export default LogPage
