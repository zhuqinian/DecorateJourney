<template>
  <div class="Partthreepage">
    <div class="container">
      <div class="page" style="color: black; text-align: center" id="page0">
<!--        <button class="button-left" @click="gotopage('page4')"></button>-->
        <button class="button-go03" @click="gotopage('page1')"></button>
        <Partone_0></Partone_0>
      </div>
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
<!--        <button class="button-right" @click="gotopage('page1')"></button>-->
        <Partthree_04></Partthree_04>
      </div>
<!--      <div class="page" style="color: black; text-align: center" id="page5" >-->
<!--        <button class="button-left" @click="gotopage('page4')"></button>-->
<!--        <button class="button-right" @click="gotopage('page1')"></button>-->
<!--      </div>-->
    </div>
    <div class="car">
      <CarRunning></CarRunning>
    </div>
  </div>

</template>

<script setup>
import Partone_0 from "@/views/PartOnepage/Partone_0.vue";

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
.car{
  position: absolute;
  z-index: 100;
}
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
  z-index: 101;
}
.page:nth-child(2) {
  background: url("../assets/images/background/bgcolor.png");
}

.page:nth-child(3) {
  background: url("../assets/images/background/bgcolor.png");

}

.page:nth-child(4) {
  background: url("../assets/images/background/bgcolor.png");
  z-index: 101;

}
.page:nth-child(5) {
  background: url("../assets/images/background/bgcolor.png");
  z-index: 101;

}
.button-go03{
  border: 0;
  width: 400px;
  height: 430px;
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  bottom: 0;
  margin: auto;
  background:url("@/assets/images/PartThree/P3page0_img.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  filter:brightness(70%);
  z-index: 1002;
  cursor: pointer;
  transition: 1s;
}
.button-go03:hover{
  filter:brightness(120%);

}
.button-left{
  border: 0;
  width: 400px;
  height: 400px;
  position: absolute;
  left: -3%;
  top: 25%;
  background:url("@/assets/images/newAssets/goleft_new.png");
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
  background:url("@/assets/images/newAssets/goright_new.png");
  background-size:cover;
  background-repeat: no-repeat;
  /*filter:contrast(0%);*/
  z-index: 1000;
  cursor: pointer;
}
</style>