import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1fa4bfc611e2ef41c0cddcb66ba6708d&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); 
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), 
          level: 10, 
        };

        new window.kakao.maps.Map(container, options); 
      });
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>; 
};

export default KakaoMap;
