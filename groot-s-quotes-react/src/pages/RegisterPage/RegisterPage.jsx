import React from 'react';
import './RegisterPage.css';
import Header from '../../components/Header/Header';
import UserNameLabel from '../../components/UserNameLabel/UserNameLabel';
import PassConfLabel from '../../components/PassConfLabel/PassConfLabel';
import SignInButton from '../../components/SignInButton/SignInButton';
import EmailSignIn from '../../components/EmailSignIn/EmailSignIn';
import PasswordSignIn from '../../components/PasswordSignIn/PasswordSignIn';




const RegisterPage = () => {
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

    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/register`, data).then(res => { 
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Success",res.data.message,"success");
                history.push('/');
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
      <form autocomplete='off' onSubmit={}>
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
