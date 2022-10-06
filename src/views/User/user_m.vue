<template>
  <el-tabs type="border-card">
    <el-tab-pane label="用户信息">
      <user_info />
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
import { defineComponent } from "vue";
import user_info from "../../components/user_info.vue";
export default defineComponent({
  components: {
    user_info,
  },
});
</script>
