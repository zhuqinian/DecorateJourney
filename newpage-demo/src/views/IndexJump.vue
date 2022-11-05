<!--html-->
<template>
  <div class="Indexpage">
    <div class="InexView">
<!--      <div class="banner-txt" style="bottom: 30px">-->
<!--        <h1>"装点旅途"</h1>-->
<!--      </div>-->
      <div class="titleimg">
        <img src="src/assets/images/newAssets/indextitle.png">
      </div>
<!--      <div class="textbg">-->
<!--        <img src="src/assets/images/newAssets/indexjumpmap.png">-->
<!--      </div>-->
      <div class="jump_map">
<!--        <button class="button-main" @click="gotoPartonepage()">"桩"点旅途</button>-->
<!--        <button class="button-main" @click="gotoParttwopage()">装“电”旅途</button>-->
<!--        <button class="button-main" @click="gotoPartthreepage()">装点“绿”途</button>-->
<!--        <button class="button-main" @click="gotoSection('partnerSection')">总结</button>-->
<!--        <button class="button-main" @click="gotoIndexpage()">back</button>-->
        <div class="partone">
          <img src="src/assets/images/newAssets/indexbg_11.png" @click="gotoPartonepage()">
          <img src="src/assets/images/newAssets/indexbg_10.png" @click="gotoPartonepage()" style="bottom: 305px">

        </div>
        <div class="parttow">
          <img src="src/assets/images/newAssets/indexbg_21.png" @click="gotoParttwopage()">
          <img src="../assets/images/newAssets/indexbg_20.png" @click="gotoParttwopage()" style="bottom: 305px">        </div>
        <div class="partthree">
          <img src="src/assets/images/newAssets/indexbg02.png" @click="gotoPartthreepage()" style="bottom: 100px">
        </div>
        <div class="partfour">
          <img src="src/assets/images/newAssets/indexbg04.png" @click="gotoPartfourpage()" style="bottom: 120px">
        </div>

      </div>

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
  left: 590px;
  top: 60px;
  right: 0;
  bottom: 0;
  margin: auto;
  /*visibility: hidden;*/
}
.titleimg{
  bottom: 200px;
  float: left;
  left: 80px;
}
.textbg{
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  z-index: 2;
}
.button-main{
  position: absolute;
  left: 10px;
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
  transition: 0.5s;
}
.button-main:hover{
  background: #00FFFF;
  transition: 0.5s;
}
.partone{
  position: absolute;
  width: 295px;
  height: 180px;
  left: 100px;
  border-radius: 30px;
  display:inline-block;
  align-items: center;
  overflow: visible;
}
.parttow{
  position: absolute;
  width: 295px;
  height: 180px;
  left: 430px;
  border-radius: 30px;
  /*border: 1px solid gray;*/
  display:inline-block;
  /*overflow: hidden;*/

}
.partthree{
  position: absolute;
  width: 295px;
  height: 180px;
  left: 100px;
  top: 340px;
  border-radius: 30px;
  /*border: 1px solid gray;*/
  display:inline-block;
  background-color: royalblue;
  /*overflow: hidden;*/

}
.partfour{
  position: absolute;
  width: 295px;
  height: 180px;
  left: 430px;
  top: 350px;

  border-radius: 30px;
  /*border: 1px solid gray;*/
  display:inline-block;
  background-color: purple;
  /*overflow: hidden;*/

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