import React, { useContext } from 'react';
import GeneralContext from './GeneralContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(GeneralContext);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h2>Access Denied</h2>
        <p>Please login to access the dashboard.</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
