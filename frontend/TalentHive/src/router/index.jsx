import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import OpportunitiesPage from '../pages/OpportunitiesPage';
import App from '../App';

const AppRouter = () => {
    return (
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/opportunities" element={<OpportunitiesPage />} />
                </Routes>
            </App>
        </Router>
    );
};

export default AppRouter;
