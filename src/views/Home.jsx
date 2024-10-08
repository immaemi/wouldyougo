import React, { useState } from 'react';
import KakaoMap from '../components/KakaoMap';
import './Home.css';

import set from '../assets/images/Set.png';
import MP from '../assets/images/MYpage.png';

const Home = () => {
    const [activeRightButton, setActiveRightButton] = useState('home'); // 오른쪽 버튼 상태
    const [activeLeftButton, setActiveLeftButton] = useState('myPins'); // 왼쪽 버튼 상태

    const handleRightButtonClick = (button) => {
        setActiveRightButton(button); 
    };

    const handleLeftButtonClick = (button) => {
        setActiveLeftButton(button); 
    };

    return (
      <div className="home-container">
        <header className="home-header-panel" role="banner">
          <div className="home-header-left">
            <div className="home-header-img" /> 
            <h1>너도갈래?</h1>
          </div>
          <div className="home-header-right">
            <img src={set} alt="Settings" />
            <img src={MP} alt="My Page" />
          </div>
        </header>
        <div className="home-content-container">
          <div className="home-left-panel">
            <div className="home-left-buttons"> {/* 버튼 컨테이너 */}
              <button 
                  className={`home-left-button ${activeLeftButton === 'myPins' ? 'active' : 'inactive'}`} 
                  onClick={() => handleLeftButtonClick('myPins')}
              >
                  내 핀
              </button>
              <button 
                  className={`home-left-button ${activeLeftButton === 'friendPins' ? 'active' : 'inactive'}`} 
                  onClick={() => handleLeftButtonClick('friendPins')}
              >
                  친구 핀
              </button>
            </div>
            <KakaoMap />
          </div>
          <div className="home-right-panel">
            <div className="home">
              <button 
                  className={`home-right-button ${activeRightButton === 'home' ? 'active' : 'inactive'}`} 
                  onClick={() => handleRightButtonClick('home')}
              >
                  Home
              </button>
              <button 
                  className={`home-right-button ${activeRightButton === 'myPage' ? 'active' : 'inactive'}`} 
                  onClick={() => handleRightButtonClick('myPage')}
              >
                  My page
              </button>
            </div>
          </div>
        </div>
        <div className="length-line"></div>
      </div>
    );
};

export default Home;
