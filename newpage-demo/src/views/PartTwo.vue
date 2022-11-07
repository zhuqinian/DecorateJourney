<template>
  <div class="Parttwopage">
    <div class="container">
      <div class="page" style="color: black; text-align: center" id="page1">
        <button class="button-right" @click="gotopage('page2')"></button>
        <Parttwo_01></Parttwo_01>
      </div>
      <div class="page" style="color: black; text-align: center" id="page2" >Page2
        <button class="button-left" @click="gotopage('page1')"></button>
        <button class="button-right" @click="gotopage('page3')"></button>
      </div>
      <div class="page" style="color: black; text-align: center" id="page3">Page3
        <button class="button-left" @click="gotopage('page2')"></button>

      </div>
    </div>
  </div>

</template>

<script setup>
import Parttwo_01 from "@/views/PartTwopage/Parttwo_01.vue";

function gotopage(pageid) {
  document.getElementById(pageid).scrollIntoView({ behavior: 'smooth' });
}





</script>

<style>
.Parttwopage{
  width: 100%;
  height: 100%;
  /*min-width: 100vw;*/
  /*min-height: 100vh;*/
  background-image: url("../assets/images/newAssets/banner-bg.jpg");
  background-position: center ;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
}
.container {
  display: flex;
  overflow-x: scroll;
  bottom: 0;
  overflow-y: hidden;
}
.page {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
}

.page:nth-child(1) {
  background: hsl(140deg, 50%, 100%);
}

.page:nth-child(2) {
  background: hsl(210deg, 50%, 50%);
}

.page:nth-child(3) {
  background: hsl(270deg, 50%, 50%);
}
.button-left{
  border: 0;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 3%;
  top: 45%;
  background:url("../src/assets/images/newAssets/go_left.png");
  background-size:cover;
  background-repeat: no-repeat;
  filter:contrast(30%);
  z-index: 999;
  cursor: pointer;
}
.button-right{
  border: 0;
  width: 100px;
  height: 100px;
  position: absolute;
  right: 3%;
  top: 45%;
  background:url("../src/assets/images/newAssets/go_right.png");
  background-size:cover;
  background-repeat: no-repeat;
  filter:contrast(30%);
  z-index: 999;
  cursor: pointer;
}
</style>