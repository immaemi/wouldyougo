import React from 'react';
import kakaoLoginImage from '../assets/images/kakao-login.png'; // 이미지 경로 수정

const SocialKakao = () => {
  const Rest_api_key = '637ce93b8d95d506383414edee1a44b3'; // 카카오 REST API 키
  const redirect_uri = 'http://localhost:3000/auth'; // 리다이렉트 URI

  // OAuth 요청 URL 생성
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  // 카카오 로그인 이미지 클릭 시 로그인 페이지로 리다이렉트
  const handleLogin = () => {
    window.location.href = kakaoURL;
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
