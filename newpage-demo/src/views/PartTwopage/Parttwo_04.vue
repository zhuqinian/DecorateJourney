<!--html-->
<template>
  <div class="partonepage_4">
<!--    <h1 style="color: black">这里是flying effect</h1>-->
    <img class="title_04" src="../../assets/images/PartTwo/pagetwo04title.png">
<!--    <img class="title_chart04" src="../../assets/images/PartTwo/P2_02char_ttitle.png">-->
    <div class="chart_204">
      <el-carousel trigger="click" height="550px" interval="10000">
        <el-carousel-item v-for="item in iframeUrl" :key="item">
          <img class="title_chart04" :src = "item.idtitle">
          <iframe :src = "item.idView"  class = "iframeBox" scrolling="no" frameborder="0" align=""></iframe>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<!--JavaScript-->
<script setup>
const iframeUrl = [
  { id: 0, idView: "https://flo.uri.sh/visualisation/11779724/embed", idtitle:'src/assets/images/PartTwo/P2_04charttitle_01.png' },
  { id: 1, idView: "https://flo.uri.sh/visualisation/11779505/embed" ,idtitle:'src/assets/images/PartTwo/P2_04charttitle_02.png'},


]

</script>

<!--css-->

<style>

.partonepage_4{
  width: 100%;
  height: 100%;
}
.background_04{
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
.title_04{
  position: absolute;
  width: 750px;
  height: 100%;
  top: -120px;
  right: -50px;
  float: right;
  z-index: 2;

}
.chart_204 img{
  position: absolute;
  width: 400px;
  height: 170px;
  top: -400px;
  bottom: 0;
  right: 0;
  left: 90px;
  margin: auto;
  z-index: 4;
}
.chart_204{
  width: 970px;
  height: 545px;
  top: 180px;
  left: 135px;
  /*border: 3px solid #262626;*/
  border-radius: 30px;
  z-index: 1003;
  /*background: #F8F8FF;*/
  overflow: visible;
}
.chart_204 iframe{
  width: 80%;
  height: 80%;
  left: 0;
  right: 0;
  top: 100px;
  bottom: 0;
  margin: auto;
}
.chart_204:deep(el-carousel){
  overflow: visible;
}
</style>
