<!-- 首页 -->
<template>
  <div class="common-layout">
    <el-container>
      <deliver_-aside />
      <el-container>
        <common-header />
        <el-main class="main">
          <router-view />
          <!-- 上面 router 是动态变化部分 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue";
import deliver_Aside from "../components/deliver_Aside.vue";
export default defineComponent({
  components: {
    CommonHeader,
    deliver_Aside,
  },
});
</script>

<style lang="less" scoped>
.main {
  height: 90vh; ////
  // background-color: white;
}
.el-container {
  flex-wrap: wrap;
  align-items: flex-start;
  flex-basis: 0%;
  // height: 100%;
}
.common-layout {
  height: 100%;
  & > .el-container {
    height: 100%;
    & > .el-aside {
      height: 100%;
      background: #545c64;
    }
  }
}
</style>
