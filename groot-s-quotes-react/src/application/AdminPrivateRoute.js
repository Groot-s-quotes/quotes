import React, {useState,useEffect} from 'react';
import {Navigate, Route, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import { getAxiosInstance } from '../axios/axios';
import DashboardAdminPage from '../pages/DashboardAdminPage/DashboardAdminPage';



function AdminPrivateRoute({...rest}) {
    const instance = getAxiosInstance();
    const navigate = useNavigate();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        instance.get(`/api/checkingAuthenticated`).then(res=> {
            if(res.status === 200)
            {
                setAuthenticated(true);
            }
            setloading(false);
        });

        return () => {
            setAuthenticated(false);
        };
    }, []);

    instance.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401)
        {
            swal("Unauthorized",err.response.data.message,"warning");
            navigate('/');
        }
        return Promise.reject(err);
    });

    instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if(error.response.status === 403) // Access Denied
            {
                swal("Forbidden",error.response.data.message,"warning");
                navigate('/403');
            }
            else if(error.response.status === 404) //Page Not Found
            {
                swal("404 Error","Url/Page Not Found","warning");
                navigate('/404');
            }
            return Promise.reject(error);
        }
    );

    if(loading)
    {
        return <h1>Loading...</h1>
    }
  return (
    <Route {...rest}
    render={ ({props, location}) => 
        Authenticated ?
        ( <DashboardAdminPage {...props} /> ) :
        ( <Navigate to={{pathname: "/login", state: {from: location} }} /> ) 
    }
/>
  )
}

export default AdminPrivateRoute