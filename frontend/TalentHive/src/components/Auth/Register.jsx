import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Form from '../Form';
import Button from '../Button';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Register</h2>
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <Button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
