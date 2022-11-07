<!--html-->
<template>
  <div class="MainView">
    <div class="banner-txt">
      <h1>"装点旅途"</h1>
      <p>新能源汽车作为一种发展前景广阔的绿色交通工具，是开展电能替代、挖掘交通减碳潜力、提升交通电气化水平的重要手段，能够有效降低我国对进口原油的依赖程度，也是兑现“碳达峰、碳中和”承诺的重要途径，新能源汽车已经成为一个重要的国家级发展战略产业</p>
      <div class="jump_map">
        <!--      <button class="button-main" @click="gotoSection('PartOne-1')">"桩"点旅途</button>-->
        <!--      <button class="button-main" @click="gotoSection('PartTwo')">装“电”旅途</button>-->
        <!--      <button class="button-main" @click="gotoSection('PartThree')">装点“绿”途</button>-->
        <!--      <button class="button-main" @click="gotoSection('partnerSection')">总结</button>-->
        <button class="button-main" @click="gotoIndexpage()">Index</button>
      </div>
    </div>
<!--    <div class="moveview">-->
<!--      <img class="car_red"   src="../assets/images/newAssets/car_red.png">-->
<!--&lt;!&ndash;      <img class="car_PL"   src="../assets/images/newAssets/car_PL.png">&ndash;&gt;-->
<!--      <img class="clouds01"   src="../assets/images/newAssets/cloud.png">-->
<!--      <img class="clouds02"   src="../assets/images/newAssets/cloud.png">-->

<!--      <img class="buildings01"   src="../assets/images/newAssets/building_01.png">-->
<!--      <img class="buildings02"   src="../assets/images/newAssets/building_02.png">-->
<!--      <img class="buildings03"   src="../assets/images/newAssets/building_high.png">-->
<!--      <img class="buildings04"   src="../assets/images/newAssets/school.png">-->
<!--      <img class="buildings05"   src="../assets/images/newAssets/autosale.png">-->

<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="../assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="../assets/images/newAssets/Ytree01.png">-->

<!--&lt;!&ndash;      <img class="cao01"   src="../assets/images/newAssets/cao01.png" v-for="i in 300">&ndash;&gt;-->


<!--      &lt;!&ndash;      &lt;!&ndash;      <img class="tree01"   src="../assets/images/newAssets/tree01.png">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;      <img class="tree01"   src="../assets/images/newAssets/tree01.png">&ndash;&gt;-->
<!--    </div>-->
<!--    <p class="road-object">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>-->

  </div>
</template>

<!--JavaScript-->
<script setup>
import { defineEmits } from "vue"
import router from "@/router";

const emit = defineEmits(["SectionJump"]);
function gotoSection(section){
  emit("SectionJump",section);
}
function gotoIndexpage (){
  router.push({
        path: "/Indexpage",
      }
  )
}
</script>

<!--css-->
<style scoped>
.MainView {
  width: 100%;
  height: 100%;
  /*overflow: hidden;*/

}
.banner-txt{
  top: 200px;
  margin-left: 38%;
  width: 500px;
  text-align: center;
  z-index: 1;
}
.banner-txt h1{
  font-size: 50px;
  font-weight: bold;
  color: black;
  margin-bottom: 50px;
}
.banner-txt p{
  font-family: 'Roboto Condensed', sans-serif;
  text-align: left;
  font-size: 16px;
  line-height: 1.8em;
  color: #777;
  text-indent: 2em;
}
.jump_map{
  position: absolute;
}
.button-main{
  width: 150px;
  height: auto;
  padding: 10px 0;
  top: 50px;
  left: 170px;
  margin: auto;
  border-radius: 25px;
  border: 0;
  background: gold;
  color: #262626;
  text-align: center;
  font-family: PingFang_font;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
}
.button-main:hover{
  background: #00FFFF;
  transition: 0.5s;

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