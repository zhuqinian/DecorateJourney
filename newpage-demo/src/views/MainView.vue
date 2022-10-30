<!--html-->
<template>
  <div class="MainView">
    <div class="banner-txt">
      <h1>"装点旅途"</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam quas non at similique molestiae dolorum natus.</p>
      <button class="button-main" @click="gotoSection">一键定制</button>
    </div>
    <p class="moveview">
      <img class="car_red"   src="../assets/images/newAssets/car_red.png">
      <img class="car_PL"   src="../assets/images/newAssets/car_PL.png">
      <img class="buildings01"   src="../assets/images/newAssets/building_01.png">
      <img class="buildings02"   src="../assets/images/newAssets/building_02.png">
      <img class="buildings03"   src="../assets/images/newAssets/building_high.png">
      <img class="tree01"   src="../assets/images/newAssets/tree01.png">
      <img class="tree02-1"   src="../assets/images/newAssets/tree02.png">
      <img class="tree02-2"   src="../assets/images/newAssets/tree02.png">
      <img class="tree02-3"   src="../assets/images/newAssets/tree02.png">
      <img class="tree02-4"   src="../assets/images/newAssets/tree02.png">
<!--      &lt;!&ndash;      <img class="tree01"   src="../assets/images/newAssets/tree01.png">&ndash;&gt;-->
<!--      <img class="tree01"   src="../assets/images/newAssets/tree01.png">-->

    </p>
    <p class="road-object"></p>
  </div>
</template>

<!--JavaScript-->
<script>

</script>

<!--css-->
<style scoped>
.MainView {
  width: 100%;
  height: 100%;
}
.banner-txt{
  top: 200px;
  margin-left: 38%;
  width: 500px;
  text-align: center;
}
.banner-txt h1{
  font-size: 50px;
  font-weight: bold;
  color: black;
}
.banner-txt p{
  font-size: 18px;
  font-weight: normal;
  color: black;
}
.button-main{
  width: 150px;
  padding: 10px 0;
  margin: 60px 10px;
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
  text-align: center;
}
.car_red{
  position: absolute;
  top:700px;
  width: 150px;
  height: 100px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;


  animation: shake  0.28s  infinite alternate;

}
.car_PL{
  left: 300px;
  top:700px;
  width: 150px;
  height: 100px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;

  animation: shake  0.3s  infinite alternate;

}
.buildings01{
  position: absolute;
  left: -250px;
  top:610px;
  width: 250px;
  height: 200px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  4s linear infinite ;
  animation-delay: 0.34s


}
.buildings02{
  position: absolute;
  left: -250px;
  top:515px;
  width: 250px;
  height: 300px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  4s linear infinite ;
  animation-delay: 1.76s


}
.buildings03{
  position: absolute;
  left: -250px;
  top:422px;
  width: 250px;
  height: 400px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 0;
  animation: roadmove  4s linear infinite ;
  animation-delay: 2.3s


}
.tree01{
  position: absolute;
  left: 300px;
  top:645px;
  width: 150px;
  height: 160px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;
  animation: roadmove  3s linear infinite ;
  animation-delay: 0.89s


}
.tree02-1{
  position: absolute;
  left: 150px;
  top:682px;
  width: 80px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;

  animation: roadmove  3s linear infinite ;

}
.tree02-2{
  position: absolute;
  left: 80px;
  top:682px;
  width: 80px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;

  animation: roadmove  3s linear infinite ;
}
.tree02-3{
  position: absolute;
  left: 10px;
  top:682px;
  width: 80px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;

  animation: roadmove  3s linear infinite ;
}
.tree02-4{
  position: absolute;
  left: -60px;
  top:682px;
  width: 80px;
  height: 120px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  z-index: 1;

  animation: roadmove  3s linear infinite ;
}

.road-object{
  position: absolute;
  width: 100%;
  top:790px;

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
    transform: translate(-500px, 0px);/*开始位置*/
  }
  50% {
    transform: translate(2500px, 0px); /* 可配置跳动方向 */

  }
  100% {
    transform: translate(2500px, 0px);/*结束位置*/
  }

}

</style>