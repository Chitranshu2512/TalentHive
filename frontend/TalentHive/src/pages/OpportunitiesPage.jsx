import React, { useContext, useEffect, useState } from 'react';
import { OpportunitiesContext } from '../contexts/OpportunitiesContext';
import OpportunityCard from '../components/Opportunities/OpportunityCard';
import { fetchOpportunities } from '../services/opportunitiesService';

const OpportunitiesPage = () => {
  const { opportunities, setOpportunities } = useContext(OpportunitiesContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await fetchOpportunities();
        console.log('Fetched opportunities:', data); // Debugging log
        setOpportunities(data);
      } catch (err) {
        console.error('Error loading opportunities:', err); // Debugging log
        setError('Failed to load opportunities.');
      } finally {
        setLoading(false);
      }
    };
    loadOpportunities();
  }, [setOpportunities]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Opportunities</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <OpportunityCard key={opportunity._id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesPage;



