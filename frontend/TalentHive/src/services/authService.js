const API_URL = 'http://localhost:5000/api/auth'; // Adjust based on your backend URL

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json(); // This should include the token
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json(); // This should include the token
};

export const updateUser = async (token, details) => {
  const response = await fetch(`${API_URL}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include token for authentication
    },
    body: JSON.stringify(details),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || 'Failed to update user details.');
  }

  return response.json(); // Return updated user details
};
