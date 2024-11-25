import React, { useEffect } from 'react';
import kakaoLoginImage from '../assets/images/kakao-login.png';
import { useNavigate } from 'react-router-dom';

const SocialKakao = ({ setIsLoggedIn }) => { // setIsLoggedIn을 props로 받음
  const Rest_api_key = '637ce93b8d95d506383414edee1a44b3'; // 카카오 REST API 키
  const redirect_uri = 'http://localhost:3000/home'; // 리다이렉트 URI

  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 가져오기

  // Kakao 초기화
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(Rest_api_key); // 초기화
      console.log('Kakao 초기화 성공');
    }
  }, [Rest_api_key]);

  // 카카오 로그인 처리
  const handleLogin = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        console.log('로그인 성공', authObj);
        setIsLoggedIn(true); // 로그인 성공 시 isLoggedIn 상태 업데이트
        navigate('/home'); // 로그인 성공 후 리다이렉트
      },
      fail: function(err) {
        console.error('로그인 실패', err);
        alert('로그인에 실패했습니다.');
      }
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
