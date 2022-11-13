<template>
  <div class="Parttwopage">
    <div class="container">
      <div class="page" style="color: black; text-align: center" id="page1">
        <button class="button-right" @click="gotopage('page2')"></button>
        <Parttwo_01></Parttwo_01>
      </div>
      <div class="page" style="color: black; text-align: center" id="page2" >
        <button class="button-left" @click="gotopage('page1')"></button>
        <button class="button-right" @click="gotopage('page3')"></button>
        <Parttwo_02></Parttwo_02>
      </div>
      <div class="page" style="color: black; text-align: center" id="page3">
        <button class="button-left" @click="gotopage('page2')"></button>
        <button class="button-right" @click="gotopage('page4')"></button>
        <Parttwo_03></Parttwo_03>
      </div>
      <div class="page" style="color: black; text-align: center" id="page4" >
        <button class="button-left" @click="gotopage('page3')"></button>
        <button class="button-right" @click="gotopage('page5')"></button>
        <Parttwo_04></Parttwo_04>
      </div>
      <div class="page" style="color: black; text-align: center" id="page5" >
        <button class="button-left" @click="gotopage('page4')"></button>
        <button class="button-right" @click="gotoIndexpage()"></button>
        <Parttwo_05></Parttwo_05>
      </div>
    </div>
    <CarRunning></CarRunning>
  </div>

</template>

<script setup>
import Parttwo_01 from "@/views/PartTwopage/Parttwo_01.vue";
import Parttwo_02 from "@/views/PartTwopage/Parttwo_02.vue";
import Parttwo_03 from "@/views/PartTwopage/Parttwo_03.vue";
import Parttwo_04 from "@/views/PartTwopage/Parttwo_04.vue";
import Parttwo_05 from "@/views/PartTwopage/Parttwo_05.vue";
import CarRunning from "@/views/elements/CarRunning.vue";


import router from "@/router";
window.onmousewheel=document.onmousewheel=(e)=>{
  var input = document.getElementById(container.page)
  if(e.wheelDelta<0){
    console.log(input)
  }else if(e.wheelDelta>0){
    console.log("鼠标滚轮前滚")
  }

}

function gotopage(pageid) {
  document.getElementById(pageid).scrollIntoView({ behavior: 'smooth' });
}

function gotoIndexpage (){
  router.push({
        path: "/",
      }
  )}



</script>

<style>
.Parttwopage{
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
}

.page:nth-child(2) {
}

.page:nth-child(3) {
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