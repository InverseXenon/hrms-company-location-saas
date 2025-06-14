import React from 'react';
import './Header.css';
import logo from '../assets/abstart_logo.svg';
import welcomeIcon from '../assets/welcome.svg';
import logoutIcon from '../assets/logout.svg';
import separatorIcon from '../assets/separator.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="3TB Start" className="logo-img" />
        </div>
        <div className="user-section">
          <div className="welcome-wrapper">
            <img src={welcomeIcon} alt="Welcome" className="welcome-icon" />
            
          </div>
          <img
            src={logoutIcon}
            alt="Logout"
            className="logout-btn-svg"
            onClick={() => console.log('Logout clicked')}
          />
        </div>
      </div>
      <img src={separatorIcon} alt="Separator" className="header-separator" />
    </header>
  );
};

export default Header; 