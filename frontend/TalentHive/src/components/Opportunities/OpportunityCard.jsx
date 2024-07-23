import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { applyForOpportunity } from '../../services/opportunitiesService';
import ApplyButton from '../Opportunities/ApplyButton';

const OpportunityCard = ({ opportunity }) => {
  const { auth } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleApply = async () => {
    if (!auth || !auth.token) {
      setError('You must be logged in to apply.');
      return;
    }
    try {
      await applyForOpportunity(opportunity._id, auth.user.id, auth.token);
      setSuccess('Applied successfully!');
    } catch (err) {
      setError(`Failed to apply for the opportunity: ${err.message}`);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white mb-4">
      <h2 className="text-xl font-semibold mb-2">{opportunity.profileName}</h2>
      <p className="text-gray-700 mb-2">Company: {opportunity.companyName}</p>
      <p className="text-gray-700 mb-2">Stipend: {opportunity.stipend}</p>
      <p className="text-gray-700 mb-2">Location: {opportunity.location}</p>
      <p className="text-gray-700 mb-2">Duration: {opportunity.duration}</p>
      <p className="text-gray-700 mb-4">Start Date: {new Date(opportunity.startDate).toLocaleDateString()}</p>
      <ApplyButton onClick={handleApply} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default OpportunityCard;
