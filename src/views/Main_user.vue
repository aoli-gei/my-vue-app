<!-- 快递员首页 -->
<template>
    <div class="common-layout">
      <el-container>
        <common-aside />
        <el-container>
          <common-header />
          <el-main class="main">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import CommonHeader from "../components/CommonHeader.vue";
  import CommonAside from "../components/CommonAside.vue";
  export default defineComponent({
    components: {
      CommonHeader,
      CommonAside,
    },
  });
  </script>
  
  <style lang="less" scoped>
  .main{
    height: 90vh;////
    // background-color: white;
  }
  .el-container {
    flex-wrap: wrap;
    align-items: flex-start;
    flex-basis: 0%;
    // height: 100%;
  }
  .common-layout{
    height: 100%;
    &>.el-container{
      height: 100%;
      &>.el-aside{
        height: 100%;
        background: #545c64;
      }
    }
  }
  </style>
  