<template>
  <el-card class="main" :body-style="{ padding: '0px' }">
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="基本资料">
        <DeliverPerInfo />
      </el-tab-pane>
      <el-tab-pane label="实名认证">
        <DeliverCertification />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import { defineComponent } from "vue";
import DeliverPerInfo from "./DeliverPerInfo.vue";
import DeliverCertification from "./DeliverCertification.vue";
export default defineComponent({
  components: {
    DeliverPerInfo,
    DeliverCertification,
  },
});
</script>
<style scoped>
.main {
  height: 100%;
}
.tabs {
  border-radius: 2px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 30px;
}

.item {
  margin-bottom: 30px;
}

.box-card {
  width: 1500px;
}
.search_btn {
  height: auto;
}
.row {
  align-items: center;
}
</style>
