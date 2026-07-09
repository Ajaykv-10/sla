import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { currentUser, logout } = useAuth();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
  };

  const cardStyle = {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const profileInfoStyle = {
    textAlign: 'left',
    margin: '20px auto',
    maxWidth: '300px',
    padding: '15px',
    border: '1px solid #eee',
    borderRadius: '4px',
    backgroundColor: '#fafafa',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: '#333' }}>Welcome to Dashboard!</h1>
        <p>You have successfully logged in.</p>

        {currentUser && (
          <div style={profileInfoStyle}>
            <h3 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
              User Profile Details
            </h3>
            <p style={{ margin: '5px 0' }}>
              <strong>Name:</strong> {currentUser.name}
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>Email:</strong> {currentUser.email}
            </p>
          </div>
        )}

        <button onClick={logout} style={buttonStyle}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
