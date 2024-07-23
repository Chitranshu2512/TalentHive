import React, { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  const setAuthData = (data) => {
    const decodedToken = jwtDecode(data.token);
    setAuth({ ...data, user: decodedToken.user });
    localStorage.setItem('auth', JSON.stringify({ ...data, user: decodedToken.user }));
  };

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setAuthData(data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const register = async (userData) => {
    try {
      const data = await registerUser(userData);
      setAuthData(data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const fetchUserDetails = async () => {
    if (!auth?.user?.id) return;

    try {
      const response = await fetch(`http://localhost:5000/api/users/${auth.user.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userData = await response.json();
      setAuth(prevAuth => ({
        ...prevAuth,
        user: {
          id: userData._id,
          name: userData.name,
          email: userData.email,
          age: userData.age, // Add age
          dateOfBirth: userData.dateOfBirth // Add dateOfBirth
        }
      }));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const { token, user } = JSON.parse(storedAuth);
      setAuth({ token, user });
      fetchUserDetails(); // Fetch user details on app load
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, register, logout, fetchUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
