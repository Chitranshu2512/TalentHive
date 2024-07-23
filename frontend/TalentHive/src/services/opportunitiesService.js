const API_URL = 'http://localhost:5000/api';

export const fetchOpportunities = async () => {
  const response = await fetch(`${API_URL}/opportunities`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || 'Failed to fetch opportunities.');
  }
  return response.json();
};

export const applyForOpportunity = async (opportunityId, userId, token) => {
  const response = await fetch(`${API_URL}/opportunities/${opportunityId}/apply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Include the token in the Authorization header
    },
    body: JSON.stringify({ userId }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || 'Failed to apply for the opportunity.');
  }
  return response.json();
};
