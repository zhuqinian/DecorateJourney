<!--html-->
<template>
  <div class="MainView">
    <div class="img_box">
      <img class="car" id="reveal-top" src="../assets/images/car/bmw2.png">
    </div>
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
.img_box{
  width: auto;
  top: 65%;
}
.car{
  width: 20%;
  height: 20%;
  transform: rotateY(180deg);
}
.car:before{
  width: 20%;
  height: 20%;
  transform: rotateY(180deg);
  left: 0;
  transition: 0.5s;
}
.car.active:before{
  left: 800px;
}
</style>