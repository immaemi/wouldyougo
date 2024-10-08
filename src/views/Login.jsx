import React from 'react';
import SocialKakao from '../components/SocialKakao'; 
import './Login.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <h1>함께 만드는 여행일기,</h1>
        <h2>너도 갈래</h2>
      </div>
      <div className="right-panel">
        <div className="login-box">
          <div className="login-header">
            <div className="profile-icon"></div> 
            <h1>너도 갈래?</h1>
          </div>
          <div className="button-container"> 
            <SocialKakao /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
