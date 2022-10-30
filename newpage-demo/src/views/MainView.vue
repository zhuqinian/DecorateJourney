<!--html-->
<template>
  <div class="MainView">
    <p class="moveview">
      <img class="moveimg01"   src="../assets/images/newAssets/dog.png">
    </p>
    <img class="moveimg02"   src="../assets/images/newAssets/after.png">

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
.moveview{
  text-align: center;
}
.moveimg01{
  position: absolute;
  top:700px;
  width: 150px;
  height: 100px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);

  animation: shake  0.2s  infinite alternate;

}
.moveimg02{
  position: absolute;
  top:700px;
  width: 400px;
  height: 200px;
  margin: 0;
  padding: 0;
  transform:scaleX(-1);
  animation: roadmove  2s linear infinite ;

}
@keyframes shake {
  0% {
    transform: translate(0px, 0px);/*开始位置*/
  }
  50% {
    transform: translate(0px, 10px); /* 可配置跳动方向 */

  }
  100% {
    transform: translate(0px, 0px);/*结束位置*/
  }
}

@keyframes roadmove {
  0% {
    transform: translate(-200px, 0px);/*开始位置*/
  }
  50% {
    transform: translate(2000px, 0px); /* 可配置跳动方向 */

  }
  100% {
    transform: translate(2000px, 0px);/*结束位置*/
  }

}

</style>