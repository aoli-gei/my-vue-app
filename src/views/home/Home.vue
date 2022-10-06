<!-- 首页 -->
<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧分栏 -->
    <el-col :span="8" style="margin-top: 20px">
      <!-- 使用到卡片 -->
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/images/user.png" alt="" />
          <div class="userinfo">
            <!-- 名字，调用后端接口 -->
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-7-11</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧分栏 -->
    <el-col :span="16" style="margin-top: 20px"></el-col>
  </el-row>
</template>
<script>
import { defineComponent, onMounted,ref } from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    let tableData = ref([]);
    const tableLabel = {
      name: "课程",
      todayBuy: "今日购买",
      monthBuy: "本月购买",
      totalBuy: "总购买",
    };
    const getTableList = async () => {
      await axios.get("/home/getData").then((res) => {
        console.log(res.data.data.tableData);
        tableData.val = res.data.data.tableData;
      });
    };
    onMounted(() => {
      getTableList();
    });
    return {
      tableData,
      tableLabel,
    };
  },
});
</script>
<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
</style>
