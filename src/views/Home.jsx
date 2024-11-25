import React, { useState, useRef } from 'react';
import KakaoMap from '../components/KakaoMap';
import './Home.css';
import set from '../assets/images/Set.png';
import MP from '../assets/images/MYpage.png';

const Home = () => {
    const [activeRightButton, setActiveRightButton] = useState('home');
    const [activeLeftButton, setActiveLeftButton] = useState('myPins');
    const [locationName, setLocationName] = useState('');
    const [map, setMap] = useState(null); // 맵 인스턴스를 저장할 상태

    const handleRightButtonClick = (button) => {
        setActiveRightButton(button); 
    };

    const handleLeftButtonClick = (button) => {
        setActiveLeftButton(button); 
    };

    // 핀 추가 함수
    const addPin = (latlng) => {
        if (!map) return; // 맵이 없으면 리턴

        const marker = new window.kakao.maps.Marker({
            position: latlng,
        });
        marker.setMap(map); // 맵에 핀 추가
    };

    // 장소 검색 함수
    const searchLocation = () => {
        const keyword = locationName; // 사용자 입력

        if (!keyword) {
            alert("장소 이름을 입력하세요.");
            return;
        }

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(keyword, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const latlng = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                addPin(latlng); // 핀 추가 함수 호출
                setLocationName(''); // 입력 필드 초기화
            } else {
                alert("장소를 찾을 수 없습니다.");
            }
        });
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
            <div className="home-left-buttons">
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
            <KakaoMap onMapLoad={setMap} /> {/* 맵 인스턴스를 상태로 설정 */}
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
            <div className="pin-input-container">
              <input 
                  type="text" 
                  value={locationName} 
                  onChange={(e) => setLocationName(e.target.value)} 
                  placeholder="장소 이름 입력" 
              />
              <button onClick={searchLocation}>
                  핀 추가
              </button>
            </div>
          </div>
        </div>
        <div className="length-line"></div>
      </div>
    );
};

export default Home;
