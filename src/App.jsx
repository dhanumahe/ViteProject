// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import User from './pages/user/User';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contact from './pages/contact/Contact';
import DashBoard from './pages/dashboard/DashBoard';
import Events from './pages/events/Events';

import AdminDashBoard from './pages/AdminDashBoard';
function App() {
    return (
        <Router>
          
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/user' element={<User />} />
                <Route path='/*' element={<DashBoard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/events' element={<Events />} />
                <Route path='/admin-dashboard' element={<AdminDashBoard />} />

            </Routes>
       
        </Router>
    );
}

export default App;