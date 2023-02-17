import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
/* import HomePage from '../pages/HomePage/HomePage.jsx'; */
import LogInPage from '../pages/LogInPage/LogInPage.jsx';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardAdminPage from '../pages/DashboardAdminPage/DashboardAdminPage.jsx';
import CreateQuoteFormPage from '../pages/CreateQuoteFormPage/CreateQuoteFormPage.jsx';
import EditQuoteFormPage from '../pages/EditQuoteFormPage/EditQuoteFormPage.jsx';

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          {/* <Route path='/home' element={<HomePage/>}/> */}
          <Route path='/login' element={<LogInPage/>}/>
          <Route path='/admin' element={<DashboardAdminPage/>}/>
          <Route path='/create' element={<CreateQuoteFormPage/>}/>
          <Route path='/edit/:id' element={ <EditQuoteFormPage/> } />
        </Routes>
      </BrowserRouter>
    )
  }

