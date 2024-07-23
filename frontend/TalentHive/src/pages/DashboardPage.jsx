import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import UserDetailsForm from '../components/Dashboard/UserDetailsForm';

const DashboardPage = () => {
  const { auth, fetchUserDetails } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    dateOfBirth: '', // Corrected field
  });

  useEffect(() => {
    if (auth && auth.user) {
      setUserDetails({
        name: auth.user.name,
        age: auth.user.age || '',
        dateOfBirth: auth.user.dateOfBirth ? new Date(auth.user.dateOfBirth).toLocaleDateString() : '' // Corrected field
      });
    }
  }, [auth]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <p className="text-lg mb-2">Name: {userDetails.name}</p>
        <p className="text-lg mb-2">Age: {userDetails.age}</p>
        <p className="text-lg mb-2">Date of Birth: {userDetails.dateOfBirth}</p>
      </div>
      <UserDetailsForm userDetails={userDetails} setUserDetails={setUserDetails} />
    </div>
  );
};

export default DashboardPage;
