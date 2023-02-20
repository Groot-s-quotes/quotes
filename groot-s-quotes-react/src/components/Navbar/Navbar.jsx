import React from 'react';
import { getAxiosInstance } from "../../axios/axios";
import { Link, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import GrootLogo from '../../assets/images/groot_logo.png'
import './Navbar.css';
import Logout from '../Logout/Logout';
import Collection from '../Collection/Collection';


const instance = getAxiosInstance();
instance.interceptors.request.use(function(config){
    const token =localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  }) 

function Navbar() {
    const navigate = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();
        
        instance.post(`/api/logout`).then(res => {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success",res.data.message,"success");
                navigate('/home');
            }
        });

    }

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );
    }
    else
    {
        AuthButtons = (
            <li className="nav-item">
                <Logout logoutSubmit={logoutSubmit}/>
            </li>
        );
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top header-container">
    <div className="container">

      <div className="groot-container">
        <img src={GrootLogo} alt='Groot logo' className='groot'/>
      </div>
        <Link className="navbar-brand" to="#">Groot's Quote</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Collection/>
                </li>
                {AuthButtons}
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar