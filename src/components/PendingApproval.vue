<template>
  <el-card shadow="hover">
    <div class="input-suffix">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="317"
        stripe
        border
      >
        <el-table-column fixed prop="id" label="序号" width="120" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="gender" label="性别" width="120" />
        <el-table-column prop="phone" label="联系方式" width="120" />
        <el-table-column prop="identity" label="身份证号" width="200" />
        <el-table-column prop="belong" label="隶属网点" width="200" />
        <el-table-column label="操作" fixed="right" width="120">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="
                dialogVisible = true;
                this.row_id = scope.row.id;
              "
              >同意</el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="
                dialogFormVisible = true;
                this.row_id = scope.row.id;
              "
              >拒绝</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialogVisible" title="提示">
              <span>确定要同意此快递员加入网点吗</span>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取消</el-button>
                  <el-button
                    type="primary"
                    @click=" dialogVisible = false; access_join(this.row_id);"
                    >确定</el-button>
                </span>
              </template>
            </el-dialog>
    <el-dialog v-model="dialogFormVisible" title="提示">
      <span>确定要拒绝此快递员加入网点吗</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button
            type="primary"
            @click="
              dialogFormVisible = false;
              refuse_join(this.row_id);
            "
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
<script >
import { ref } from "vue";
import axios from "axios";
const input1 = ref("");
import { Search } from "@element-plus/icons-vue";
// import func from 'vue-editor-bridge';
const dialogFormVisible = ref(false);
const dialogVisible = ref(false);
export default {
  data() {
    return {
      input1,
      tableData: [],
      Search,
      dialogFormVisible,
      row_id: "",
      dialogVisible,
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
        .get("http://localhost:3000/PendingApproal_info", {})
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
    refuse_join: function (param) {
      console.log("确定拒绝");
      console.log(param);
      //   axios.delete("http://localhost:3000/yuangong_info/"+param).then((res)=>{
      //     console.log(res)
      //   })
    },
    access_join:function (param){
      console.log("确定同意");
      console.log(param);
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