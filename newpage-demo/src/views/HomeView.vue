<template>
  <el-affix :offset="0">
    <el-menu :default-active="activeIndex" class="nav" mode="horizontal" @select="handleSelect" :ellipsis="false">
      <el-menu-item index="mainSection">
        <img class="logo_img" src="../assets/images/newAssets/LOGO.png" alt="">
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="mainSection">首页</el-menu-item>
      <el-menu-item index="functionSection">介绍</el-menu-item>
      <el-menu-item index="diySection">数据展示01</el-menu-item>
      <el-menu-item index="demoSection">数据展示02</el-menu-item>
      <el-menu-item index="partnerSection">数据展示03</el-menu-item>
    </el-menu>
  </el-affix>
  <div class="content-wrapper">
    <section id="mainSection">
      <div class="inner-width mainSectionBg">
        <CarRunning></CarRunning>
      </div>
    </section>

    <section id="functionSection">
      <div class="inner-width functionSectionBg">
        <MainView></MainView>
      </div>
    </section>

    <section id="diySection">
      <div class="inner-width diySectionBg">
        <CarRunning02></CarRunning02>
      </div>
    </section>

    <section id="demoSection">
      <div class="inner-width demoSectionBg">
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
import MainView from "@/views/MainView.vue"
import CarRunning from "@/views/CarRunning_01.vue"
import CarRunning02 from "@/views/CarRunning_02.vue"
// import Dinosuar from "@/views/Dinosuar.vue"


const activeIndex = ref("");
const handleSelect = async (key: string, keyPath: string[]) => {
  const el: HTMLElement | null = document.getElementById(key)
  await nextTick()
  console.log(el?.offsetTop)
  window.scrollTo({ "behavior": "smooth", "top": el && el.offsetTop || 0 })

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
.functionSectionBg,
.diySectionBg,
.demoSectionBg,
.partnerSectionBg {
  background-image: url("../assets/images/newAssets/banner-bg.jpg");
  background-size: cover;
  background-position: center ;
}



</style>