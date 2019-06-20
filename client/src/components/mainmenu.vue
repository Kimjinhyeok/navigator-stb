<template>         
<div id="wrapper">
  <div id="content">      
    <div class="sliderbg_menu">        
      <div class="logo md-layout md-alignment-center-left"><i class="icon-navigator-logo"></i><router-link to="/">The Navigator Seoul ST-B</router-link></div> 
      <nav id="menu">
      <ul>
          <li class="green"><a href="about.html" class="insidelink"><i class="fas fa-bible"></i><span>메세지</span></a></li>
          <li class="red"><a href="services.html" class="insidelink"><i class="fas fa-praying-hands"></i><span>기도</span></a></li>
          <li class="blue"><a href="blog.html" class="insidelink"><i class="fas fa-heart"></i><span>교제</span></a></li>
          <li class="orange"><a href="portfolio.html" class="insidelink"><i class="icon-witnessing"></i><span>증거</span></a></li>
          <li class="purple"><a href="gallery.html" class="insidelink"><i class="fas fa-camera-retro"></i><span>앨범</span></a></li>
          <li class="yellow"><a href="clients.html" class="insidelink"><i class="fas fa-file-alt"></i><span>자료실</span></a></li>
      </ul>
      </nav>
      <div class="clear"></div>  
    </div>          
  </div>
</div>
          
</template>
<script>
export default {
  name : 'mainmenu',
  data () {
    return {};
  }
}
</script>
<style scoped>
#menu ul li {
  padding: 3.5% 0;
}
#menu ul li a i {
  font-size: 80px;
}

#menu ul li a span {
  margin-top: 5px;
}
</style>
