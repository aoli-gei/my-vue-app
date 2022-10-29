<!-- 带妥投数据 -->
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
              placeholder="请输入订单号搜素"
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
          height="317"
          stripe
          border
        >
          <el-table-column fixed prop="id" label="订单号" width="150" />
          <el-table-column prop="name" label="收件人" width="120" />
          <el-table-column prop="phone" label="下单手机号" width="120" />
          <el-table-column prop="time" label="下单时间" width="120" />
          <el-table-column prop="adress" label="收件地址" width="200" />
          <el-table-column label="操作" fixed="right">
            <template #default="scope">
              <el-button
                link
                type="primary"
                size="small"
                @click="
                  dialogFormVisible = true;
                  this.row_id = scope.row.id;
                "
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog v-model="dialogFormVisible" title="提示">
        <span>确定要删除该条员工信息吗？</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button
              type="primary"
              @click="
                dialogFormVisible = false;
                delete_info(this.row_id);
              "
              >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </el-card>
  </template>
  <script>
  import { ref } from "vue";
  import axios from "axios";
  const input1 = ref("");
  import { Search } from "@element-plus/icons-vue";
  // import type { Action } from "element-plus";
  import { ElMessage, ElMessageBox } from "element-plus";
  const dialogFormVisible = ref(false);
  export default {
    data() {
      return {
        input1,
        tableData: [],
        Search,
        dialogFormVisible,
        row_id: "",
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
          .get("http://localhost:3000/yuangong_info", {})
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
      },
      delete_info: function (param) {
        console.log("确定删除");
        console.log(param);
        axios
          .delete("http://localhost:3000/yuangong_info/" + param)
          .then((res) => {
            console.log(res);
          });
      },
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
  