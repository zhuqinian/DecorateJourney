<!--html-->
<template>
  <div class="Indexpage">
    <div class="InexView">
<!--      <div class="banner-txt" style="bottom: 30px">-->
<!--        <h1>"装点旅途"</h1>-->
<!--      </div>-->
      <div class="indeximg01">
        <img src="src/assets/images/newAssets/indexcar.png">
      </div>
      <div class="indeximg02">
        <img src="src/assets/images/newAssets/indexline.png">
      </div>
      <div class="titleimg">
        <img src="src/assets/images/newAssets/indextext.png">
      </div>
<!--      <div class="textbg">-->
<!--        <img src="src/assets/images/newAssets/indexjumpmap.png">-->
<!--      </div>-->
<!--      <div class="jump_map">-->
<!--&lt;!&ndash;        <button class="button-main" @click="gotoPartonepage()">"桩"点旅途</button>&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="button-main" @click="gotoParttwopage()">装“电”旅途</button>&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="button-main" @click="gotoPartthreepage()">装点“绿”途</button>&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="button-main" @click="gotoSection('partnerSection')">总结</button>&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="button-main" @click="gotoIndexpage()">back</button>&ndash;&gt;-->

<!--      </div>-->

    </div>
    <div class="partone">
      <img src="src/assets/images/newAssets/indexbg_11.png" @click="gotoPartonepage()">
      <img src="src/assets/images/newAssets/indexbg_10.png" @click="gotoPartonepage()" >
    </div>
    <div class="parttwo">
      <img src="src/assets/images/newAssets/indexbg_21.png" @click="gotoParttwopage()">
      <img src="../assets/images/newAssets/indexbg_20.png" @click="gotoParttwopage()" style="bottom: 305px">
    </div>
    <div class="partthree">
      <img src="src/assets/images/newAssets/indexbg02.png" @click="gotoPartthreepage()" style="bottom: 100px">
    </div>
    <div class="partfour">
      <img src="src/assets/images/newAssets/indexbg04.png" @click="gotoPartfourpage()" style="bottom: 120px">
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
function gotoIndexpage (){
  router.push({
        path: "/",
      }
  )
}
</script>

<!--css-->
<style scoped>
.jump_map{
  position: absolute;
  width: 1000px;
  height: auto;
  left: 790px;
  top: 60px;
  right: 0;
  bottom: 0;
  margin: auto;
  /*visibility: hidden;*/
}
.indeximg01{
  width: 500px;
  position: absolute;
  top: -50px;
  float: left;
  left: 330px;
}
.indeximg02{
  width: 500px;
  position: absolute;
  top: -10px;
  float: left;
  left: 182px;
}
.indeximg01 img{
  width: 100%;
  height: 100%;
}
.titleimg{
  top: 250px;
  float: left;
  left: 80px;
}

.partone{
  position: absolute;
  width: 400px;
  height: 500px;
  right: 30%;
  top: 0;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  overflow: visible;
}
.partone img{
  float: top;
  position: absolute;
  width: 480px;
  height: 800px;
  top: -160px;
  cursor: pointer;
  transition: 1s;
}
.partone img:hover{
  opacity: 0;
}
.parttwo{
  position: absolute;
  width: 400px;
  height: 500px;
  right: 7%;
  top: 0;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  overflow: visible;
}
.parttwo img{
  float: top;
  position: absolute;
  width: 480px;
  height: 800px;
  top: -160px;
  cursor: pointer;
  transition: 1s;
}
.parttwo img:hover{
  opacity: 0;
}
.partthree{
  position: absolute;
  width: 400px;
  height: 400px;
  right: 30%;
  bottom: 0;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  overflow: visible;
}
.partthree img{
  float: top;
  position: absolute;
  width: 480px;
  height: 700px;
  top: -170px;
  cursor: pointer;
  transition: 1s;
}
.partthree img:hover{
  opacity: 0;
}
.partfour{
  position: absolute;
  width: 400px;
  height: 400px;
  right: 7%;
  bottom: 0;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  overflow: visible;
}
.partfour img{
  float: bottom;
  position: absolute;
  width: 480px;
  height: 800px;
  top: -250px;
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
  background-image: url("../assets/images/background/green.png");
  background-position: center ;
  background-repeat: no-repeat;
  background-size:100% 100%;
  position: fixed;

  top: 0;
}
</style>