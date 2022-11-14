<!--html-->
<template>
  <div class="partonepage_3">
    <!--    <h1 style="color: black">这里是flying effect</h1>-->
<!--    <img class="background_03" src="../../assets/images/PartOne/pageone_bg.png">-->
    <img class="title_03" src="../../assets/images/PartOne/pageone03_title_new.png">
    <div class="chart_103">
      <el-carousel trigger="click" height="850px" interval="10000">
        <el-carousel-item v-for="item in iframeUrl" :key="item">
          <img class="title_chart103" :src = "item.idtitle" :id="item.id">
          <iframe :src = "item.idView"  class = "iframeBox" scrolling="no" frameborder="0" align=""></iframe>
        </el-carousel-item>
      </el-carousel>
<!--      <iframe src="https://dycharts.com/xshow/index.html?id=26ce08b0fb8664e7fdb20106fe467fbc"  scrolling="no" frameborder="0" align=""></iframe>-->
    </div>
  </div>
</template>

<!--JavaScript-->
<script setup>
var span = document.querySelectorAll('span');
const iframeUrl = [
  { id: 0, idView: "https://flo.uri.sh/visualisation/11780959/embed" ,idtitle:"src/assets/images/PartOne/PO_02_charttitle01.png" ,chartid:"P1chart01"},
  { id: 1, idView: "https://flo.uri.sh/visualisation/11798438/embed" ,idtitle:"src/assets/images/PartOne/PO_02_charttitle01.png", chartid:"P1chart02"},


]

</script>

<!--css-->

<style>

.partonepage_3 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.title_03{
  position: absolute;
  width: 100%;
  height: 115%;
  top: -60px;
  right: -50px;
  float: right;
  z-index: 1001;
}
.chart_103{
  width: 870px;
  height: 945px;
  top: 40px;
  left: 135px;
  /*border: 3px solid #262626;*/
  border-radius: 30px;
  z-index: 1003;
  /*background: #F8F8FF;*/
  overflow: visible;

}
.chart_103 iframe{
  position: absolute;
  width: 90%;
  height: 90%;
  left: 0;
  right: 0;
  top: 0;
  bottom: -60px;
  margin: auto;
}
.title_chart103{
  width: 400px;
  top: -30px;
}

</style>
