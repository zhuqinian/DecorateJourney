<!--html-->
<template>
  <div class="Partthree_04">
    <img class="p3_story_img" src="../../assets/images/PartThree/P3_story_img.png">
    <button class="P3_story01_button" @click="story01_begin()" id="button_01"></button>
    <button class="P3_story02_button" @click="story02_begin()" id="button_02"></button>
    <button class="P3_story03_button" @click="story03_begin()" id="button_03"></button>
    <button class="P3_story04_button" @click="story04_begin()" id="button_04"></button>

    <button class="back_button" @click="gotoIndexpage('/','JumpSection')" id="button_05"></button>


    <div class="P3_story">
      <img src="../../assets/images/PartThree/1.png" id="story01">
      <img src="../../assets/images/PartThree/2.png" id="story02">
      <img src="../../assets/images/PartThree/3.png" id="story03">
      <img src="../../assets/images/PartThree/story_end.png" id="story04">


    </div>
  </div>
</template>

<!--JavaScript-->
<script setup>
import router from "@/router";

function gotoIndexpage (path,id){
  var path = path;
  var id = id;
  localStorage.setItem('toId',id);
  router.push(path);
}
function story01_begin(){
  document.getElementById('story01').style.animation =  "storymove  0.8s ease forwards";
  // document.getElementById('story02').style.animation =  "storymove  1s 0.5s ease forwards ";
  document.getElementById('button_01').style.visibility = "hidden";
  document.getElementById('button_02').style.visibility = "visible";

}
function story02_begin(){
  document.getElementById('story01').style.visibility = "hidden";
  document.getElementById('story02').style.animation =  "storymove  0.8s  ease forwards ";
  // document.getElementById('story04').style.animation =  "storymove  1s ease forwards";
  document.getElementById('button_02').style.visibility = "hidden";
  document.getElementById('button_03').style.visibility = "visible";

}
function story03_begin(){
  document.getElementById('story02').style.visibility = "hidden";
  document.getElementById('story03').style.animation =  "storymove  0.8s  ease forwards ";
  // document.getElementById('story04').style.animation =  "storymove  1s ease forwards";
  document.getElementById('button_03').style.visibility = "hidden";
  document.getElementById('button_04').style.visibility = "visible";

}
function story04_begin(){
  document.getElementById('story03').style.visibility = "hidden";
  document.getElementById('story04').style.animation =  "storymove  0.8s  ease forwards ";
  // document.getElementById('story04').style.animation =  "storymove  1s ease forwards";
  document.getElementById('button_04').style.visibility = "hidden";
  document.getElementById('button_05').style.visibility = "visible";

}
// const flag01 = true
// const flag02 = true
// const flag03 = true

// window.onmousewheel=document.onmousewheel=(e)=>{
//   // ws = self.getAttribute('div','id')
//   if(e.wheelDelta<0 && flag01 ){
//     story01_begin()
//     const flag01 = false
//   }
//
//   if( e.wheelDelta<0 && flag02){
//     story02_begin()
//     const flag02 = false
//
//   }
//
//   if (e.wheelDelta<0 && flag03){
//     story03_begin()
//     const flag03 = false
//
//   }
//
// }
</script>

<!--css-->
<style>
.Partthree_04 {
  width: 100%;
  height: 100%;
}
.P3_story01_button{
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0;
  right: 400px;
  top: 500px;
  bottom: 0;
  margin: auto;
  z-index: 1;
  border: 0;
  background: url("../../assets/images/newAssets/story_button.png");
  background-size: contain;
  background-repeat: no-repeat;
  animation: button  5s linear infinite forwards;
  cursor: pointer;

}
.P3_story02_button{
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0;
  right: 400px;
  top: 500px;
  bottom: 0;
  margin: auto;
  z-index: 1;
  border: 0;
  background: url("../../assets/images/newAssets/story_button.png");
  background-size: contain;
  background-repeat: no-repeat;
  visibility: hidden;
  animation: button  5s linear infinite forwards;
  cursor: pointer;

}
.P3_story03_button{
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0;
  right: 400px;
  top: 500px;
  bottom: 0;
  margin: auto;
  z-index: 1;
  border: 0;
  background: url("../../assets/images/newAssets/story_button.png");
  background-size: contain;
  background-repeat: no-repeat;
  visibility: hidden;
  animation: button  5s linear infinite forwards;
  cursor: pointer;

}
.P3_story04_button{
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0;
  right: 400px;
  top: 500px;
  bottom: 0;
  margin: auto;
  z-index: 1;
  border: 0;
  background: url("../../assets/images/newAssets/story_button.png");
  background-size: contain;
  background-repeat: no-repeat;
  visibility: hidden;
  animation: button  5s linear infinite forwards;
  cursor: pointer;

}
.back_button{
  position: absolute;
  width: 150px;
  height: 150px;
  left: 0;
  right: 400px;
  top: 500px;
  bottom: 0;
  margin: auto;
  z-index: 1;
  border: 0;
  background: url("../../assets/images/newAssets/back_button.png");
  background-size: contain;
  background-repeat: no-repeat;
  visibility: hidden;
  /*animation: button  5s linear infinite forwards;*/
  cursor: pointer;
}
.p3_story_img{
  width: 650px;
  height: 700px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30px;
  right: 0;

}
.P3_story{
  width: 900px;
  height: 800px;
  float: right;
  right: 10%;
  /*border: 4px solid lightblue;*/
  border-radius: 30px;
  z-index: 0;
}
.P3_story img{
  width: 930px;
  top: 120%;
  height: auto;
  /*float: right;*/
  /*right: 10%;*/
  /*border: 4px solid lightblue;*/
  /*border-radius: 30px;*/
}
.P3_story :nth-child(1){
  position: absolute;
  /*width: 1200px;*/
  right: 10px;
}
.P3_story :nth-child(2){
  position: absolute;
  /*width: 1200px;*/
  right: 10px;
}
.P3_story :nth-child(3){
  position: absolute;
  /*width: 1400px;*/
  right: -20px;
}
.P3_story :nth-child(4){
  position: absolute;
  width: 900px;
  left: 20px;
}

@keyframes storymove {
  0% {
    transform: translate(0, 0);/*开始位置*/
  }
  /*50% {*/
  /*  transform: translate(0, px); !* 可配置跳动方向 *!*/

  /*}*/
  100% {
    transform: translate(0, -880px);/*结束位置*/
  }

}
@keyframes moveup {
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 50%;

  }
  100% {
    opacity: 0;
  }

}
@keyframes button {
  100% {
    transform: rotate(360deg);
  }

}
</style>