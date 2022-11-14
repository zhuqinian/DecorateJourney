<template>
  <div class="Partonepage">
    <div class="container">
      <div class="page" style="color: black; text-align: center" id="page0">
<!--        <button class="button-left" @click="gotopage('page5')"></button>-->
        <button class="button-go01" @click="gotopage('page1')"></button>
        <Partone_0></Partone_0>
      </div>
      <div class="page" style="color: black; text-align: center" id="page1">
<!--        <button class="button-left" @click="gotopage('page5')"></button>-->
        <button class="button-right" @click="gotopage('page2')"></button>
        <Partone_01></Partone_01>
      </div>
      <div class="page" style="color: black; text-align: center" id="page2" >
        <button class="button-left" @click="gotopage('page1')"></button>
        <button class="button-right" @click="gotopage('page3')"></button>
        <Partone_02 ></Partone_02>
<!--        <iframe src="https://dycharts.com/xshow/index.html?id=c_a7f928624bdd1ebb9b84a5baacf3ecab" width="600" height="510" scrolling="no" frameborder="0" align=""></iframe>-->
      </div>
      <div class="page" style="color: black; text-align: center" id="page3" >
        <button class="button-left" @click="gotopage('page2')"></button>
        <button class="button-right" @click="gotopage('page4')"></button>
        <Partone_03></Partone_03>
      </div>
      <div class="page" style="color: black; text-align: center" id="page4" >
        <button class="button-left" @click="gotopage('page3')"></button>
        <button class="button-right" @click="gotopage('page5')"></button>
        <Partone_04></Partone_04>
      </div>
      <div class="page" style="color: black; text-align: center" id="page5" >
        <button class="button-left" @click="gotopage('page4')"></button>
<!--        <button class="button-right" @click="gotoIndexpage('/','JumpSection')"></button>-->
        <Partone_05></Partone_05>
      </div>
<!--      <div class="page" style="color: black; text-align: center" id="page6" >-->
<!--        <button class="button-left" @click="gotopage('page5')"></button>-->
<!--        <button class="button-right" @click="gotoIndexpage()"></button>-->
<!--&lt;!&ndash;        <Partone_06></Partone_06>&ndash;&gt;-->
<!--      </div>-->
<!--      <div class="page" style="color: black; text-align: center" id="page7">-->
<!--        <button class="button-left" @click="gotopage('page6')"></button>-->
<!--        <button class="button-right" @click="gotoIndexpage()"></button>-->
<!--        <Partone_07></Partone_07>-->

<!--      </div>-->
    </div>
      <CarRunning></CarRunning>
  </div>
  
</template>

<script setup>
import {ref, nextTick, defineEmits} from "vue";
// import Partone_01 from "@/views/Partone_01.vue";
// import Partone_02 from "@/views/Partone_02.vue";
import Partone_0 from "@/views/PartOnepage/Partone_0.vue";

import Partone_01 from "@/views/PartOnepage/Partone_01.vue";
import Partone_02 from "@/views/PartOnepage/Partone_02.vue";
import Partone_03 from "@/views/PartOnepage/Partone_03.vue";
import Partone_04 from "@/views/PartOnepage/Partone_04.vue";
import Partone_05 from "@/views/PartOnepage/Partone_05.vue";
import CarRunning from "@/views/elements/CarRunning.vue";

// import usePub_assets from "../../src/assets/pubUse_newassets.js";

import router from "@/router";


function gotopage(pageid) {
  document.getElementById(pageid).scrollIntoView({ behavior: 'smooth' });
}

function gotoIndexpage (path,id){
  var path = path;
  var id = id;
  localStorage.setItem('toId',id);
  router.push(path);
}


</script>

<style>
.car{
  position: absolute;
  z-index: 100;
}
.Partonepage{
  width: 100%;
  height: 100%;
  /*min-width: 100vw;*/
  /*min-height: 100vh;*/
  background-image: url("../assets/images/background/PartOnebg.png");
  background-position: center ;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  overflow: hidden;
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
  height: 101vh;
  flex-shrink: 0;
  overflow: hidden;
}

.page:nth-child(1) {
  background: url("../assets/images/background/bgcolor.png");
  z-index: 101;
}
.page:nth-child(2) {
  background: url("../assets/images/background/bgcolor.png");
  z-index: 101;
}

.page:nth-child(3) {
  /*background: hsl(210deg, 50%, 50%);*/
  /*z-index: 101;*/

}

.page:nth-child(4) {
  /*background: hsl(270deg, 50%, 50%);*/
  /*z-index: 101;*/

}
.page:nth-child(5) {
  /*background: hsl(140deg, 50%, 50%);*/
  /*z-index: 101;*/

}

.page:nth-child(6) {
  background: url("../assets/images/background/bgcolor.png");
  z-index: 101;

}

.page:nth-child(7) {
  background: url("../assets/images/background/bgcolor.png");
}
/*.page:nth-child(7) {*/
/*  !*background: hsl(140deg, 50%, 50%);*!*/
/*}*/

.button-go01{
  border: 0;
  width: 400px;
  height: 430px;
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  bottom: 0;
  margin: auto;
  background:url("@/assets/images/PartOne/P1page0_img.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  filter:brightness(70%);
  z-index: 1002;
  cursor: pointer;
  transition: 1s;
}
.button-go01:hover{
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
  z-index: 1002;
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
  z-index: 1002;
  cursor: pointer;
}

</style>