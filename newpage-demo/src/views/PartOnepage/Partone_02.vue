<!--html-->
<template>
  <div class="partonepage_2">
<!--    <h1 style="color: black">这里是flying effect</h1>-->
<!--    <img class="background_02" src="../../assets/images/PartOne/pageone_bg.png">-->
    <img class="title_02" src="../../assets/images/PartOne/pageone02_title_new.png">
    <div class="chart_102">
      <el-carousel trigger="click" height="550px">
        <el-carousel-item v-for="item in iframeUrl" :key="item">
          <iframe :src = "item.idView"  class = "iframeBox" scrolling="no" frameborder="0" align=""></iframe>
        </el-carousel-item>
      </el-carousel>
<!--      <iframe class="page-one_02chart" id="chartPage2" src="https://dycharts.com/xshow/index.html?id=73d8154c05ab3431e6c3e8925ae2d393"  scrolling="no" frameborder="0" align=""></iframe>-->
<!--      <iframe class="page-one_02chart" src="https://dycharts.com/xshow/index.html?id=f5776f3011bb19a7e86c6dd03d03bb33"  scrolling="no" frameborder="0" align=""></iframe>-->
    </div>
  </div>
</template>

<!--JavaScript-->
<script setup>
var span = document.querySelectorAll('span');
const iframeUrl = [
  { id: 0, idView: "https://dycharts.com/xshow/index.html?id=73d8154c05ab3431e6c3e8925ae2d393" },
  { id: 1, idView: "https://dycharts.com/xshow/index.html?id=f5776f3011bb19a7e86c6dd03d03bb33" },


]

</script>

<!--css-->

<style>

.partonepage_2 {
  width: 100%;
  height: 100%;
}
.background_02{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
}
.title_02{
  position: absolute;
  width: 100%;
  height: 115%;
  top: -60px;
  right: -50px;
  float: right;
  z-index: 2;

}
.chart_102{
  width: 52.8%;
  height: 59.7%;
  top: 180px;
  left: 135px;
  /*border: 3px solid #262626;*/
  border-radius: 30px;
  z-index: 1001;
  background: #F8F8FF;
  overflow: hidden;

}
.chart_102 iframe{
  width: 120%;
  height: 121%;
  left: 0;
  right: 0;
  top: -25px;
  bottom: 0;
  margin: auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>
