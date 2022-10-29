<template>
  <div class="information">
    <el-card class="box-card">
      <div class="text item">
        <span>认证方式：</span>
        <el-button type="default">
          上传身份证实名认证（人工）<el-icon><Avatar /></el-icon>
        </el-button>
      </div>
      <div class="item">
        <span class="text">真实姓名：</span>
        <el-input />
        <font font-size="large" color="red">
          请输入与身份证一致的真实姓名！</font
        >
      </div>
      <div class="item">
        <span class="text">身份证号码：</span>
        <el-input />
        <font font-size="large" color="red">
          请输入与您支付宝一致的姓名和身份证号！</font
        >
      </div>
      <el-button type="primary">
        确认，马上上传！<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
import { reactive, ref } from "vue";
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
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
      new_phone: "",
    };
  },
  mounted() {
    //生命周期函数（或者 mounted 函数）调用的方法才能运行
    this.getData();
    // this.addData();
  },
  methods: {
    getData: function () {
      axios
        .get("http://localhost:3000/wangdian_information", {})
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
    submit_edit: function () {
      if (this.new_phone != "") {
        axios({
          method: "PUT",
          url: "http://localhost:3000/wangdian_information/990067",
          data: {
            phone: this.new_phone,
          },
        });
        //  this.$refs[form].resetFields();
      } else {
        alert("请输入手机号");
      }
    },
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
const input = ref("");
</script>
<style scoped>
.el-input {
  display: inline;
}
.box-card {
  width: auto;
  height: auto;
  box-shadow: none;
}
.item {
  margin-bottom: 18px;
}

.text {
  font-size: large;
  color: slategray;
}
.main {
  height: 100%;
}
.tabs {
  border-radius: 2px;
}
</style>
