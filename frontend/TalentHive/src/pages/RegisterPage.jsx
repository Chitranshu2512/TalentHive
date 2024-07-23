import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email, password, name, age, dateOfBirth });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          placeholder="Date of Birth"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
