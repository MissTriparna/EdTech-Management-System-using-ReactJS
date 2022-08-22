import React from 'react';
import Sign from './Sign';
import Landing from "./Landing";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Portal from './Portal';
import Dashboard from './TeacherDashboard';
import User from './User';
import LoginUi from './LoginUi';

const Tri = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/log' element={<Sign/>} />
            <Route path='/student' element={<Portal/>} />
            <Route path='/login' element={<LoginUi/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/user' element={<User/>} />
            
        </Routes>
    </BrowserRouter>
  )
}



export default Tri
