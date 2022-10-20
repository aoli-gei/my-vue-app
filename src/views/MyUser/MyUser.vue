<template>
    <el-card shadow="hover">
      <div class="input-suffix">
        <el-row
          :gutter="20"
          class="row"
          style="margin-bottom: 15px; margin-left: 0"
        >
          <div class="search_info">
            <span>订单查询</span>
          </div>
          <el-col :span="12">
            <el-input
              v-model="input1"
              class="w-50 m-2"
              placeholder="请输入订单号搜索"
              :prefix-icon="Search"
            />
          </el-col>
          <el-button type="primary" class="search_btn" @click="search_info"
            >查询</el-button
          >
          <el-button type="primary" class="search_btn" @click="no_search"
            >取消查询</el-button
          >
        </el-row>
        <el-table
          :data="tableData"
          style="width: 100%"
          height="390"
          stripe
          border
        >
          <el-table-column fixed prop="id" label="订单号" width="150" />
          <el-table-column prop="sender" label="寄件人" width="100" />
          <el-table-column prop="phone0" label="寄件人联系方式" width="150" />
          <el-table-column prop="addressee" label="收件人" width="100" />
          <el-table-column prop="phone1" label="收件人联系方式" width="150" />
          <el-table-column prop="state" label="运输状态" width="100" />
          <el-table-column prop="time" label="下单时间" width="180" />
          <el-table-column prop="yuangong" label="快递员" width="100" />
          <el-table-column prop="yuangong_id" label="快递员工号" width="150" />
          <el-table-column prop="info" label="物品信息" width="100" />
          <el-table-column prop="weight" label="计费重量" width="100" />
          <el-table-column prop="cost" label="费用" width="100" />
          </el-table>
          </div>
    </el-card>
  </template>
  <script >
  import { ref } from "vue";
  import axios from "axios";
  const input1 = ref("");
  import { Search } from "@element-plus/icons-vue";
  // import type { Action } from "element-plus";
//   import { ElMessage, ElMessageBox } from 'element-plus';
//   const dialogFormVisible = ref(false);
  export default {
    data() {
      return {
        input1,
        tableData: [],
        Search
      };
    },
    mounted() {
      //生命周期函数（或者 mounted 函数）调用的方法才能运行
      this.getData();
      // this.addData();
      // this.search_info;
    },
    methods: {
      getData: function () {
        axios
          .get("http://localhost:3000/kuaidi_info", {})
          .then((response) => {
            console.log(response.data);
            let results = response.data || [];
            if (results && results.length > 0) {
              this.tableData = results;
              console.log(this.tableData);
            }
          })
          .catch(function (error) {
            console.log(error);
            this.itableData = [];
          });
      },
      search_info: function () {
      this.tableData = this.tableData.filter(
        (data) =>
          !this.input1 ||
          data.id.includes(this.input1) ||
          data.id.toLowerCase().includes(this.input1.toLowerCase())
      );
      console.log(this.tableData);
    },
    no_search: function () {
      this.getData();
    }
    },
  };
  </script>
  <style>
  .main {
    height: 100%;
    /* background-color: white; */
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
  
  
  
  