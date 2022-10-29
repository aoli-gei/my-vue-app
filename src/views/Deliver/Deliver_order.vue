<template>
  <el-card class="main" :body-style="{ padding: '0px' }">
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="待揽收">
        <ExpressColeection />
      </el-tab-pane>
      <el-tab-pane label="待妥投">
        <ExpressDeliver />
      </el-tab-pane>
      <el-tab-pane label="待付款">
        <ExpressInfo />
      </el-tab-pane>
      <el-tab-pane label="全部订单">
        <ExpressInfo />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import { defineComponent } from "vue";
import ExpressColeection from "../../components/Deliver/ExpressCollection.vue";
import ExpressDeliver from "../../components/Deliver/ExpressDeliver.vue";
import user_info from "../../components/user_info.vue";
import PendingApproval from "../../components/PendingApproval.vue";
export default defineComponent({
  components: {
    ExpressColeection,
    ExpressDeliver,
    user_info,
    PendingApproval,
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
</style>
