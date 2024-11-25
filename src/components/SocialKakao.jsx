import React, { useEffect } from 'react';
import kakaoLoginImage from '../assets/images/kakao-login.png';
import { useNavigate } from 'react-router-dom';

const SocialKakao = ({ setIsLoggedIn }) => {
  const REST_API_KEY = '637ce93b8d95d506383414edee1a44b3';
  const REDIRECT_URI = 'http://localhost:3000/auth';
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js';
    script.integrity = 'sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4';
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(REST_API_KEY);
        console.log('Kakao 초기화 성공');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });
  };

  return (
    <img 
      src={kakaoLoginImage} 
      alt="카카오 로그인" 
      onClick={handleLogin} 
      style={{ cursor: 'pointer', width: '300px', height: 'auto' }} 
    />
  );
};

export default SocialKakao;