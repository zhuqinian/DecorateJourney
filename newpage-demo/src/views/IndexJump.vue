<!--html-->
<template>
  <div class="Indexpage">
    <div class="InexView">
      <div class="banner-txt">
        <h1>"装点旅途"</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam quas non at similique molestiae dolorum natus.</p>
      </div>
      <div class="jump_map">
        <button class="button-main" @click="gotoPartonepage()">"桩"点旅途</button>
        <button class="button-main" @click="gotoParttwopage()">装“电”旅途</button>
        <button class="button-main" @click="gotoPartthreepage()">装点“绿”途</button>
        <button class="button-main" @click="gotoSection('partnerSection')">总结</button>
        <button class="button-main" @click="gotoIndexpage()">back</button>

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