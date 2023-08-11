// =========== 카카오 디벨롭퍼 (https://developers.kakao.com/docs/latest/ko/kakaomap/common) =====

// const lat = 37.5697291;
// const lng = 126.9897183;

// let mapContainer = document.getElementById('map'), // 지도를 표시할 div  
//     mapOption = { 
//         center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
//         level: 10 // 지도의 확대 레벨
//     };

//     let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

//     let clusterer = new kakao.maps.MarkerClusterer({
//       map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
//       averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
//       minLevel: 10 // 클러스터 할 최소 지도 레벨 
//     });


// // 마커를 표시할 위치와 title 객체 배열입니다 
// let positions = [
//     {
//         title: '그린미디어아카데미', 
//         latlng: new kakao.maps.LatLng(lat, lng)
//     },
//     {
//         title: '생태연못', 
//         latlng: new kakao.maps.LatLng(37.55834, 126.91302)
//     },
//     {
//         title: '텃밭', 
//         latlng: new kakao.maps.LatLng(37.55483, 126.91276)
//     },
//     {
//         title: '근린공원',
//         latlng: new kakao.maps.LatLng(37.55744, 126.91860)
//     }
// ];

// let markers = [];
// // 마커 이미지의 이미지 주소입니다
// let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
// for (let i = 0; i < positions.length; i ++) {
    
//     // 마커 이미지의 이미지 크기 입니다
//     let imageSize = new kakao.maps.Size(24, 35); 
    
//     // 마커 이미지를 생성합니다    
//     let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
//     // 마커를 생성합니다
//     let marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng, // 마커를 표시할 위치
//         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image : markerImage // 마커 이미지 
//     });

//     // makers.push(marker);

//     let infowindow = new kakao.maps.InfoWindow({
//       content : positions[i].title
//   });
//   // 마커에 마우스오버 이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'mouseover', function() {
//   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
//     infowindow.open(map, marker, infowindow);
// });

// // 마커에 마우스아웃 이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'mouseout', function() {
//     // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
//     infowindow.close();
// });
// }

// clusterer.addMarkers(markers);

// ======================= 공공데이터포털 (https://www.data.go.kr/) =======================

// const url = 'https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=291&MobileOS=ETC&MobileApp=appTest&serviceKey=5XspoU6J9DdkY0DcKG3P/7d2wUAm33XMOFphavsPex9x7vjpamcUoYomSQFOculd2TrDCNuNI57mbvkSFY17SA==&_type=json'

// fetch(url)
// .then(result => result.json())
// .then(json => {
//     console.log(json);
// })



