import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../Button';

const UserDetailsForm = () => {
  const { user, updateUserDetails } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || '');
  const [age, setAge] = useState(user?.age || '');
  const [dob, setDob] = useState(user?.dob || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails({ name, age, dob });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Details</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-medium mb-1">Age</label>
        <input
          id="age"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="dob" className="block text-gray-700 font-medium mb-1">Date of Birth</label>
        <input
          id="dob"
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Update
      </Button>
    </form>
  );
};

export default UserDetailsForm;
