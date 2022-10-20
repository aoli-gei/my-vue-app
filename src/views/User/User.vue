<template>
  <div class="information">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>网点基本资料</span>
          <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
      </template>
      <div class="text item">
        {{ "网点ID：" + this.information_data.id }}
      </div>
      <div class="text item">
        {{ "负责人：" + this.information_data.leader }}
      </div>
      <div class="text item">
        <span>{{ "联系方式：" + this.information_data.phone }}</span>
        <el-button
          type="primary"
          class="edit"
          text
          @click="dialogFormVisible = true"
          >修改</el-button
        >
        <el-dialog v-model="dialogFormVisible" title="更换手机号">
          <!-- <el-form :model="form"> -->
            <el-form>
            <el-form-item label="新手机号" :label-width="formLabelWidth">
              <el-input v-model="new_phone" autocomplete="off" />
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false; submit_edit()"
                >确定</el-button
              >
            </span>
          </template>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
import { reactive,ref } from "vue";
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
// const form = reactive({
//   name: '',
//   region: '',
//   date1: '',
//   date2: '',
//   delivery: false,
//   type: [],
//   resource: '',
//   desc: '',
// })
export default {
  name: "tableData",
  data() {
    return {
      tableData: [],
      information_data: [],
      dialogFormVisible,
      formLabelWidth,
      // form,
      new_phone:""
    };
  },
  mounted() {
    //生命周期函数（或者 mounted 函数）调用的方法才能运行
    this.getData();
    // this.addData();
  },
  methods: {
    getData: function () {
      axios.get("http://localhost:3000/wangdian_information", {})
        .then((response) => {
          console.log(response.data);
          let results = response.data || [];
          if (results && results.length > 0) {
            this.information_data = results[0];
            console.log(this.information_data);
          }
        })
        .catch(function (error) {
          console.log(error);
          this.information_data = [];
        });
    },
    submit_edit: function(){
      if(this.new_phone != ""){
      axios({
             method:'PUT',
             url:'http://localhost:3000/wangdian_information/990067',
             data:{
                 phone:this.new_phone
            }
         })
        //  this.$refs[form].resetFields();         
      }
      else{
        alert("请输入手机号")
      }
    }
    // addData: function(){
    //     axios({
    //         method:'POST',
    //         url:'http://localhost:3000/test',
    //         data:{
    //             id:"12320000",
    //             name:"666女士",
    //             sex:"女",
    //             phonenumber:"144444440"
    //         }
    //     })
    // let data = {id:"123234",name:"werewr女士",sex:"女",phonenumber:"12345609870"}
    // axios.post("http://localhost:3000/test",data).then(response=>{
    //     console.log(response)
    // })
    // }
  },
};
</script>
<style scoped>
.information {
  height: 100%;
  background-color: white;
  /* padding: 20px; */
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.text {
  font-size: 18px;
  line-height: 50px;
  margin-left: 50px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  height: 100%;
}
.edit {
  margin-left: 10px;
  height: 25px;
  width: 45px;
}
</style>