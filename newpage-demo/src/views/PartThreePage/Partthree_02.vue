<!--html-->
<template>
  <div class="Partthree_02">
    <img class="co2" src="../../assets/images/PartThree/CO2.png">
    <img class="ch4" src="../../assets/images/PartThree/CH4.png">
    <img class="no2" src="../../assets/images/PartThree/NO2.png">

    <div class="P3_01chart">
      <iframe src='https://flo.uri.sh/visualisation/11781762/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
    </div>
  </div>
</template>

<!--JavaScript-->
<script>

</script>

<!--css-->
<style>
.Partthree_02 {
  width: 100%;
  height: 100%;
}
.P3_01chart{
  width: 800px;
  height: 600px;
  transform: scale(1.4,1.4);
  top: 130px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
}
.Partthree_02 img{
  position: absolute;
  z-index: 3;
}
.co2{
  width: 350px;
  left: 200px;
  top: 220px;
}
.ch4{
  left: 300px;
  top: 560px;
}
.no2{
  right: 200px;
  top: 360px;
}
</style>