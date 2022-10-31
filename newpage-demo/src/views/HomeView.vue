<template>
  <el-affix :offset="0" >
    <el-menu :default-active="activeIndex" class="nav" mode="horizontal" @select="handleSelect" :ellipsis="false" >
      <el-menu-item index="mainSection">
        <img class="logo_img" src="../assets/images/newAssets/LOGO.png" alt="">
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="mainSection">首页</el-menu-item>
      <el-menu-item index="PartOne">"桩"点旅途</el-menu-item>
      <el-menu-item index="PartTwo">装“电”旅途</el-menu-item>
      <el-menu-item index="PartThree">装点“绿”途</el-menu-item>
      <el-menu-item index="partnerSection">总结</el-menu-item>
    </el-menu>
  </el-affix>
  <div class="content-wrapper">
    <section id="mainSection">
      <div class="inner-width mainSectionBg">
        <MainView @SectionJump="gotoSection"></MainView>
      </div>
    </section>

    <section id="PartOne-1">
      <div class="inner-width PartOneSectionBg">
        <CarRunning></CarRunning>
      </div>
    </section>
    <section id="PartOne-2">
      <div class="inner-width PartOneSectionBg">
        <Partone_02></Partone_02>
      </div>
    </section>
    <section id="PartOne-3">
      <div class="inner-width PartOneSectionBg">
      </div>
    </section>
    <section id="PartTwo">
      <div class="inner-width PartTwoSectionBg">
        <CarRunning02></CarRunning02>
      </div>
    </section>

    <section id="PartThree">
      <div class="inner-width PartThreeSectionBg">
      </div>
    </section>

    <section id="partnerSection">
      <div class="inner-width partnerSectionBg">
      </div>
    </section>
    <FooterView></FooterView>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import FooterView from "@/views/FooterView.vue";
import MainView from "@/views/MainView.vue";
import CarRunning from "@/views/CarRunning_01.vue";
import Partone_02 from "@/views/Partone_02.vue";
import CarRunning02 from "@/views/CarRunning_02.vue";


const activeIndex = ref("");
const handleSelect = async (key: string, keyPath: string[]) => {
  const el: HTMLElement | null = document.getElementById(key)
  await nextTick()
  console.log(el?.offsetTop)
  window.scrollTo({ "behavior": "smooth", "top": el && el.offsetTop || 0 })

}
const gotoSection = (SectionID: any) => {
  handleSelect(SectionID,"")
}

</script>

<style scoped>
.el-menu {
  background-color: #181818
}

.el-menu--horizontal {
  border-bottom: none;
}
.logo_img{
  width: auto;
  height: 28px;
  top: 3px;
}
.el-menu--horizontal>.el-menu-item {
  color: #ffffff
}

.nav {
  height: 5vh
}

.flex-grow {
  flex-grow: 1
}

section {
  width: 100%;
}

.inner-width {
  width: 100%;
  height: 95vh
}

.content-wrapper {
  background-color: black;
}

.mainSectionBg,
.PartOneSectionBg,
.PartTwoSectionBg,
.PartThreeSectionBg,
.partnerSectionBg {
  background-image: url("../assets/images/newAssets/banner-bg.jpg");
  background-size: cover;
  background-position: center ;
}



</style>