<!--html-->
<template>
  <div class="partonepage_3">
    <!--    <h1 style="color: black">这里是flying effect</h1>-->
<!--    <img class="background_03" src="../../assets/images/PartOne/pageone_bg.png">-->
    <img class="title_03" src="../../assets/images/PartOne/pageone03_title_new.png">
    <div class="chart_103">
      <el-carousel trigger="click" height="550px">
        <el-carousel-item v-for="item in iframeUrl" :key="item">
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
  { id: 0, idView: "https://dycharts.com/xshow/index.html?id=26ce08b0fb8664e7fdb20106fe467fbc" },
  { id: 1, idView: "https://dycharts.com/xshow/index.html?id=1b29636cc272c8a04d3b52f707a9f3ed" },


]

</script>

<!--css-->

<style>

.partonepage_3 {
  width: 100%;
  height: 100%;
}
.background_03{
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
.title_03{
  position: absolute;
  width: 100%;
  height: 115%;
  top: -60px;
  right: -50px;
  float: right;
  z-index: 2;

}
.chart_103{
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
.chart_103 iframe{
  width: 120%;
  height: 120%;
  left: 0;
  right: 0;
  top: -45px;
  bottom: 0;
  margin: auto;
}
</style>
