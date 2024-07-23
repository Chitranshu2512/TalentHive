import React from 'react';
import OpportunityCard from './OpportunityCard';

const OpportunityList = ({ opportunities }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {opportunities.map((opportunity) => (
        <OpportunityCard key={opportunity._id} opportunity={opportunity} />
      ))}
    </div>
  );
};

export default OpportunityList;
