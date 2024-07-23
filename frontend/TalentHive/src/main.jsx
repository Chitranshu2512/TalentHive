import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure this is the correct path
import { AuthProvider } from './contexts/AuthContext';
import { OpportunitiesProvider } from './contexts/OpportunitiesContext';
import './assets/styles/tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Wrap your providers with Router */}
      <AuthProvider>
        <OpportunitiesProvider>
          <App />
        </OpportunitiesProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);
