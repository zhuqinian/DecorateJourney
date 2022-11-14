<template>
  <div class="Partfourpage">
    <div class="container">
      <div class="page" style="color: black; text-align: center" id="page0">
      <!--        <button class="button-left" @click="gotopage('page5')"></button>-->
      <button class="button-go04" @click="gotopage('page1')"></button>
      <Partone_0></Partone_0>
    </div>
      <div class="page" style="color: black; text-align: center" id="page1">
        <button class="button-right" @click="gotopage('page2')"></button>
        <Partfour_01></Partfour_01>
      </div>
      <div class="page" style="color: black; text-align: center" id="page2" >
        <button class="button-left" @click="gotopage('page1')"></button>
        <button class="button-right" @click="gotopage('page3')"></button>
        <Partfour_02></Partfour_02>
      </div>
      <div class="page" style="color: black; text-align: center" id="page3">Page3
        <button class="button-left" @click="gotopage('page2')"></button>
        <button class="button-right" @click="gotopage('page4')"></button>

      </div>
<!--      <div class="page" style="color: black; text-align: center" id="page4" >Page4-->
<!--        <button class="button-left" @click="gotopage('page3')"></button>-->
<!--        <button class="button-right" @click="gotopage('page5')"></button>-->
<!--      </div>-->
<!--      <div class="page" style="color: black; text-align: center" id="page5" >Page5-->
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
import Partfour_01 from "@/views/PartFourpage/Partfour_01.vue";
import Partfour_02 from "@/views/PartFourpage/Partfour_02.vue";

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
.Partfourpage{
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
}

.page:nth-child(3) {
}
.page:nth-child(4) {
}
.button-go04{
  border: 0;
  width: 400px;
  height: 430px;
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  bottom: 0;
  margin: auto;
  background:url("@/assets/images/ParFour/P4page0_img.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  filter:brightness(70%);
  z-index: 1002;
  cursor: pointer;
  transition: 1s;
}
.button-go04:hover{
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