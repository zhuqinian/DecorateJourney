<!--html-->
<template>
  <div class="Indexpage">
    <div class="InexView">
      <div class="banner-txt" style="bottom: 30px">
        <h1>"装点旅途"</h1>
      </div>
      <div class="jump_map">
<!--        <button class="button-main" @click="gotoPartonepage()">"桩"点旅途</button>-->
<!--        <button class="button-main" @click="gotoParttwopage()">装“电”旅途</button>-->
<!--        <button class="button-main" @click="gotoPartthreepage()">装点“绿”途</button>-->
<!--        <button class="button-main" @click="gotoSection('partnerSection')">总结</button>-->
        <button class="button-main" @click="gotoIndexpage()">back</button>
        <div class="partone">
          <img src="src/assets/images/background/sunny.png" @click="gotoPartonepage()">
        </div>
        <div class="parttow">
          <img src="src/assets/images/background/sunny.png" @click="gotoParttwopage()">
        </div>
        <div class="partthree">
          <img src="src/assets/images/background/sunny.png" @click="gotoPartthreepage()">
        </div>
        <div class="partfour">
          <img src="src/assets/images/background/sunny.png" @click="gotoPartfourpage()">
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
  width: 1400px;
  height: auto;
  left: 0;
  top: 30px;
  right: 0;
  bottom: 0;
  margin: auto;
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
  position: relative;
  width: 500px;
  height: 350px;
  border-radius: 30px;
  border: 1px solid gray;
  display:inline-block;
  margin: 20px 20px 20px 20px;
  background-color: green;
  overflow: hidden;

}
.parttow{
  position: relative;
  width: 500px;
  height: 350px;
  border-radius: 30px;
  border: 1px solid gray;
  display:inline-block;
  margin: 20px 20px 20px 20px;
  background-color: yellowgreen;
  overflow: hidden;

}
.partthree{
  position: relative;
  width: 500px;
  height: 350px;
  border-radius: 30px;
  border: 1px solid gray;
  display:inline-block;
  margin: 10px 20px 20px 20px;
  background-color: royalblue;
  overflow: hidden;

}
.partfour{
  position: relative;
  width: 500px;
  height: 350px;
  border-radius: 30px;
  border: 1px solid gray;
  display:inline-block;
  margin: 10px 20px 20px 20px;
  background-color: purple;
  overflow: hidden;

}
.jump_map img{
  width: 100%;
  height: 100%;
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
  background-image: url("../assets/images/newAssets/banner-bg.jpg");
  background-position: center ;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
}
</style>