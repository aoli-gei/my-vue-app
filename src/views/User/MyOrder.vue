<template>
  <el-card class="main" :body-style="{padding: '0px'}">
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="员工查询">
        <user_info />
      </el-tab-pane>
      <el-tab-pane label="待审核">
        <PendingApproval />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import { defineComponent } from "vue";
import user_info from "../../components/user_info.vue";
import PendingApproval from "../../components/PendingApproval.vue";
export default defineComponent({
  components: {
    user_info,
    PendingApproval,
  },
});
</script>
<style scoped>
.main {
  height: 100%;
}
.tabs{
  border-radius: 2px;
}
</style>
