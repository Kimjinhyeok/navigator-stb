<template>
<div id="wrapper">
  <div id="content">      
    <div class="sliderbg_menu">        
      <div class="logo md-layout md-alignment-center-left"><i class="icon-navigator-logo"></i><router-link to="/">The Navigator Seoul ST-B</router-link></div> 
        <div class="index md-layout md-alignment-center-center">
    <div class="index-menu md-layout md-layout-item md-gutter">
      <md-button class="md-layout-item">소개</md-button>
      <md-button class="md-layout-item">소식</md-button>
      <md-button class="md-layout-item">오시는길</md-button>
      <md-button class="md-layout-item">로그인</md-button>
    </div>
    <div class="navigator-symbol md-layout-item"><i class="icon-navigator-wheel"></i></div>
    <div class="index-guide-map md-layout md-alignment-center-center">
      <div id="map"></div>
    </div>
  </div>
    </div>          
  </div>
</div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {};
  },
  mounted () {    
    var container = document.getElementById("map");
    var options = {
      center: new daum.maps.LatLng(37.603442, 127.061172), //지도의 중심좌표.
      level: 2
    }
    var map = new daum.maps.Map(container, options);

    var markerPotition = new daum.maps.LatLng(37.603442, 127.061172);
    var marker = new daum.maps.Marker({
      position : markerPotition
    })
    marker.setMap(map);
    var infowindow = new daum.maps.InfoWindow({
		    content : '<div style="padding:5px;color:black;">한국 네비게이토 ST-B<br>서울특별시 동대문구 화랑로32길 179</div>' // 인포윈도우에 표시할 내용
    });
    infowindow.open(map, marker);
  }
}
</script>
<style scoped>
  .index {
    display: flex;
    flex-direction: column;
  }
  .index .index-menu {
    width: 100%;
    border-top: 1px solid #ffffff29;
    border-bottom: 1px solid #ffffff29;
    margin-bottom: 10px;
  }
  .index .index-menu .md-button {    
    font-size: 18px;
    min-width: 50px;
  }
  .navigator-symbol {
    font-size: 180px;
  }
  .index-guide-map  {
    width: 100%;
    padding: 10px;
  }
  .index-guide-map div#map {
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }
</style>
