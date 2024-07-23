import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UserDetailsForm from './UserDetailsForm';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Details</h2>
        <p className="text-lg text-gray-700 mb-2">Name: <span className="font-medium">{user?.name || 'N/A'}</span></p>
        <p className="text-lg text-gray-700 mb-4">Email: <span className="font-medium">{user?.email || 'N/A'}</span></p>
        {/* Add more user details as needed */}
      </div>
      <UserDetailsForm />
    </div>
  );
};

export default Dashboard;
