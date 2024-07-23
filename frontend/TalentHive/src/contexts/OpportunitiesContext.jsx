// contexts/OpportunitiesContext.js
import React, { createContext, useState } from 'react';

export const OpportunitiesContext = createContext();

export const OpportunitiesProvider = ({ children }) => {
  const [opportunities, setOpportunities] = useState([]);

  return (
    <OpportunitiesContext.Provider value={{ opportunities, setOpportunities }}>
      {children}
    </OpportunitiesContext.Provider>
  );
};
