import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import Login from "./Login";
import Register from "./Register";
import "./Auth.css";

import Menu from "./Menu";

const TopBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  const { isAuthenticated } = useContext(GeneralContext);

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {!isAuthenticated && (
          <div className="auth-buttons">
            <button className="auth-btn" onClick={() => setShowLogin(true)}>
              Login
            </button>
            <button className="auth-btn primary" onClick={() => setShowRegister(true)}>
              Register
            </button>
          </div>
        )}
        
        <Menu />
      </div>

      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)}
          switchToRegister={switchToRegister}
        />
      )}
      
      {showRegister && (
        <Register 
          onClose={() => setShowRegister(false)}
          switchToLogin={switchToLogin}
        />
      )}
    </div>
  );
};

export default TopBar;
