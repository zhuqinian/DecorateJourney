<!--html-->
<template>
  <div class="CarRunning">
    <div class="moveview">
      <img class="car_red"   src="@/assets/images/car/car.gif">
<!--      <img class="clouds01"   src="@/assets/images/newAssets/cloud.png">-->
<!--      <img class="clouds02"   src="@/assets/images/newAssets/cloud.png">-->

      <img class="buildings01"   src="@/assets/images/background/citybg01.png">
      <img class="buildings02"   src="@/assets/images/background/citybg02.png">
<!--      <img class="buildings03"   src="@/assets/images/newAssets/building_high.png">-->
<!--      <img class="buildings04"   src="@/assets/images/newAssets/school.png">-->
<!--      <img class="buildings05"   src="@/assets/images/newAssets/autosale.png">-->

      <img class="tree01"   src="@/assets/images/background/charge.png">
      <img class="tree01"   src="@/assets/images/background/charge.png">
      <img class="tree01"   src="@/assets/images/background/charge.png">

      <!--      <img class="tree11"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree01"   src="@/assets/images/newAssets/Ytree01.png">-->
<!--      <img class="tree11"   src="@/assets/images/newAssets/Ytree01.png">-->

      <!--      <img class="cao01"   src="../assets/images/newAssets/cao01.png" v-for="i in 300">-->


      <!--      &lt;!&ndash;      <img class="tree01"   src="../assets/images/newAssets/tree01.png">&ndash;&gt;-->
      <!--      <img class="tree01"   src="../assets/images/newAssets/tree01.png">-->
    </div>
  </div>
</template>

<!--JavaScript-->
<script>

</script>

<!--css-->
<style>
.CarRunning {
  width: 100%;
  height: 100%;
  z-index: 20;
}
.moveview{
  width: 100%;
  height: 300px;
  top: 0;
  position: absolute;
  text-align: center;
}
.car_red{
  position: absolute;
  bottom: 195px;
  left: 47%;
  width: 290px;
  height: 300px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;


  /*animation: shake  0.28s  infinite alternate;*/

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
  bottom: 225px;
  left: -1100px;
  width: 1050px;
  height: 600px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: citymove  33s linear infinite ;
  animation-delay: 0.34s
}
.buildings02{
  position: absolute;
  bottom: 205px;
  left: -1100px;
  width: 1050px;
  height: 600px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: citymove  33s linear infinite ;
  animation-delay: 15s
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
  right: 1200px;
  width: 120px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;
  animation: roadmove  8s linear infinite ;
  animation-delay: 1.23s;
  margin-left: 5px;


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
@keyframes citymove {
  0% {
    transform: translate(400%, 0px);/*开始位置*/
  }
  50% {
    transform: translate(175%, 0px); /* 可配置跳动方向 */

  }
  100% {
    transform: translate(-50%, 0px);/*结束位置*/
  }

}
</style>