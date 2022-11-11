<!--html-->
<template>
  <div class="Indexpage">
    <div class="InexView">
      <div class="partone">
        <img src="../assets/images/newAssets/indexbg_11.png" @click="gotoPartonepage()">
        <img src="../assets/images/newAssets/indexbg_10.png" @click="gotoPartonepage()" >
      </div>
      <div class="parttwo">
        <img src="../assets/images/newAssets/indexbg_21.png" @click="gotoParttwopage()">
        <img src="../assets/images/newAssets/indexbg_20.png" @click="gotoParttwopage()" style="bottom: 305px">
      </div>
      <div class="partthree">
        <img src="../assets/images/newAssets/indexbg_31.png" @click="gotoPartthreepage()">
        <img src="../assets/images/newAssets/indexbg_30.png" @click="gotoPartthreepage()" style="bottom: 305px">
      </div>
      <div class="partfour">
        <img src="../assets/images/newAssets/indexbg_41.png" @click="gotoPartfourpage()">
        <img src="../assets/images/newAssets/indexbg_40.png" @click="gotoPartfourpage()" style="bottom: 305px">      </div>

    </div>
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
function gotoPartonepage (){
  router.push({
        path: "/PartOne",
      }
  )
}
function gotoParttwopage (){
  router.push({
        path: "/Parttwo",
      }
  )
}
function gotoPartthreepage (){
  router.push({
        path: "/Partthree",
      }
  )
}
function gotoPartfourpage (){
  router.push({
        path: "/Partfour",
      }
  )
}
</script>

<!--css-->
<style scoped>

.indeximg01 img{
  width: 100%;
  height: 100%;
}

.partone{
  position: absolute;
  width: 420px;
  height: 400px;
  right: 25%;
  top: -80px;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  /*overflow: visible;*/
}
.partone img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor: pointer;
  transition: 1s;
}
.partone img:hover{
  opacity: 0;
}
.parttwo{
  position: absolute;
  width: 310px;
  height: 300px;
  top: 60px;
  right: 6%;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  /*overflow: visible;*/
}
.parttwo img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor: pointer;
  transition: 1s;
}
.parttwo img:hover{
  opacity: 0;
}
.partthree{
  position: absolute;
  width: 310px;
  height: 300px;
  top: 350px;
  right: 27%;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  /*overflow: visible;*/
}
.partthree img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor: pointer;
  transition: 1s;
}
.partthree img:hover{
  opacity: 0;
}
.partfour{
  position: absolute;
  width: 430px;
  height: 400px;
  top: 460px;
  right: 0;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  /*overflow: visible;*/
}
.partfour img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor: pointer;
  transition: 1s;
}
.partfour img:hover{
  opacity: 0;
}
/*.partone img{*/
/*  width: 300px;*/
/*  height: 300px;*/
/*  cursor: pointer;*/
/*  transition: 1s;*/
/*}*/
/*.partone img:hover{*/
/*  opacity: 0;*/
/*  content: url("src/assets/images/newAssets/indexbg_11.png");*/
/*}*/
.jump_map img{
  width: 300px;
  height: 300px;
  cursor: pointer;
  transition: 1s;
}
.jump_map img:hover{
  opacity: 0;
}
.InexView {
  width: 100%;
  height: 90%;
  top: 50px;
  position: relative;
  text-align: center;
  border-radius: 6px;
}

.Indexpage{

  width: 100%;
  height: 100%;
  /*background-image: url("../assets/images/background/indexbg_1.png");*/
  /*background-position: center ;*/
  /*background-repeat: no-repeat;*/
  /*background-size:100% 100%;*/

}
</style>