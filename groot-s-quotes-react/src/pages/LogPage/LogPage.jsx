import React, { useState, useEffect } from "react";
import "./LogPage.css";
import Header from "../../components/Header/Header";
import StartButton from "../../components/StartButton/StartButton";
import EmailLabel from "../../components/EmailLabel/EmailLabel";
import PasswordLabel from "../../components/PasswordLabel/PasswordLabel";
import swal from "sweetalert";
import { getAxiosInstance } from "../../axios/axios";
import { useNavigate } from "react-router-dom";

/* import { useHistory } from 'react-router-dom'; */

const instance = getAxiosInstance();
const LogPage = () => {
const navigate = useNavigate();

  useEffect(() => {
    instance.get('/sanctum/csrf-cookie');
  }, []);

  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    instance
      .post('/api/login', data)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.username);
            swal("Success",res.data.message,"success"); 
            navigate('/admin');
          /*             if(res.data.role === 'admin') 
             {
                navigate('/admin');
            }
            else
            {
               navigate('/user');
            }  */
        } else if (res.data.status === 401) {
          swal("Warning", res.data.message, "warning");
        } else {
          setLogin({
            ...loginInput,
            error_list: res.data.validation_errors,
          });
        }
      });
  };
  return (
    <div>
      <Header />
      <h1>Groot's Quotes Login</h1>
      <form onSubmit={loginSubmit}>
        <EmailLabel handleInput={handleInput} loginInput={loginInput} />
        <PasswordLabel handleInput={handleInput} loginInput={loginInput} />
        <StartButton loginSubmit={loginSubmit} />
      </form>
    </div>
  );
};

export default LogPage;
