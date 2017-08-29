//사이드 메뉴바
// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});



//환율 스크롤


function textScroll(scroll_el_id) {
    this.objElement = document.getElementById(scroll_el_id);
    this.objElement.style.position = 'relative';
    this.objElement.style.overflow = 'hidden';

    this.objLi = this.objElement.getElementsByTagName('li');
    this.height = this.objElement.offsetHeight; // li 엘리먼트가 움직이는 높이(외부에서 변경가능)
    this.num = this.objLi.length; // li 엘리먼트의 총 갯수
    this.totalHeight = this.height*this.num; // 총 높이
    this.scrollspeed = 2; // 스크롤되는 px
    this.objTop = new Array(); // 각 li의 top 위치를 저장
    this.timer = null;
    
    for(var i=0; i<this.num; i++){
        this.objLi[i].style.position = 'absolute';
        this.objTop[i] = this.height*i;
        this.objLi[i].style.top = this.objTop[i]+"px";
    }
}

textScroll.prototype.move = function(){
    for(var i=0; i<this.num; i++) {
        this.objTop[i] = this.objTop[i] - this.scrollspeed;
        this.objLi[i].style.top = this.objTop[i]+"px";
    }
    if(this.objTop[0]%this.height == 0){
        this.jump();
    }else{
        clearTimeout(this.timer);
        this.timer = setTimeout(this.name+".move()",50);
    }
}

textScroll.prototype.jump = function(){
    for(var i=0; i<this.num; i++){
        if(this.objTop[i] == this.height*(-2)){
            this.objTop[i] = this.objTop[i] + this.totalHeight;
            this.objLi[i].style.top = this.objTop[i]+"px";
        }
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(this.name+".move()",3000);
}

textScroll.prototype.start = function() {
    this.timer = setTimeout(this.name+".move()",3000);
}


//지도
function initMap() {
        // Create a map object and specify the DOM element for display.
        var uluru = {lat: 37, lng: 126}
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 30, lng: 32},
          scrollwheel: false,
          zoom: 3,
          styles:[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "stylers": [
                {
                  "color": "#b4e9fb"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#b4e9fb"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#b9f3ec"
                }
              ]
            }
          ]
        });
        
        var myIcon = new google.maps.MarkerImage("/img/marker.png", null, null, null, new google.maps.Size(36,58));
 
        var marker0 = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: myIcon,
            title : "한국"
        });
        //오소영 바보 
        var content0 = "전체 환율";
         
        // 마커를 클릭했을 때의 이벤트
        var infowindow0 = new google.maps.InfoWindow({ content: content0});
        google.maps.event.addListener(marker0, "click", function() {
            infowindow0.open(map,marker0);
        });
        google.maps.event.addListener(marker0, "dblclick", function() { 
            location.href='/trade/board';
        });
        
        var marker1 = new google.maps.Marker({
            position: {lat: 40.6643, lng: -73.9385},
            map: map,
            icon: myIcon,
            title : "미국"
        });
        
        /*var count = parseInt('<% @post.id %>');
        var cnt1 = parseInt('0');
        
        //머니 값마다 글 올라오면 글 카운트
        for (var i = 0; i < count; i++) { //게시글갯수만큼 반복
          if (document.getElementById('<% @post.money %>').value == "usd") {
            cnt1++;
          }
        }
        
        var content1 = cnt1.toString();*/
        //여긴 외화고유의 value값을 넣을것! (카운트로 cnt++)
        var content1 = "미국 환율"

        // 마커를 클릭했을 때의 이벤트
        var infowindow1 = new google.maps.InfoWindow({ content: content1});
        google.maps.event.addListener(marker1, "click", function() {
            infowindow1.open(map,marker1);
        });
        google.maps.event.addListener(marker1, "dblclick", function() { 
            location.href='/trade/board/usd';
        });
        
        var marker2 = new google.maps.Marker({
            position: {lat: 52.5234051, lng: 14.411399},
            map: map,
            icon: myIcon,
            title : "유럽연합"
        });
        
        var content2 = "유로 환율";
        var infowindow2 = new google.maps.InfoWindow({ content: content2});
        google.maps.event.addListener(marker2, "click", function() {
            infowindow2.open(map,marker2);
        });
        google.maps.event.addListener(marker2, "dblclick", function() { 
            location.href='/trade/board/eur';
        });
        
        var marker3 = new google.maps.Marker({
            position: {lat: 36.204824, lng: 138.252924},
            map: map,
            icon: myIcon,
            title : "일본"
        });
        
        var content3 = "일본 환율";
        var infowindow3 = new google.maps.InfoWindow({ content: content3});
        google.maps.event.addListener(marker3, "click", function() {
            infowindow3.open(map,marker3);
        });
        google.maps.event.addListener(marker3, "dblclick", function() { 
            location.href='/trade/board/jpy';
        });
        
        var marker4 = new google.maps.Marker({
            position: {lat: 35.86166, lng: 104.19539699999996},
            map: map,
            icon: myIcon,
            title : "중국"
        });
        
        var content4 = "중국 환율";
        var infowindow4 = new google.maps.InfoWindow({ content: content4});
        google.maps.event.addListener(marker4, "click", function() {
            infowindow4.open(map,marker4);
        });
        google.maps.event.addListener(marker4, "dblclick", function() { 
            location.href='/trade/board/cny';
        });
        
        var marker5 = new google.maps.Marker({
            position: {lat: 22.4060834, lng: 114.1201536},
            map: map,
            icon: myIcon,
            title : "홍콩"
        });
        
        var content5 = "홍콩 환율";
        var infowindow5 = new google.maps.InfoWindow({ content: content5});
        google.maps.event.addListener(marker5, "click", function() {
            infowindow5.open(map,marker5);
        });
        google.maps.event.addListener(marker5, "dblclick", function() { 
            location.href='/trade/board/hkd';
        });
        
        var marker6 = new google.maps.Marker({
            position: {lat: 23.69781, lng: 120.960515},
            map: map,
            icon: myIcon,
            title : "대만"
        });
        
        var content6 = "대만 환율";
        var infowindow6 = new google.maps.InfoWindow({ content: content6});
        google.maps.event.addListener(marker6, "click", function() {
            infowindow6.open(map,marker6);
        });
        google.maps.event.addListener(marker6, "dblclick", function() { 
            location.href='/trade/board/twd';
        });
        
        var marker7 = new google.maps.Marker({
            position: {lat: 51.5073509, lng: -0.1277583},
            map: map,
            icon: myIcon,
            title : "영국"
        });
        
        var content7 = "영국 환율";
        var infowindow7 = new google.maps.InfoWindow({ content: content7});
        google.maps.event.addListener(marker7, "click", function() {
            infowindow7.open(map,marker7);
        });
        google.maps.event.addListener(marker7, "dblclick", function() { 
            location.href='/trade/board/gbp';
        });
        
        var marker8 = new google.maps.Marker({
            position: {lat: 23.614, lng: 58.5908},
            map: map,
            icon: myIcon,
            title : "오만"
        });
        
        var content8 = "오만 환율";
        var infowindow8 = new google.maps.InfoWindow({ content: content8});
        google.maps.event.addListener(marker8, "click", function() {
            infowindow8.open(map,marker8);
        });
        google.maps.event.addListener(marker8, "dblclick", function() { 
            location.href='/trade/board/omr';
        });
        
        var marker9 = new google.maps.Marker({
            position: {lat: 45.423494, lng: -75.697933},
            map: map,
            icon: myIcon,
            title : "캐나다"
        });
        
        var content9 = "캐나다 환율";
        var infowindow9 = new google.maps.InfoWindow({ content: content9});
        google.maps.event.addListener(marker9, "click", function() {
            infowindow9.open(map,marker9);
        });
        google.maps.event.addListener(marker9, "dblclick", function() { 
            location.href='/trade/board/cad';
        });
        
        var marker10 = new google.maps.Marker({
            position: {lat: 46.818188, lng: 8.227512},
            map: map,
            icon: myIcon,
            title : "스위스"
        });
        
        var content10 = "스위스 환율";
        var infowindow10 = new google.maps.InfoWindow({ content: content10});
        google.maps.event.addListener(marker10, "click", function() {
            infowindow10.open(map,marker10);
        });
        google.maps.event.addListener(marker10, "dblclick", function() { 
            location.href='/trade/board/chf';
        });
       
       var marker11 = new google.maps.Marker({
            position: {lat: 59.6167, lng: 16.55},
            map: map,
            icon: myIcon,
            title : "스웨덴"
        });
        
        var content11 = "스웨덴 환율";
        var infowindow11 = new google.maps.InfoWindow({ content: content11});
        google.maps.event.addListener(marker11, "click", function() {
            infowindow11.open(map,marker11);
        });
        google.maps.event.addListener(marker11, "dblclick", function() { 
            location.href='/trade/board/sek';
        });
        
        var marker12 = new google.maps.Marker({
            position: {lat: -35.3069444, lng: 149.1242972},
            map: map,
            icon: myIcon,
            title : "호주"
        });
        
        var content12 = "호주 환율";
        var infowindow12 = new google.maps.InfoWindow({ content: content12});
        google.maps.event.addListener(marker12, "click", function() {
            infowindow12.open(map,marker12);
        });
        google.maps.event.addListener(marker12, "dblclick", function() { 
            location.href='/trade/board/aud';
        });
       
       var marker13 = new google.maps.Marker({
            position: {lat: -41.28648, lng: 174.776217},
            map: map,
            icon: myIcon,
            title : "뉴질랜드"
        });
        
        var content13 = "뉴질랜드 환율";
        var infowindow13 = new google.maps.InfoWindow({ content: content13});
        google.maps.event.addListener(marker13, "click", function() {
            infowindow13.open(map,marker13);
        });
        google.maps.event.addListener(marker13, "dblclick", function() { 
            location.href='/trade/board/nzd';
        });
       
        var marker14 = new google.maps.Marker({
            position: {lat: 50.065756, lng: 14.42076},
            map: map,
            icon: myIcon,
            title : "체코"
        });
        
        var content14 = "체코 환율";
        var infowindow14 = new google.maps.InfoWindow({ content: content14});
        google.maps.event.addListener(marker14, "click", function() {
            infowindow14.open(map,marker14);
        });
        google.maps.event.addListener(marker14, "dblclick", function() { 
            location.href='/trade/board/czk';
        });
        
        var marker15 = new google.maps.Marker({
            position: {lat: -28.675, lng: -71.542969},
            map: map,
            icon: myIcon,
            title : "칠레"
        });
        
        var content15 = "칠레 환율";
        var infowindow15 = new google.maps.InfoWindow({ content: content15});
        google.maps.event.addListener(marker15, "click", function() {
            infowindow15.open(map,marker15);
        });
        google.maps.event.addListener(marker15, "dblclick", function() { 
            location.href='/trade/board/clp';
        });
        
        var marker16 = new google.maps.Marker({
            position: {lat: 35.243322, lng: 38.963745},
            map: map,
            icon: myIcon,
            title : "터키"
        });
        
        var content16 = "터키 환율";
        var infowindow16 = new google.maps.InfoWindow({ content: content16});
        google.maps.event.addListener(marker16, "click", function() {
            infowindow16.open(map,marker16);
        });
        google.maps.event.addListener(marker16, "dblclick", function() { 
            location.href='/trade/board/try';
        });
        
        var marker17 = new google.maps.Marker({
            position: {lat: 47.0077031, lng: 103.791415},
            map: map,
            icon: myIcon,
            title : "몽골"
        });
        
        var content17 = "몽골 환율";
        var infowindow17 = new google.maps.InfoWindow({ content: content17});
        google.maps.event.addListener(marker17, "click", function() {
            infowindow17.open(map,marker17);
        });
        google.maps.event.addListener(marker17, "dblclick", function() { 
            location.href='/trade/board/mnt';
        });
        
        var marker18 = new google.maps.Marker({
            position: {lat: 31.7857, lng: 35.2007},
            map: map,
            icon: myIcon,
            title : "이스라엘"
        });
        
        var content18 = "이스라엘 환율";
        var infowindow18 = new google.maps.InfoWindow({ content: content18});
        google.maps.event.addListener(marker18, "click", function() {
            infowindow18.open(map,marker18);
        });
        google.maps.event.addListener(marker18, "dblclick", function() { 
            location.href='/trade/board/ils';
        });
        
        var marker19 = new google.maps.Marker({
            position: {lat: 56.26392, lng: 9.501785},
            map: map,
            icon: myIcon,
            title : "덴마크"
        });
        
        var content19 = "덴마크 환율";
        var infowindow19 = new google.maps.InfoWindow({ content: content19});
        google.maps.event.addListener(marker19, "click", function() {
            infowindow19.open(map,marker19);
        });
        google.maps.event.addListener(marker19, "dblclick", function() { 
            location.href='/trade/board/dkk';
        });
        
        var marker20 = new google.maps.Marker({
            position: {lat: 59.9138204, lng: 10.7387413},
            map: map,
            icon: myIcon,
            title : "노르웨이"
        });
        
        var content20 = "노르웨이 환율";
        var infowindow20 = new google.maps.InfoWindow({ content: content20});
        google.maps.event.addListener(marker20, "click", function() {
            infowindow20.open(map,marker20);
        });
        google.maps.event.addListener(marker20, "dblclick", function() { 
            location.href='/trade/board/nok';
        });
        
       var marker21 = new google.maps.Marker({
            position: {lat: 23.885942, lng: 45.079162},
            map: map,
            icon: myIcon,
            title : "사우디아라비아"
        });
        
        var content21 = "사우디아라비아 환율";
        var infowindow21 = new google.maps.InfoWindow({ content: content21});
        google.maps.event.addListener(marker21, "click", function() {
            infowindow21.open(map,marker21);
        });
        google.maps.event.addListener(marker21, "dblclick", function() { 
           location.href='/trade/board/sar';
        });
       
       var marker22 = new google.maps.Marker({
            position: {lat: 29.3697, lng: 47.9783},
            map: map,
            icon: myIcon,
            title : "쿠웨이트"
        });
        
        var content22 = "쿠웨이트 환율";
        var infowindow22 = new google.maps.InfoWindow({ content: content22});
        google.maps.event.addListener(marker22, "click", function() {
            infowindow22.open(map,marker22);
        });
        google.maps.event.addListener(marker22, "dblclick", function() { 
            location.href='/trade/board/kwd';
        });
        
        var marker23 = new google.maps.Marker({
            position: {lat: 26.2361, lng: 50.5831},
            map: map,
            icon: myIcon,
            title : "바레인"
        });
        var content23 = "바레인 환율";
        var infowindow23 = new google.maps.InfoWindow({ content: content23});
        google.maps.event.addListener(marker23, "click", function() {
            infowindow23.open(map,marker23);
        });
        google.maps.event.addListener(marker23, "dblclick", function() { 
            location.href='/trade/board/bhd';
        });
        
        var marker24 = new google.maps.Marker({
            position: {lat: 24.466667, lng: 54.366667},
            map: map,
            icon: myIcon,
            title : "아랍에미리트"
        });
        var content24 = "아랍에미리트 환율";
        var infowindow24 = new google.maps.InfoWindow({ content: content24});
        google.maps.event.addListener(marker24, "click", function() {
            infowindow24.open(map,marker24);
        });
        google.maps.event.addListener(marker24, "dblclick", function() { 
            location.href='/trade/board/aed';
        });
        
        var marker25 = new google.maps.Marker({
            position: {lat: 30.32221, lng: 35.47933},
            map: map,
            icon: myIcon,
            title : "요르단"
        });
        var content25 = "요르단 환율";
        var infowindow25 = new google.maps.InfoWindow({ content: content25});
        google.maps.event.addListener(marker25, "click", function() {
            infowindow25.open(map,marker25);
        });
        google.maps.event.addListener(marker25, "dblclick", function() { 
            location.href='/trade/board/jod';
        });
        
       var marker26 = new google.maps.Marker({
            position: {lat: 26.820553, lng: 30.802498},
            map: map,
            icon: myIcon,
            title : "이집트"
        });
        
        var content26 = "이집트 환율";
        var infowindow26 = new google.maps.InfoWindow({ content: content26});
        google.maps.event.addListener(marker26, "click", function() {
            infowindow26.open(map,marker26);
        });
        google.maps.event.addListener(marker26, "dblclick", function() { 
            location.href='/trade/board/egp';
        });
        
        var marker27 = new google.maps.Marker({
            position: {lat: 13.750000, lng: 100.516700},
            map: map,
            icon: myIcon,
            title : "태국"
        });
        
        var content27 = "태국 환율";
        var infowindow27 = new google.maps.InfoWindow({ content: content27});
        google.maps.event.addListener(marker27, "click", function() {
            infowindow27.open(map,marker27);
        });
        google.maps.event.addListener(marker27, "dblclick", function() { 
            location.href='/trade/board/thb';
        });
        
        var marker28 = new google.maps.Marker({
            position: {lat: 1.3644202, lng: 103.9915308},
            map: map,
            icon: myIcon,
            title : "싱가포르"
        });
        
        var content28 = "싱가포르 환율";
        var infowindow28 = new google.maps.InfoWindow({ content: content28});
        google.maps.event.addListener(marker28, "click", function() {
            infowindow28.open(map,marker28);
        });
        google.maps.event.addListener(marker28, "dblclick", function() { 
            location.href='/trade/board/sgd';
        });
        
        var marker29 = new google.maps.Marker({
            position: {lat: 4.210484, lng: 101.975716},
            map: map,
            icon: myIcon,
            title : "말레이시아"
        });
        
        var content29 = "말레이시아 환율";
        var infowindow29 = new google.maps.InfoWindow({ content: content29});
        google.maps.event.addListener(marker29, "click", function() {
            infowindow29.open(map,marker29);
        });
        google.maps.event.addListener(marker29, "dblclick", function() { 
            location.href='/trade/board/myr';
        });
        
        var marker30 = new google.maps.Marker({
            position: {lat: -6.211544, lng: 106.845172},
            map: map,
            icon: myIcon,
            title : "인도네시아"
        });
        
        var content30 = "인도네시아 환율";
        var infowindow30 = new google.maps.InfoWindow({ content: content30});
        google.maps.event.addListener(marker30, "click", function() {
            infowindow30.open(map,marker30);
        });
        google.maps.event.addListener(marker30, "dblclick", function() { 
            location.href='/trade/board/idr';
        });
        
        var marker31 = new google.maps.Marker({
            position: {lat: 25.354826, lng: 51.183884},
            map: map,
            icon: myIcon,
            title : "카타르"
        });
        var content31 = "카타르 환율";
        var infowindow31 = new google.maps.InfoWindow({ content: content31});
        google.maps.event.addListener(marker31, "click", function() {
            infowindow31.open(map,marker31);
        });
        google.maps.event.addListener(marker31, "dblclick", function() { 
            location.href='/trade/board/qar';
        });
        
        var marker32 = new google.maps.Marker({
            position: {lat: 48, lng: 68},
            map: map,
            icon: myIcon,
            title : "카자흐스탄"
        });
        var content32 = "카자흐스탄 환율";
        var infowindow32 = new google.maps.InfoWindow({ content: content32});
        google.maps.event.addListener(marker32, "click", function() {
            infowindow32.open(map,marker32);
        });
        google.maps.event.addListener(marker32, "dblclick", function() { 
            location.href='/trade/board/kzt';
        });
        
        var marker33 = new google.maps.Marker({
            position: {lat: 4.535277, lng: 114.727669},
            map: map,
            icon: myIcon,
            title : "브루나이"
        });
        
        var content33 = "브루나이 환율";
        var infowindow33 = new google.maps.InfoWindow({ content: content33});
        google.maps.event.addListener(marker33, "click", function() {
            infowindow33.open(map,marker33);
        });
        google.maps.event.addListener(marker33, "dblclick", function() { 
            location.href='/trade/board/bnd';
        });
        
        var marker34 = new google.maps.Marker({
            position: {lat: 28.635308, lng: 77.22496},
            map: map,
            icon: myIcon,
            title : "인도"
        });
        
        var content34 = "인도 환율";
        var infowindow34 = new google.maps.InfoWindow({ content: content34});
        google.maps.event.addListener(marker34, "click", function() {
            infowindow34.open(map,marker34);
        });
        google.maps.event.addListener(marker34, "dblclick", function() { 
            location.href='/trade/board/inr';
        });
        
        var marker35 = new google.maps.Marker({
            position: {lat: 30.37, lng: 69.34},
            map: map,
            icon: myIcon,
            title : "파키스탄"
        });
        
        var content35 = "파키스탄 환율";
        var infowindow35 = new google.maps.InfoWindow({ content: content35});
        google.maps.event.addListener(marker35, "click", function() {
            infowindow35.open(map,marker35);
        });
        google.maps.event.addListener(marker35, "dblclick", function() { 
            location.href='/trade/board/pkr';
        });
        
        var marker36 = new google.maps.Marker({
            position: {lat: 24, lng: 90},
            map: map,
            icon: myIcon,
            title : "방글라데시"
        });
        
        var content36 = "방글라데시 환율";
        var infowindow36 = new google.maps.InfoWindow({ content: content36});
        google.maps.event.addListener(marker36, "click", function() {
            infowindow36.open(map,marker36);
        });
        google.maps.event.addListener(marker36, "dblclick", function() { 
            location.href='/trade/board/bdt';
        });
        
        var marker37 = new google.maps.Marker({
            position: {lat: 14.5833333, lng: 120.9666667},
            map: map,
            icon: myIcon,
            title : "필리핀"
        });
        
        var content37 = "필리핀 환율";
        var infowindow37 = new google.maps.InfoWindow({ content: content37});
        google.maps.event.addListener(marker37, "click", function() {
            infowindow37.open(map,marker37);
        });
        google.maps.event.addListener(marker37, "dblclick", function() { 
            location.href='/trade/board/php';
        });
        
        var marker38 = new google.maps.Marker({
            position: {lat: 19.4326077, lng: -99.133208},
            map: map,
            icon: myIcon,
            title : "멕시코"
        });
        
        var content38 = "멕시코 환율";
        var infowindow38 = new google.maps.InfoWindow({ content: content38});
        google.maps.event.addListener(marker38, "click", function() {
            infowindow38.open(map,marker38);
        });
        google.maps.event.addListener(marker38, "dblclick", function() { 
            location.href='/trade/board/mxn';
        });
        
        var marker39 = new google.maps.Marker({
            position: {lat: -23.533300, lng: -46.616700},
            map: map,
            icon: myIcon,
            title : "브라질"
        });
        
        var content39 = "브라질 환율";
        var infowindow39 = new google.maps.InfoWindow({ content: content39});
        google.maps.event.addListener(marker39, "click", function() {
            infowindow39.open(map,marker39);
        });
        google.maps.event.addListener(marker39, "dblclick", function() { 
            location.href='/trade/board/brl';
        });
        
        var marker40 = new google.maps.Marker({
            position: {lat: 21.0241667, lng: 105.8411111},
            map: map,
            icon: myIcon,
            title : "베트남"
        });
        
        var content40 = "베트남 환율";
        var infowindow40 = new google.maps.InfoWindow({ content: content40});
        google.maps.event.addListener(marker40, "click", function() {
            infowindow40.open(map,marker40);
        });
        google.maps.event.addListener(marker40, "dblclick", function() { 
            location.href='/trade/board/vnd';
        });
        
        var marker41 = new google.maps.Marker({
            position: {lat: -25.7460186, lng: 28.1871204},
            map: map,
            icon: myIcon,
            title : "남아공"
        });
        
        var content41 = "남아공 환율";
        var infowindow41 = new google.maps.InfoWindow({ content: content41});
        google.maps.event.addListener(marker41, "click", function() {
            infowindow41.open(map,marker41);
        });
        google.maps.event.addListener(marker41, "dblclick", function() { 
            location.href='/trade/board/zar';
        });
        
        var marker42 = new google.maps.Marker({
            position: {lat: 61.52401, lng: 105.31875600000001},
            map: map,
            icon: myIcon,
            title : "러시아"
        });
        
        var content42 = "러시아 환율";
        var infowindow42 = new google.maps.InfoWindow({ content: content42});
        google.maps.event.addListener(marker42, "click", function() {
            infowindow42.open(map,marker42);
        });
        google.maps.event.addListener(marker42, "dblclick", function() { 
            location.href='/trade/board/rub';
        });
        
        var marker43 = new google.maps.Marker({
            position: {lat: 47.162494, lng: 19.503304},
            map: map,
            icon: myIcon,
            title : "헝가리"
        });
        
        var content43 = "헝가리 환율";
        var infowindow43 = new google.maps.InfoWindow({ content: content43});
        google.maps.event.addListener(marker43, "click", function() {
            infowindow43.open(map,marker43);
        });
        google.maps.event.addListener(marker43, "dblclick", function() { 
            location.href='/trade/board/huf';
        });
        
        var marker44 = new google.maps.Marker({
            position: {lat: 51.919438, lng: 19.145136},
            map: map,
            icon: myIcon,
            title : "폴란드"
        });
        
        var content44 = "폴란드 환율";
        var infowindow44 = new google.maps.InfoWindow({ content: content44});
        google.maps.event.addListener(marker44, "click", function() {
            infowindow44.open(map,marker44);
        });
        google.maps.event.addListener(marker44, "dblclick", function() { 
            location.href='/trade/board/pln';
        });
        
        
      }