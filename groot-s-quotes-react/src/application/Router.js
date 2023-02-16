import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
/* import HomePage from '../pages/HomePage/HomePage.jsx'; */
import LogInPage from '../pages/LogInPage/LogInPage.jsx';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          {/* <Route path='/home' element={<HomePage/>}/> */}
          <Route path='/login' element={<LogInPage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }

