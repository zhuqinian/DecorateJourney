<template>
  <div class="Partthreepage">
    <div class="container">
      <div class="page" style="color: black; text-align: center" id="page1">
        <button class="button-right" @click="gotopage('page2')"></button>
        <Partthree_01></Partthree_01>
      </div>
      <div class="page" style="color: black; text-align: center" id="page2" >
        <button class="button-left" @click="gotopage('page1')"></button>
        <button class="button-right" @click="gotopage('page3')"></button>
        <Partthree_02></Partthree_02>
      </div>
      <div class="page" style="color: black; text-align: center" id="page3">
        <button class="button-left" @click="gotopage('page2')"></button>
        <button class="button-right" @click="gotopage('page4')"></button>
        <Partthree_03></Partthree_03>
      </div>
      <div class="page" style="color: black; text-align: center" id="page4" >
        <button class="button-left" @click="gotopage('page3')"></button>
        <button class="button-right" @click="gotopage('page5')"></button>
        <Partthree_04></Partthree_04>
      </div>
      <div class="page" style="color: black; text-align: center" id="page5" >
        <button class="button-left" @click="gotopage('page4')"></button>
        <button class="button-right" @click="gotopage('page1')"></button>
      </div>
    </div>
    <CarRunning></CarRunning>
  </div>

</template>

<script setup>
import Partthree_01 from "@/views/PartThreePage/Partthree_01.vue";
import Partthree_02 from "@/views/PartThreePage/Partthree_02.vue";
import Partthree_03 from "@/views/PartThreePage/Partthree_03.vue";
import Partthree_04 from "@/views/PartThreePage/Partthree_04.vue";

import Parttwo_02 from "@/views/PartTwopage/Parttwo_03.vue";
import CarRunning from "@/views/elements/CarRunning.vue";


function gotopage(pageid) {
  document.getElementById(pageid).scrollIntoView({ behavior: 'smooth' });
}





</script>

<style>
.Partthreepage{
  width: 100%;
  height: 100%;
  /*min-width: 100vw;*/
  /*min-height: 100vh;*/
  background-image: url("../assets/images/background/PartOnebg.png");
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
  background: url("../assets/images/background/bgcolor.png");
}

.page:nth-child(2) {
  background: url("../assets/images/background/bgcolor.png");

}

.page:nth-child(3) {
  background: url("../assets/images/background/bgcolor.png");

}
.page:nth-child(4) {
  background: url("../assets/images/background/bgcolor.png");

}
.button-left{
  border: 0;
  width: 400px;
  height: 400px;
  position: absolute;
  left: -3%;
  top: 25%;
  background:url("../src/assets/images/newAssets/goleft_new.png");
  background-size:cover;
  background-repeat: no-repeat;
  /*filter:contrast(10%);*/
  z-index: 999;
  cursor: pointer;
}
.button-right{
  border: 0;
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  top: 25%;
  background:url("../src/assets/images/newAssets/goright_new.png");
  background-size:cover;
  background-repeat: no-repeat;
  /*filter:contrast(0%);*/
  z-index: 1000;
  cursor: pointer;
}
</style>