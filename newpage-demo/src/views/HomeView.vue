<template>
  <el-affix :offset="0" >
<!--    <el-menu :default-active="activeIndex" class="nav" mode="horizontal" @select="handleSelect" :ellipsis="false" >-->
<!--      <el-menu-item index="mainSection">-->
<!--        <img class="logo_img" src="../assets/images/newAssets/LOGO.png" alt="">-->
<!--      </el-menu-item>-->
<!--      <div class="flex-grow" />-->
<!--      <el-menu-item index="mainSection">首页</el-menu-item>-->

<!--    </el-menu>-->
  </el-affix>
  <div class="content-wrapper">
    <section id="mainSection">
      <div class="inner-width mainSectionBg">
        <MainView @SectionJump="gotoSection"></MainView>
      </div>
    </section>
<!--    <section>-->
<!--      <div class="inner-width mainSectionBg">-->
<!--        <IndexJump @SectionJump="gotoSection"></IndexJump>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section id="PartOne-1">-->
<!--      <div class="inner-width PartOneSectionBg">-->
<!--        &lt;!&ndash; <CarRunning></CarRunning> &ndash;&gt;-->
<!--        <Partone_01></Partone_01>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section id="PartOne-2">-->
<!--      <div class="inner-width PartOneSectionBg">-->
<!--        <Partone_02></Partone_02>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section id="PartOne-3">-->
<!--      <div class="inner-width PartOneSectionBg">-->
<!--        <Partone_03></Partone_03>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section id="PartTwo">-->
<!--      <div class="inner-width PartTwoSectionBg">-->
<!--        <CarRunning02></CarRunning02>-->
<!--      </div>-->
<!--    </section>-->

<!--    <section id="PartThree">-->
<!--      <div class="inner-width PartThreeSectionBg">-->
<!--      </div>-->
<!--    </section>-->

<!--    <section id="partnerSection">-->
<!--      <div class="inner-width partnerSectionBg">-->
<!--      </div>-->
<!--    </section>-->
<!--    <FooterView></FooterView>-->
  </div>
  
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import MainView from "@/views/MainView.vue"



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
  height: 100vh
}

.content-wrapper {
  background-color: black;
}

.mainSectionBg,
.PartOneSectionBg,
.PartTwoSectionBg,
.PartThreeSectionBg,
.partnerSectionBg {
  background-image: url("../assets/images/background/green.png");
  background-size: cover;
  background-position: center ;
  overflow: hidden;
}



</style>