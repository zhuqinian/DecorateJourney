<!--html-->
<template>
  <div class="MainView">
    <div class="banner-txt">
      <img src="../assets/images/newAssets/HomeTitle.png">
    </div>
    <button class="button-down" @click="gotoSection('JumpSection')"></button>
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
.banner-txt img{
  position: absolute;
  top: 200px;
  bottom: 0;
  left: 200px;
  right: 0;
  margin: auto;
}
.button-down{
  border: 0;
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  top: 530px;
  background:url("@/assets/images/newAssets/godown.png");
  background-size:cover;
  background-repeat: no-repeat;
  /*filter:contrast(0%);*/
  z-index: 1000;
  cursor: pointer;
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