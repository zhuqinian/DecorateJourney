<template>
  <div class="Partonepage">
    <div class="container">
      <div class="page" style="color: black; text-align: center" id="page1">Page1
        <button class="button-right" @click="gotopage('page2')"></button>
        <h1 style="color: #262626">这里是PartOnepage</h1>
      </div>
      <div class="page" style="color: black; text-align: center" id="page2" >Page2
        <button class="button-left" @click="gotopage('page1')"></button>
        <button class="button-right" @click="gotopage('page3')"></button>
      </div>
      <div class="page" style="color: black; text-align: center" id="page3" >Page3
        <button class="button-left" @click="gotopage('page2')"></button>
        <button class="button-right" @click="gotopage('page4')"></button>
      </div>
      <div class="page" style="color: black; text-align: center" id="page4" >Page4
        <button class="button-left" @click="gotopage('page3')"></button>
        <button class="button-right" @click="gotopage('page5')"></button>
      </div>
      <div class="page" style="color: black; text-align: center" id="page5" >Page5
        <button class="button-left" @click="gotopage('page4')"></button>
        <button class="button-right" @click="gotopage('page6')"></button>
      </div>
      <div class="page" style="color: black; text-align: center" id="page6" >Page6
        <button class="button-left" @click="gotopage('page5')"></button>
        <button class="button-right" @click="gotopage('page7')"></button>
      </div>
      <div class="page" style="color: black; text-align: center" id="page7">Page7
        <button class="button-left" @click="gotopage('page6')"></button>
        <Partone_03></Partone_03>
      </div>
    </div>
    <div class="moveview">
      <img class="car_red"   src="../assets/images/newAssets/car_red.png">
      <!--      <img class="car_PL"   src="../assets/images/newAssets/car_PL.png">-->
      <img class="clouds01"   src="../assets/images/newAssets/cloud.png">
      <img class="clouds02"   src="../assets/images/newAssets/cloud.png">

      <img class="buildings01"   src="../assets/images/newAssets/building_01.png">
      <img class="buildings02"   src="../assets/images/newAssets/building_02.png">
      <img class="buildings03"   src="../assets/images/newAssets/building_high.png">
      <img class="buildings04"   src="../assets/images/newAssets/school.png">
      <img class="buildings05"   src="../assets/images/newAssets/autosale.png">

      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">
      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">

      <!--      <img class="cao01"   src="../assets/images/newAssets/cao01.png" v-for="i in 300">-->


      <!--      &lt;!&ndash;      <img class="tree01"   src="../assets/images/newAssets/tree01.png">&ndash;&gt;-->
      <!--      <img class="tree01"   src="../assets/images/newAssets/tree01.png">-->
    </div>
  </div>
  
</template>

<script setup>
import { ref, nextTick } from "vue";
// import Partone_01 from "@/views/Partone_01.vue";
// import Partone_02 from "@/views/Partone_02.vue";
import Partone_03 from "@/views/Partone_03.vue";

function gotopage(pageid) {
  document.getElementById(pageid).scrollIntoView({ behavior: 'smooth' });
}

</script>

<style>
.Partonepage{
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
  bottom: 50px;
}
.page {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
}

.page:nth-child(1) {
  background: hsl(140deg, 50%, 50%);
}

.page:nth-child(2) {
  background: hsl(210deg, 50%, 50%);
}

.page:nth-child(3) {
  background: hsl(270deg, 50%, 50%);
}
.page:nth-child(4) {
  background: hsl(140deg, 50%, 50%);
}

.page:nth-child(5) {
  background: hsl(210deg, 50%, 50%);
}

.page:nth-child(6) {
  background: hsl(270deg, 50%, 50%);
}
.page:nth-child(7) {
  background: hsl(140deg, 50%, 50%);
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
  z-index: 999;
  cursor: pointer;
}
.moveview{
  width: 100%;
  height: 300px;
  top: 100%;
  position: absolute;
  text-align: center;
}
.car_red{
  position: absolute;
  bottom: 300px;
  left: 47%;
  width: 150px;
  height: 100px;
  margin: 0;
  padding: 0;
  /*transform:scaleX(-1);*/
  z-index: 1;


  animation: shake  0.28s  infinite alternate;

}
.car_PL{
  position: absolute;
  bottom: 300px;
  right: 300px;
  width: 150px;
  height: 100px;
  margin: 0;
  padding: 0;
  /*transform:scaleX(-1);*/
  z-index: 1;

  animation: shake  0.3s  infinite alternate;

}
.clouds01{
  position: absolute;
  bottom: 800px;
  left: -250px;
  width: 250px;
  height: 200px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  30s linear infinite ;
  animation-delay: 4.34s;
  filter: brightness(0.70);
}
.clouds02{
  position: absolute;
  bottom: 800px;
  left: -250px;
  width: 250px;
  height: 200px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  30s linear infinite ;
  animation-delay: 6.34s;
  filter: brightness(0.70);
}
.buildings01{
  position: absolute;
  bottom: 295px;
  left: -290px;
  width: 250px;
  height: 200px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  13s linear infinite ;
  animation-delay: 0.34s
}
.buildings02{
  position: absolute;
  bottom: 295px;
  left: -290px;
  width: 250px;
  height: 300px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  13s linear infinite ;
  animation-delay: 1.76s
}
.buildings03{
  position: absolute;
  bottom: 270px;
  left: -290px;
  width: 350px;
  height: 600px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  13s linear infinite ;
  animation-delay: 2.3s
}
.buildings04{
  position: absolute;
  bottom: 288px;
  left: -330px;
  width: 350px;
  height: 300px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  13s linear infinite ;
  animation-delay: 3.3s;
  filter: brightness(0.90);

}
.buildings05{
  position: absolute;
  bottom: 300px;
  left: -300px;
  width: 100px;
  height: 130px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 2;
  animation: roadmove  8s linear infinite ;
  animation-delay: 3.6s;
  filter: brightness(0.90);
  box-shadow: #262626;

}
.tree01{
  bottom: 120px;
  right: 1000px;
  width: 80px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;
  animation: roadmove  8s linear infinite ;
  animation-delay: 1.23s;
  margin-left: -130px;


}
.tree11{
  bottom: 120px;
  right: 1000px;
  width: 80px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  8s linear infinite ;
  animation-delay: 1.24s;
  filter: brightness(0.7);
  margin-left: -100px;

}
.tree02{
  bottom: 120px;
  right: 1000px;
  width: 80px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;

  animation: roadmove  6s linear infinite ;

}
.cao01{
  position: relative;
  bottom: 120px;
  width: 20px;
  height: 30px;
  right: 400px;
  margin: 0;
  padding: 0;
  z-index: 1;
  animation: roadmove  20s linear infinite ;
  /*animation-delay: 2.23s*/


}
.road-object{
  position: absolute;
  width: 100%;
  top: 50%;
}


@keyframes shake {
  0% {
    transform: translate(0px, 0px);/*开始位置*/
  }
  50% {
    transform: translate(0px, 4px); /* 可配置跳动方向 */

  }
  100% {
    transform: translate(0px, 0px);/*结束位置*/
  }
}

@keyframes roadmove {
  0% {
    transform: translate(3000px, 0px);/*开始位置*/
  }
  50% {
    transform: translate(-500px, 0px); /* 可配置跳动方向 */

  }
  100% {
    transform: translate(-500px, 0px);/*结束位置*/
  }

}
</style>